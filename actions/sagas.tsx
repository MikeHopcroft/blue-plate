import Bowser from "bowser";

import {
  CatalogSpec,
  createWorld3,
  loadCatalogSpec,
  LogicalValidationSuite,
  ObjectLoader,
  speechToTextFilter,
  State,
  TextTurn,
} from 'prix-fixe';

import { put, select } from 'redux-saga/effects';
import { createShortOrderWorld2, LexiconSpec } from 'short-order';

import {
  appendHistory,
  ChromeDetectAction,
  LoadWorldAction,
  ProcessAction,
  setCart,
  setSpeechSupport,
  setWorld
} from '../actions';

import { runTests } from '../logic';

import { ApplicationState, BluePlateWorld } from './application-state';
import { getSampleHistory } from './sample-history';
import { getSampleHistoryES } from './sample-history-es';

const bakeryEN = require('../data/bakery.yaml');
const coffeeEN = require('../data/coffee.yaml');
const menuEN = require('../data/menu.yaml');
const lexiconSpecEN = require('../data/lexicon.yaml');
const regressionSuiteEN = require('../data/regression.yaml');

const bakeryES = require('../data/bakery-es.yaml');
const coffeeES = require('../data/coffee-es.yaml');
const menuES = require('../data/menu-es.yaml');
const lexiconSpecES = require('../data/lexicon-es.yaml');
const regressionSuiteES = require('../data/regression-es.yaml');

function getLoader(language: string) {
  if (language === 'es-US') {
    return new ObjectLoader([
      ['/samples/menu/menu.yaml', menuES],
      ['/samples/menu/bakery-es.yaml', bakeryES],
      ['/samples/menu/coffee-es.yaml', coffeeES],
    ]);
  } else {
    return new ObjectLoader([
      ['/samples/menu/menu.yaml', menuEN],
      ['/samples/menu/bakery.yaml', bakeryEN],
      ['/samples/menu/coffee.yaml', coffeeEN],
    ]);
  }
}

function getLexicon(language: string) {
  if (language === 'es-US') {
    return lexiconSpecES;
  } else {
    return lexiconSpecEN;
  }
}

function getRegressionSuite(language: string) {
  if (language === 'es-US') {
    return regressionSuiteES;
  } else {
    return regressionSuiteEN;
  }
}

// Chrome detection now handled by ChromeDetect component.
// export function* chromeDetectSaga(action: ChromeDetectAction) {
//   // NOTE that window === undefined during server-side rendering.
//   if (window !== undefined) {
//     console.log(`Window=${window}`);
//     const b = Bowser.parse(window.navigator.userAgent);
//     // TODO: use browser.satisfies() for Chrome detection.
//     const isChrome = b.browser.name === 'Chrome';
//     console.log(`setSpeechSupport(${isChrome}, (name=${b.browser.name}))`);
//     yield put(setSpeechSupport(isChrome));
//   }
// }

export function* loadWorldSaga(action: LoadWorldAction) {
  const loader = getLoader(action.language);
  const lexiconSpec = getLexicon(action.language);

  const spec: CatalogSpec = yield loadCatalogSpec(
    loader,
    '/samples/menu/menu.yaml'
  );

  const prixFixeWorld = createWorld3(spec);
  const shortOrderWorld = createShortOrderWorld2(
    prixFixeWorld,
    lexiconSpec,
    action.language === 'es-US' ? 'snowball-es' : 'snowball',
    false
  );

  // Sort for display by LexiconControl.
  (lexiconSpec as LexiconSpec).lexicon.sort((a,b) => 
    a.name.localeCompare(b.name)
  );

  // Validate regression suite.
  console.log('before validation');
  // logicalValidationSuite is not in core because of better-ajv-erros.
  // const expected = logicalValidationSuite<TextTurn>(regressionSuite);
  const expected = getRegressionSuite(action.language) as LogicalValidationSuite<TextTurn>

  const testResults = yield runTests(prixFixeWorld, shortOrderWorld, expected);

  const tokenizer = shortOrderWorld.lexer.tokenizer;
  const postings = tokenizer.getPostings();

  const bluePlateWorld: BluePlateWorld = {
    prixFixeWorld,
    lexiconSpec: lexiconSpec,
    postings,
    shortOrderWorld,
    testResults,
  }

  const history = action.language === 'es-US' ?
    getSampleHistoryES() : 
    getSampleHistory();

  yield put(setWorld(bluePlateWorld, history, action.language));
}

// TODO: clean this up.
function getAppState(appState: ApplicationState): ApplicationState {
  return appState;
}

export function* processSaga({ source, text, final }: ProcessAction) {
  // TODO: remove final check for interim carts.
  if (final) {
    // TODO: call to speechToTextFilter() should not be duplicated
    // in applyProcess().
    const appState: ApplicationState = yield(select(getAppState));
    // console.log(`raw text: "${text}"`);
    const filtered = speechToTextFilter(text);
    // console.log(`filtered text: "${filtered}"`);
    const state0: State = { cart: appState.cart };
    const state1: State = 
      yield appState.bluePlateWorld.shortOrderWorld.processor(
        filtered,
        state0
      );
    yield(put(setCart(state1.cart)));
    yield(put(appendHistory(state1.cart, source, text)));
  }
}

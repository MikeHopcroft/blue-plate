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
  LoadWorldAction,
  ProcessAction,
  setCart,
  setWorld
} from '../actions';

import { runTests } from '../logic';

import { ApplicationState, BluePlateWorld } from './application-state';

const bakery= require('../data/bakery.yaml');
const coffee= require('../data/coffee.yaml');
const menu = require('../data/menu.yaml');
const lexiconSpec = require('../data/lexicon.yaml');
const regressionSuite = require('../data/regression.yaml');

export function* loadWorldSaga(action: LoadWorldAction) {
  const loader = new ObjectLoader([
    ['/samples/menu/menu.yaml', menu],
    ['/samples/menu/bakery.yaml', bakery],
    ['/samples/menu/coffee.yaml', coffee],
  ]);

  const spec: CatalogSpec = yield loadCatalogSpec(
    loader,
    '/samples/menu/menu.yaml'
  );
  const prixFixeWorld = createWorld3(spec);
  const shortOrderWorld = createShortOrderWorld2(
    prixFixeWorld,
    lexiconSpec,
    undefined,
    true
  );

  // Sort for display by LexiconControl.
  (lexiconSpec as LexiconSpec).lexicon.sort((a,b) => 
    a.name.localeCompare(b.name)
  );

  // Validate regression suite.
  console.log('before validation');
  // logicalValidationSuite is not in core because of better-ajv-erros.
  // const expected = logicalValidationSuite<TextTurn>(regressionSuite);
  const expected = regressionSuite as LogicalValidationSuite<TextTurn>

  const testResults = yield runTests(prixFixeWorld, shortOrderWorld, expected);

  const tokenizer = shortOrderWorld.lexer.tokenizer;
  const postings = tokenizer.getPostings();

  const bluePlateWorld: BluePlateWorld = {
    prixFixeWorld,
    lexiconSpec,
    postings,
    shortOrderWorld,
    testResults,
  }

  yield(put(setWorld(bluePlateWorld)));
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
    const filtered = speechToTextFilter(text);
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

import {
  CatalogSpec,
  createMenuBasedRepairFunction,
  createWorld3,
  loadCatalogSpec,
  logicalCartFromCart,
  LogicalScoredSuite,
  ObjectLoader,
  scoreSuite,
  speechToTextFilter,
  State,
  TextTurn,
  enumerateTestCases,
  LogicalValidationSuite,
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

import { ApplicationState } from './application-state';

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
  const world = createWorld3(spec);
  const shortOrderWorld = createShortOrderWorld2(
    world,
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

  //
  // Run each test case.
  //
  console.log('before test run');
  const observed: LogicalValidationSuite<TextTurn> = { tests: [] };
  for (const test of enumerateTestCases(expected)) {
    let state: State = { cart: { items: [] } };
    const steps: typeof test.steps = [];
    for (const step of test.steps) {
      for (const turn of step.turns) {
        try {
          const filtered = speechToTextFilter(turn.transcription);
          state = yield shortOrderWorld.processor(filtered, state);
        } catch (e) {
          // TODO: record the error here, somehow.
        }
      }
      const cart = logicalCartFromCart(state.cart, world.catalog);
      steps.push({ ...step, cart });
    }
    observed.tests.push({ ...test, steps });
  };

  //
  // Score the results
  //
  const repairFunction = createMenuBasedRepairFunction(
    world.attributeInfo,
    world.catalog
  );
  const scored = scoreSuite(observed, expected, repairFunction, 'menu-based') as LogicalScoredSuite<TextTurn>;
  console.log(scored);

  yield(put(setWorld(world, shortOrderWorld, lexiconSpec, expected, scored)));
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
    const state1: State = yield appState.shortOrderWorld.processor(
      filtered,
      state0
    );
    yield(put(setCart(state1.cart)));
    yield(put(appendHistory(state1.cart, source, text)));
  }
}

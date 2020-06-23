import {
  CatalogSpec,
  createWorld3,
  loadCatalogSpec,
  ObjectLoader,
  State,
} from 'prix-fixe';

import { put, select } from 'redux-saga/effects';
import { createShortOrderWorld2 } from 'short-order';

import {
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

export function* loadWorldSaga(action: LoadWorldAction) {
  const loader = new ObjectLoader([
    ['/samples/menu/menu.yaml', menu],
    ['/samples/menu/bakery.yaml', bakery],
    ['/samples/menu/coffee.yaml', coffee],
  ]);

  const spec: CatalogSpec = yield loadCatalogSpec(loader, '/samples/menu/menu.yaml');
  const world = createWorld3(spec);
  const shortOrderWorld = createShortOrderWorld2(
    world,
    lexiconSpec,
    undefined,
    true
  );

  yield(put(setWorld(world, shortOrderWorld)));
}

// TODO: clean this up.
function getAppState(appState: ApplicationState): ApplicationState {
  return appState;
}

export function* processSaga({ text, final }: ProcessAction) {
  // TODO: remove final check for interim carts.
  if (final) {
    const appState = yield(select(getAppState));
    const state0: State = { cart: appState.cart };
    const state1: State = yield appState.shortOrderWorld.processor(text, state0);
    yield(put(setCart(state1.cart)));
  }
}

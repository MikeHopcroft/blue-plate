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

const menuRoot = {
  catalog: [
    {
      items: [
        {
          name: 'apple bran muffin',
          aliases: ['apple bran muffin', 'apple muffin'],
        },
        {
          name: 'blueberry muffin',
          aliases: ['blueberry muffin'],
        }
      ]
    }
  ],
  imports: [
    'foo/child.yaml',
  ]
};

const menuChild = {
  catalog: [
    {
      items: [
        {
          name: 'lemon poppyseed muffin',
          aliases: ['lemon poppyseed muffin', 'lemon muffin'],
        },
      ]
    }
  ],
};

export function* loadWorldSaga(action: LoadWorldAction) {
  const loader = new ObjectLoader([
    // ['/samples/menu/menu.yaml', menuRoot],
    // ['/samples/menu/foo/child.yaml', menuChild],
    ['/samples/menu/menu.yaml', menu],
    ['/samples/menu/bakery.yaml', bakery],
    ['/samples/menu/coffee.yaml', coffee],
  ]);

  console.log('saga() before yield');

  const spec: CatalogSpec = yield loadCatalogSpec(loader, '/samples/menu/menu.yaml');

  console.log('saga() after yield');

  const world = createWorld3(spec);
  console.log('before');
  console.log(createShortOrderWorld2);
  console.log('before2');
  const shortOrderWorld = createShortOrderWorld2(
    world,
    lexiconSpec,
    undefined,
    true
  );
  console.log('before3');

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
    console.log('have appState');
    console.log(appState);
    const state0: State = { cart: appState.cart };
    const state1: State = yield appState.shortOrderWorld.processor(text, state0);
    yield(put(setCart(state1.cart)));
  }
}

import {
  CatalogSpec,
  createWorld3,
  loadCatalogSpec,
  ObjectLoader,
} from 'prix-fixe';

import React from 'react';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { call, put, takeLatest } from 'redux-saga/effects';

import { ActionType, initialState, LoadWorldAction, loadWorld, setWorld } from '../actions';
import { ApplicationStateReducer } from '../actions/reducers'
import FrameControl from '../components/frame-control';

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

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  ApplicationStateReducer,
  initialState(),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(initSagas)
store.dispatch(loadWorld());

function* saga(action: LoadWorldAction) {
  const loader = new ObjectLoader([
    ['/samples/menu/menu.yaml', menuRoot],
    ['/samples/menu/foo/child.yaml', menuChild],
  ]);

  console.log('saga() before yield');

  const spec: CatalogSpec = yield loadCatalogSpec(loader, '/samples/menu/menu.yaml');

  console.log('saga() after yield');

  const world = createWorld3(spec);
  yield(put(setWorld(world)));
}

function* initSagas() {
  console.log('initSagas()');
  yield takeLatest(ActionType.LOAD_WORLD, saga);
}

export default function Home() {
  return (
    <Provider store={store}>
        <FrameControl/>
    </Provider>
  );
}

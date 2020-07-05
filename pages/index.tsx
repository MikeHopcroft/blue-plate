import React from 'react';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { takeLatest } from 'redux-saga/effects';

import {
  ActionType,
  initialState,
  loadWorld,
  loadWorldSaga,
  processSaga,
} from '../actions';

import { ApplicationStateReducer } from '../actions/reducers'
import FrameControl from '../components/frame-control';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  ApplicationStateReducer,
  initialState(),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(initSagas)
store.dispatch(loadWorld('en-US'));

function* initSagas() {
  // console.log('initSagas()');
  yield takeLatest(ActionType.LOAD_WORLD, loadWorldSaga);
  yield takeLatest(ActionType.PROCESS, processSaga);
}

export default function Home() {
  return (
    <Provider store={store}>
        <FrameControl/>
    </Provider>
  );
}

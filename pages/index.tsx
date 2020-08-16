import React from 'react';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { takeLatest } from 'redux-saga/effects';

import {
  ActionType,
  chromeDetect,
  chromeDetectSaga,
  initialState,
  loadWorld,
  loadWorldSaga,
  processSaga,
  saveSpeechConfig,
} from '../actions';

import { ApplicationStateReducer } from '../actions/reducers'
import FrameControl from '../components/frame-control';

const sagaMiddleware = createSagaMiddleware()

const initial = initialState();
const store = createStore(
  ApplicationStateReducer,
  initial,
  applyMiddleware(sagaMiddleware)
);

// https://stackoverflow.com/questions/35305661/where-to-write-to-localstorage-in-a-redux-app
let speechConfig = initial.speechConfig;
store.subscribe(() => {
  const config = store.getState().speechConfig;
  if (config !== speechConfig) {
    speechConfig = config;
    saveSpeechConfig(speechConfig);
  }
});

sagaMiddleware.run(initSagas)
store.dispatch(loadWorld('en-US'));
store.dispatch(chromeDetect());

function* initSagas() {
  // console.log('initSagas()');
  yield takeLatest(ActionType.LOAD_WORLD, loadWorldSaga);
  yield takeLatest(ActionType.PROCESS, processSaga);
  yield takeLatest(ActionType.CHROME_DETECT, chromeDetectSaga);
}

export default function Home() {
  return (
    <Provider store={store}>
        <FrameControl/>
    </Provider>
  );
}

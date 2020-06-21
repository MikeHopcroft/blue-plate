import React from 'react';
// import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
// import createSagaMiddleware from 'redux-saga'

// import './stylesheets/index.css';

import { initialState } from '../actions/application-state';
import { ApplicationStateReducer } from '../actions/reducers'
// import DragDropRootControl from './controls/drag-drop-root-control';
import FrameControl from '../components/frame-control';
// import * as serviceWorker from './serviceWorker';

// const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  ApplicationStateReducer,
  initialState(),
  // applyMiddleware(sagaMiddleware)
);

// const server = 1;
// sagaMiddleware.run(processDMXActions, server)

export default function Home() {
  return (
    <Provider store={store}>
      <h3>
        Blue Plate Special
      </h3>
      <FrameControl/>
    </Provider>
  );
}

// ReactDOM.render(
//   <Provider store={store}>
//     <DragDropRootControl>
//       <h3>
//         PI DMX Controller 456
//       </h3>
//       <FrameControl />
//     </DragDropRootControl>
//   </Provider>,
//   document.getElementById("root")
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

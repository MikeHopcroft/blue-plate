// import classNames from 'classnames'
import Link from 'next/link';

import {
  Cart,
  Catalog,
  CatalogSpec,
  createWorld3,
  ICatalog,
  loadCatalogSpec,
  ObjectLoader,
  World,
} from 'prix-fixe';

import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { call, put, takeLatest } from 'redux-saga/effects';

import { initialState } from '../actions/application-state';
import { ApplicationStateReducer } from '../actions/reducers'
import FrameControl from '../components/frame-control';
import { ActionType, LoadWorldAction, loadWorld, setWorld } from '../actions';

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

  // try {
  //   // If `fetch()` fails, redux-saga will throw a catchable error
  //   let user = yield fetch(`https://api.github.com/users/${action.name}`);
  //   user = yield user.json();
  //   // `put()` is redux-saga's wrapper around `store.dispatch()`
  //   yield put({ type: 'FETCH_USER_SUCCESS', user });
  // } catch (error) {
  //   yield put({ type: 'FETCH_USER_ERROR', error });
  // }
}

function* initSagas() {
  console.log('initSagas()');
  yield takeLatest(ActionType.LOAD_WORLD, saga);
}

export default function Home() {
  return (
    <Provider store={store}>
        <Navbar bg="dark" variant="dark" expand="sm">
          <Navbar.Brand href="#home">short-order</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"  >
              <Link href="/" passHref>
                <Nav.Link>Home</Nav.Link>
              </Link>
              <Link href="#menu" passHref>
                <Nav.Link>Menu</Nav.Link>
              </Link>
              <Link href="#graph" passHref>
                <Nav.Link>Graph</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <FrameControl/>
    </Provider>
  );
}

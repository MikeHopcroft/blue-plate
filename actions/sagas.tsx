import {
  CatalogSpec,
  createWorld3,
  loadCatalogSpec,
  ObjectLoader,
} from 'prix-fixe';

import { put } from 'redux-saga/effects';

import { LoadWorldAction, setWorld } from '../actions';

const bakery= require('../data/bakery.yaml');
const coffee= require('../data/coffee.yaml');
const menu = require('../data/menu.yaml');

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
  yield(put(setWorld(world)));
}

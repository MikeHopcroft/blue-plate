import {
  Cart,
  // createWorld3,
  // loadCatalogSpec,
  // ObjectLoader,
  // ICatalog,
  // Catalog,
  World
} from 'prix-fixe';

export enum ApplicationMode {
  INSTRUCTIONS = 'INSTRUCTIONS',
  MENU = 'MENU',
  GRAPH = 'GRAPH',
};

export interface ApplicationState {
  world?: World;
  mode: ApplicationMode;
  isRecording: boolean;
  transcription: string;
  cart: Cart;
}

// const menuRoot = {
//   catalog: [
//     {
//       items: [
//         {
//           name: 'apple bran muffin',
//           aliases: ['apple bran muffin', 'apple muffin'],
//         },
//         {
//           name: 'blueberry muffin',
//           aliases: ['blueberry muffin'],
//         }
//       ]
//     }
//   ],
//   imports: [
//     'foo/child.yaml',
//   ]
// };

// const menuChild = {
//   catalog: [
//     {
//       items: [
//         {
//           name: 'lemon poppyseed muffin',
//           aliases: ['lemon poppyseed muffin', 'lemon muffin'],
//         },
//       ]
//     }
//   ],
// };


export function initialState(): ApplicationState {
  console.log('initialState');

  // const loader = new ObjectLoader([
  //   ['/samples/menu/menu.yaml', menuRoot],
  //   ['/samples/menu/foo/child.yaml', menuChild],
  // ]);
  // const spec = await loadCatalogSpec(loader, '/samples/menu/menu.yaml');
  // const world = createWorld3(spec);
  // const catalog = world.catalog;

  return {
    mode: ApplicationMode.INSTRUCTIONS,
    isRecording: false,
    transcription: '',
    cart: {
      items: []
    }
  }
}

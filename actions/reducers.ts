import { State } from 'prix-fixe';
import { Reducer } from 'redux';

import {
  ActionType,
  AnyAction,
  ProcessAction,
  RecordAction,
  ResetAction,
  SetCartAction,
  SetModeAction,
  SetWorldAction,
} from './actions';

import { ApplicationState, initialState, HistoryItem } from './application-state';
import { Cart, ItemInstance } from 'prix-fixe';

///////////////////////////////////////////////////////////////////////////////
//
// Reducer
//
///////////////////////////////////////////////////////////////////////////////
export const ApplicationStateReducer: Reducer<ApplicationState, AnyAction> =
  (state: ApplicationState = initialState(), action): ApplicationState => {
    switch (action.type) {
      case ActionType.PROCESS:
        return applyProcess(state, action);
      case ActionType.RECORD:
        return applyRecord(state, action);
      case ActionType.RESET:
        return applyReset(state, action);
      case ActionType.SET_CART:
        return applySetCart(state, action);
      case ActionType.SET_MODE:
        return applySetMode(state, action);
      case ActionType.SET_WORLD:
        return applySetWorld(state, action);
      default:
        return state;
    }
  };

function applyProcess(
  appState: ApplicationState,
  { text, final }: ProcessAction
): ApplicationState {
  console.log(`process("${text}",${final})`);

  // TODO: consider doing this in the saga.
  const item: HistoryItem = {
    timestamp: new Date(),
    text
  }
  const history = final ? [...appState.history, item] : appState.history;

  return {
    ...appState,
    transcription: text,
    history
  };
}

function applyRecord(
  appState: ApplicationState,
  { isRecording }: RecordAction
): ApplicationState {
  // TODO: add current state to undo stack
  // Perhaps do this in the saga.

  return {
    ...appState,
    isRecording
  };
}

function applyReset(
  appState: ApplicationState,
  action: ResetAction
): ApplicationState {
  return {
    ...appState,
    transcription: '',
    cart: {
      items: []
    },
  };
}

function applySetCart(
  appState: ApplicationState,
  { cart }: SetCartAction
): ApplicationState {
  return {
    ...appState,
    cart
  };
}

function applySetMode(
  appState: ApplicationState,
  { mode }: SetModeAction
): ApplicationState {
  return {
    ...appState,
    mode
  };
}

function applySetWorld(
  appState: ApplicationState,
  { world, shortOrderWorld }: SetWorldAction
): ApplicationState {
  let cart: Cart = { items: [] };
  cart = world.cartOps.addToCart(cart, {
    uid: 1,
    key: '302:1:1',
    quantity: 1,
    children: [
      {
        uid: 2,
        key: '604:1',
        quantity: 1,
        children: [],
      }
    ],
  });

  console.log(`Cart = ${JSON.stringify(cart, null, 4)}`);

  return {
    ...appState,
    world,
    shortOrderWorld,
    cart
  };
}

import { Reducer } from 'redux';

import {
  ActionType,
  AnyAction,
  ProcessAction,
  RecordAction,
  ResetAction,
  SetModeAction,
  SetWorldAction,
} from './actions';

import { ApplicationState, initialState } from './application-state';
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
  { text }: ProcessAction
): ApplicationState {
  return {
    ...appState,
    transcription: text
  };
}

function applyRecord(
  appState: ApplicationState,
  { isRecording }: RecordAction
): ApplicationState {
  // TODO: add current state to undo stack

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
  { world }: SetWorldAction
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
    cart
  };
}

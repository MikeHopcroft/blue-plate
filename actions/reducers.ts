import { State } from 'prix-fixe';
import { Reducer } from 'redux';

import {
  ActionType,
  AnyAction,
  ClearHistoryAction,
  ProcessAction,
  RecordAction,
  ResetAction,
  SetCartAction,
  SetModeAction,
  SetWorldAction,
  SetSpeechSupportAction,
} from './actions';

import { ApplicationState, initialState, HistoryItem } from './application-state';
import { Cart } from 'prix-fixe';

///////////////////////////////////////////////////////////////////////////////
//
// Reducer
//
///////////////////////////////////////////////////////////////////////////////
export const ApplicationStateReducer: Reducer<ApplicationState, AnyAction> =
  (state: ApplicationState = initialState(), action): ApplicationState => {
    switch (action.type) {
      case ActionType.CLEAR_HISTORY:
        return applyClearHistory(state, action);
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
      case ActionType.SET_SPEECH_SUPPORT:
        return applySetSpeechSupport(state, action);
      case ActionType.SET_WORLD:
        return applySetWorld(state, action);
      default:
        return state;
    }
  };

function applyClearHistory(
  appState: ApplicationState,
  action: ClearHistoryAction
): ApplicationState {
  return {
    ...appState,
    history: []
  }
}

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

function applySetSpeechSupport(
  appState: ApplicationState,
  { speechSupport }: SetSpeechSupportAction
): ApplicationState {
  return {
    ...appState,
    speechSupport
  };
}

function applySetWorld(
  appState: ApplicationState,
  { world, shortOrderWorld }: SetWorldAction
): ApplicationState {
  return {
    ...appState,
    world,
    shortOrderWorld,
    cart: { items: [] },
  };
}

import { IdGenerator, speechToTextFilter } from 'prix-fixe';
import { Reducer } from 'redux';

import {
  ActionType,
  AnyAction,
  AppendHistoryAction,
  ClearCartAction,
  ClearHistoryAction,
  ProcessAction,
  RecordAction,
  ResetAction,
  SetCartAction,
  SetModeAction,
  SetWorldAction,
  SetSpeechSupportAction,
  UpdateHistoryItemAction,
} from './actions';

import {
  ApplicationState,
  initialState,
  HistoryItem,
  Correctness,
} from './application-state';

///////////////////////////////////////////////////////////////////////////////
//
// Reducer
//
///////////////////////////////////////////////////////////////////////////////
export const ApplicationStateReducer: Reducer<ApplicationState, AnyAction> =
  (state: ApplicationState = initialState(), action): ApplicationState => {
    switch (action.type) {
      case ActionType.APPEND_HISTORY:
        return applyAppendHistory(state, action);
      case ActionType.CLEAR_CART:
        return applyClearCart(state, action);
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
      case ActionType.UPDATE_HISTORY_ITEM:
        return applyUpdateHistoryItem(state, action);
      default:
        return state;
    }
  };


export const historyIds = new IdGenerator();

function applyAppendHistory(
  appState: ApplicationState,
  { cart, source, text }: AppendHistoryAction
): ApplicationState {
  const item: HistoryItem = {
    cart,
    correctness: Correctness.UNKNOWN,
    id: historyIds.next(),
    source,
    timestamp: new Date(),
    text
  }

  const history = [...appState.history, item];

  return {
    ...appState,
    history
  }
}

function applyClearCart(
  appState: ApplicationState,
  action: ClearCartAction
): ApplicationState {
  return {
    ...appState,
    cart: { items: [] }
  }
}

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
  // Just update the transcription.
  // The real work is done in a saga.

  // TODO: call to speechToTextFilter() should not be duplicated
  // in processSaga().
  return {
    ...appState,
    transcription: speechToTextFilter(text),
  };
}

function applyRecord(
  appState: ApplicationState,
  { isRecording }: RecordAction
): ApplicationState {
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
  { bluePlateWorld}: SetWorldAction
): ApplicationState {
  return {
    ...appState,
    bluePlateWorld,
    cart: { items: [] },
  };
}

function applyUpdateHistoryItem(
  appState: ApplicationState,
  { id, changes }: UpdateHistoryItemAction
): ApplicationState {
  const history = appState.history.map(item =>
    (id === item.id) ? {...item, ...changes} : item
  );

  return {
    ...appState,
    history
  };
}

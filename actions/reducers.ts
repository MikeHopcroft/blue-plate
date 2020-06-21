import { Reducer } from 'redux';

import {
  ActionType,
  AnyAction,
  ProcessAction,
  RecordAction,
  ResetAction,
  SetModeAction
} from './actions';

import { ApplicationState, initialState } from './application-state';

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

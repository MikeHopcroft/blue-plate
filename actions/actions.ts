import { ApplicationMode } from "./application-state";

export enum ActionType {
  PROCESS = 'PROCESS',
  RECORD = 'RECORD',
  RESET = 'RESET',
  SET_MODE = 'SET_MODE',
};

export interface ProcessAction {
  type: ActionType.PROCESS;
  text: string;
};

export function process(text: string): ProcessAction {
  return { type: ActionType.PROCESS, text };
}

export interface RecordAction {
  type: ActionType.RECORD;
  isRecording: boolean;
};

export function record(isRecording: boolean): RecordAction {
  return { type: ActionType.RECORD, isRecording };
}

export interface ResetAction {
  type: ActionType.RESET;
};

export function reset(): ResetAction {
  return { type: ActionType.RESET };
}

export interface SetModeAction {
  type: ActionType.SET_MODE;
  mode: ApplicationMode;
};

export function setMode(mode: ApplicationMode): SetModeAction {
  return { type: ActionType.SET_MODE, mode };
}

export type AnyAction =
  ProcessAction |
  RecordAction |
  ResetAction | 
  SetModeAction;

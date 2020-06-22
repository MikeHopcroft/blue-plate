import { World } from 'prix-fixe';

import { ApplicationMode } from "./application-state";

export enum ActionType {
  LOAD_WORLD = 'LOAD_WORLD',
  PROCESS = 'PROCESS',
  RECORD = 'RECORD',
  RESET = 'RESET',
  SET_WORLD = 'SET_WORLD',
  SET_MODE = 'SET_MODE',
};

export interface LoadWorldAction {
  type: ActionType.LOAD_WORLD;
};

export function loadWorld(): LoadWorldAction {
  return { type: ActionType.LOAD_WORLD };
}

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

export interface SetWorldAction {
  type: ActionType.SET_WORLD;
  world: World;
};

export function setWorld(world: World): SetWorldAction {
  return { type: ActionType.SET_WORLD, world };
}

export type AnyAction =
  LoadWorldAction |
  ProcessAction |
  RecordAction |
  ResetAction |
  SetModeAction |
  SetWorldAction;

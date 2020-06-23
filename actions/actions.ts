import { World, Cart } from 'prix-fixe';
import { ShortOrderWorld } from 'short-order';

import { ApplicationMode } from "./application-state";

export enum ActionType {
  CLEAR_HISTORY = 'CLEAR_HISTORY',
  LOAD_WORLD = 'LOAD_WORLD',
  PROCESS = 'PROCESS',
  RECORD = 'RECORD',
  RESET = 'RESET',
  SET_CART = 'SET_CART',
  SET_MODE = 'SET_MODE',
  SET_WORLD = 'SET_WORLD',
};

export interface ClearHistoryAction {
  type: ActionType.CLEAR_HISTORY;
};

export function clearHistory(): ClearHistoryAction {
  return { type: ActionType.CLEAR_HISTORY };
}

export interface LoadWorldAction {
  type: ActionType.LOAD_WORLD;
};

export function loadWorld(): LoadWorldAction {
  return { type: ActionType.LOAD_WORLD };
}

export interface ProcessAction {
  type: ActionType.PROCESS;
  text: string;
  final: boolean;
};

export function process(text: string, final: boolean): ProcessAction {
  return { type: ActionType.PROCESS, text, final };
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

export interface SetCartAction {
  type: ActionType.SET_CART;
  cart: Cart;
};

export function setCart(cart: Cart): SetCartAction {
  return { type: ActionType.SET_CART, cart };
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
  shortOrderWorld: ShortOrderWorld;
};

export function setWorld(world: World, shortOrderWorld: ShortOrderWorld): SetWorldAction {
  return { type: ActionType.SET_WORLD, world, shortOrderWorld };
}

export type AnyAction =
  ClearHistoryAction |
  LoadWorldAction |
  ProcessAction |
  RecordAction |
  ResetAction |
  SetCartAction |
  SetModeAction |
  SetWorldAction;

import { Cart } from 'prix-fixe';

import {
 ApplicationMode,
 BluePlateWorld,
 HistoryItem,
 SpeechConfig,
 TextSource
} from "./application-state";

export enum ActionType {
  APPEND_HISTORY = 'APPEND_HISTORY',
  CHROME_DETECT = 'CHROME_DETECT',
  CLEAR_CART = 'CLEAR_CART',
  CLEAR_HISTORY = 'CLEAR_HISTORY',
  LOAD_WORLD = 'LOAD_WORLD',
  PROCESS = 'PROCESS',
  RECORD = 'RECORD',
  RESET = 'RESET',
  SET_CART = 'SET_CART',
  SET_MODE = 'SET_MODE',
  SET_SPEECH_CONFIG = 'SET_SPEECH_CONFIG',
  SET_SPEECH_SUPPORT = 'SET_SPEECH_SUPPORT',
  SET_WORLD = 'SET_WORLD',
  UNDO = 'UNDO',
  UPDATE_HISTORY_ITEM = 'UPDATE_HISTORY'
};

export interface AppendHistoryAction {
  type: ActionType.APPEND_HISTORY;
  cart: Cart;
  source: TextSource,
  text: string;
};

export function appendHistory(
  cart: Cart,
  source: TextSource,
  text: string
): AppendHistoryAction {
  return { 
    type: ActionType.APPEND_HISTORY,
    cart,
    source,
    text
  };
}

export interface ChromeDetectAction {
  type: ActionType.CHROME_DETECT;
};

export function chromeDetect(): ChromeDetectAction {
  return { type: ActionType.CHROME_DETECT };
}

export interface ClearCartAction {
  type: ActionType.CLEAR_CART;
};

export function clearCart(): ClearCartAction {
  return { type: ActionType.CLEAR_CART };
}

export interface ClearHistoryAction {
  type: ActionType.CLEAR_HISTORY;
};

export function clearHistory(): ClearHistoryAction {
  return { type: ActionType.CLEAR_HISTORY };
}

export interface LoadWorldAction {
  type: ActionType.LOAD_WORLD;
  language: string;
};

export function loadWorld(language: string): LoadWorldAction {
  return { type: ActionType.LOAD_WORLD, language };
}

export interface ProcessAction {
  type: ActionType.PROCESS;
  source: TextSource,
  text: string;
  final: boolean;
};

export function process(
  source: TextSource,
  text: string,
  final: boolean
): ProcessAction {
  return {
    source,
    type: ActionType.PROCESS,
    text,
    final
  };
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
  bluePlateWorld: BluePlateWorld;
  history: HistoryItem[];
  language: string;
};

export function setWorld(
  bluePlateWorld: BluePlateWorld,
  history: HistoryItem[],
  language: string
): SetWorldAction {
  console.log('setWorld');
  return {
    type: ActionType.SET_WORLD,
    bluePlateWorld,
    history,
    language,
  };
}

export interface SetSpeechConfigAction {
  type: ActionType.SET_SPEECH_CONFIG;
  speechConfig: Partial<SpeechConfig>;
};

export function setSpeechConfig(
  speechConfig: Partial<SpeechConfig>
): SetSpeechConfigAction {
  return { type: ActionType.SET_SPEECH_CONFIG, speechConfig };
}

export interface SetSpeechSupportAction {
  type: ActionType.SET_SPEECH_SUPPORT;
  speechSupport: boolean;
};

export function setSpeechSupport(speechSupport: boolean): SetSpeechSupportAction {
  return { type: ActionType.SET_SPEECH_SUPPORT, speechSupport };
}

export interface UndoAction {
  type: ActionType.UNDO;
};

export function undo(): UndoAction {
  return {
    type: ActionType.UNDO,
  };
}

export interface UpdateHistoryItemAction {
  type: ActionType.UPDATE_HISTORY_ITEM;
  id: number;
  changes: Partial<HistoryItem>;
};

export function updateHistoryItem(
  id: number,
  changes: Partial<HistoryItem>
): UpdateHistoryItemAction {
  return {
    type: ActionType.UPDATE_HISTORY_ITEM,
    id,
    changes
  };
}

export type AnyAction =
  AppendHistoryAction |
  ChromeDetectAction |
  ClearCartAction |
  ClearHistoryAction |
  LoadWorldAction |
  ProcessAction |
  RecordAction |
  ResetAction |
  SetCartAction |
  SetModeAction |
  SetWorldAction |
  SetSpeechConfigAction |
  SetSpeechSupportAction |
  UndoAction |
  UpdateHistoryItemAction;

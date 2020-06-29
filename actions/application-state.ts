import { Cart, PID, World } from 'prix-fixe';
import { LexiconSpec, ShortOrderWorld } from 'short-order';

import { getSampleHistory } from './sample-history';

export enum ApplicationMode {
  INSTRUCTIONS = 'INSTRUCTIONS',
  MENU = 'MENU',
  GRAPH = 'GRAPH',
};

export enum TextSource {
  KEYBOARD = 'KEYBOARD',
  MICROPHONE = 'MICROPHONE',
}

export enum Correctness {
  CORRECT = 'CORRECT',
  INCORRECT = 'INCORRECT',
}

export interface HistoryItem {
  cart: Cart;
  source: TextSource;
  timestamp: Date;
  text: string;
  correctness?: Correctness;
  note?: string;
};

export interface ApplicationState {
  world?: World;
  speechSupport: boolean;
  shortOrderWorld?: ShortOrderWorld;
  lexiconSpec?: LexiconSpec;
  mode: ApplicationMode;
  isRecording: boolean;
  transcription: string;
  cart: Cart;
  history: HistoryItem[];
  currentPID?: PID;
  optionPID?: PID;
}

export function initialState(): ApplicationState {
  return {
    speechSupport: true,
    mode: ApplicationMode.INSTRUCTIONS,
    isRecording: false,
    transcription: '',
    cart: {
      items: []
    },
    history: getSampleHistory(),
    currentPID: 302
  }
}

import { Cart, World } from 'prix-fixe';
import { LexiconSpec, ShortOrderWorld } from 'short-order';
import { InvertedIndex } from 'token-flow';

import { AllTestResults } from '../logic';

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
  UNKNOWN = 'UNKNOWN',
}

export interface HistoryItem {
  cart: Cart;
  id: number;
  source: TextSource;
  timestamp: Date;
  text: string;
  correctness: Correctness;
  note?: string;
};

export interface BluePlateWorld {
  prixFixeWorld: World;
  lexiconSpec: LexiconSpec;
  postings: InvertedIndex;
  shortOrderWorld: ShortOrderWorld;
  testResults: AllTestResults;
}

export interface ApplicationState {
  speechSupport: boolean;
  mode: ApplicationMode;
  isRecording: boolean;
  transcription: string;
  cart: Cart;
  history: HistoryItem[];
  bluePlateWorld?: BluePlateWorld;
  language: string;
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
    language: 'en-US',
  }
}

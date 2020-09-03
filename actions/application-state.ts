import { Cart, World } from 'prix-fixe';
import { LexiconSpec, ShortOrderWorld } from 'short-order';
import { InvertedIndex } from 'token-flow';

import { AllTestResults } from '../logic';

import { getSampleHistory } from './sample-history';
import { loadSpeechConfig } from './speech-config';

export enum ApplicationMode {
  INSTRUCTIONS = 'INSTRUCTIONS',
  MENU = 'MENU',
  GRAPH = 'GRAPH',
};

export enum TextSource {
  COMMAND = 'COMMAND',
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
};

export enum SpeechMode {
  AZURE = 'AZURE',
  TEXT = 'TEXT',
  WEB_SPEECH = 'WEB_SPEECH'
}

export interface SpeechConfig {
  speechSupport: boolean;
  persistedMode: SpeechMode;
  mode: SpeechMode;
  azureSubscriptionKey: string;
  azureRegion: string;
};

export interface ApplicationState {
  mode: ApplicationMode;
  isRecording: boolean;
  transcription: string;
  cart: Cart;
  history: HistoryItem[];
  undoStack: Cart[];
  bluePlateWorld?: BluePlateWorld;
  language: string;
  speechConfig: SpeechConfig;
}

export function initialState(): ApplicationState {
  const speechConfig = loadSpeechConfig();

  return {
    mode: ApplicationMode.INSTRUCTIONS,
    isRecording: false,
    transcription: '',
    cart: {
      items: []
    },
    history: getSampleHistory(),
    undoStack: [ { items: [] }],
    language: 'en-US',
    speechConfig
  }
}

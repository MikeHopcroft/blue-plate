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

export interface SpeechConfig {
  speechSupport: boolean;
  useAzureSpeech: boolean;
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

function loadAzureConfig(): {
  useAzureSpeech: boolean;
  azureSubscriptionKey: string;
  azureRegion: string;
} {
  try {
    const azureSpeech = localStorage.getItem('useAzureSpeech');
    return {
      useAzureSpeech: azureSpeech === 'true',
      azureSubscriptionKey: localStorage.getItem('azureSubscriptionKey'),
      azureRegion: localStorage.getItem('azureRegion'),
    }
  } catch (e) {
    return {
      useAzureSpeech: false,
      azureSubscriptionKey: '',
      azureRegion: '',
    }
  }
}

export function initialState(): ApplicationState {
  const azureConfig = loadAzureConfig();

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
    speechConfig: {
      speechSupport: true,
      ...azureConfig
    }
  }
}

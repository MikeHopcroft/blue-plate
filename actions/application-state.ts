import { Cart, World } from 'prix-fixe';
import { ShortOrderWorld } from 'short-order';

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

export interface HistoryItem {
  cart: Cart;
  source: TextSource;
  timestamp: Date;
  text: string;
};

export interface ApplicationState {
  world?: World;
  speechSupport: boolean;
  shortOrderWorld?: ShortOrderWorld;
  mode: ApplicationMode;
  isRecording: boolean;
  transcription: string;
  cart: Cart;
  history: HistoryItem[];
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
  }
}

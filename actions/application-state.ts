import { Cart, World } from 'prix-fixe';
import { ShortOrderWorld } from 'short-order';

import { getSampleHistory } from './sample-history';

export enum ApplicationMode {
  INSTRUCTIONS = 'INSTRUCTIONS',
  MENU = 'MENU',
  GRAPH = 'GRAPH',
};

export interface HistoryItem {
  timestamp: Date;
  text: string;
};

export interface ApplicationState {
  world?: World;
  shortOrderWorld?: ShortOrderWorld;
  mode: ApplicationMode;
  isRecording: boolean;
  transcription: string;
  cart: Cart;
  history: HistoryItem[];
}

export function initialState(): ApplicationState {
  // console.log('initialState');

  return {
    mode: ApplicationMode.INSTRUCTIONS,
    isRecording: false,
    transcription: '',
    cart: {
      items: []
    },
    history: getSampleHistory(),
  }
}

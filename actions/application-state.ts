import { Cart, World } from 'prix-fixe';
import { ShortOrderWorld } from 'short-order';

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
  console.log('initialState');

  return {
    mode: ApplicationMode.INSTRUCTIONS,
    isRecording: false,
    transcription: "I'd like a grande iced latte decaf that's all",
    cart: {
      items: []
    },
    history: []
  }
}

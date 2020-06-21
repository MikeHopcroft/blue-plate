import { Cart } from 'prix-fixe';

export enum ApplicationMode {
  INSTRUCTIONS = 'INSTRUCTIONS',
  MENU = 'MENU',
  GRAPH = 'GRAPH',
};

export interface ApplicationState {
  mode: ApplicationMode;
  isRecording: boolean;
  transcription: string;
  cart: Cart;
}

export function initialState(): ApplicationState {
  console.log('initialState');
  return {
    mode: ApplicationMode.INSTRUCTIONS,
    isRecording: false,
    transcription: '',
    cart: {
      items: []
    }
  }
}

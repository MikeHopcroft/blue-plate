import * as SpeechSDK from 'microsoft-cognitiveservices-speech-sdk';

import { SpeechConfig } from '../actions';

export interface IRecognizer {
  onerror: () => void;
  onresult: (transcription: string, isFinal: boolean) => void;
  onspeechend: () => void;

  start(): void;
  stop(): void;

  enabled(): boolean;
}

export function CreateRecognizer(
  window: Window,
  config: SpeechConfig,
  language: string
): IRecognizer {
  try {
    if (config.useAzureSpeech) {
      console.log('AzureSpeechRecognizer');
      return new AzureSpeechRecognizer(
        config.azureSubscriptionKey,
        config.azureRegion,
        language
      );
    } else {
      console.log('WebSpeechRecognizer');
      return new WebSpeechRecognizer(window, language);
    }
  } catch (e) {
    console.log('Error: using NopSpeechRecognizer');
    return new NopSpeechRecognizer();
  }
}

export class WebSpeechRecognizer implements IRecognizer {
  onerror: () => void;
  onresult: (transcription: string, isFinal: boolean) => void;
  onspeechend: () => void;

  private readonly recognition: any;

  constructor(window: Window, language: string) {
    this.onerror = () => {};
    this.onresult = () => {};
    this.onspeechend = () => {};

    const SpeechRecognition =
      (window as any).speechRecognition ||
      (window as any).webkitSpeechRecognition;

    this.recognition = new SpeechRecognition();
    this.recognition.lang = language;
    this.recognition.interimResults = true;
    this.recognition.maxAlternatives = 1;

    this.recognition.onresult = (event: any) => {
      const transcription = event.results[0][0].transcript as string;
      this.onresult(transcription, event.results[0].isFinal);
    }

    this.recognition.onspeechend = () => {
      this.recognition.stop();
      this.onspeechend();
    }

    this.recognition.onerror = (event: any) => {
      this.onerror();
    }
  }

  start(): void {
    this.recognition.start();
  }

  stop(): void {
    this.recognition.stop();
  }

  enabled(): boolean {
    return true;
  }
}

export class AzureSpeechRecognizer implements IRecognizer {
  onerror: () => void;
  onresult: (transcription: string, isFinal: boolean) => void;
  onspeechend: () => void;

  recognizer: SpeechSDK.SpeechRecognizer;

  constructor(subscriptionKey: string, region: string, language: string) {
    this.onerror = () => {};
    this.onresult = () => {};
    this.onspeechend = () => {};

    const speechConfig = SpeechSDK.SpeechConfig.fromSubscription(
      subscriptionKey,
      region
    );

    speechConfig.speechRecognitionLanguage = language;
    const audioConfig  = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();
    this.recognizer = new SpeechSDK.SpeechRecognizer(speechConfig, audioConfig);
  }

  start(): void {
    const onresult = this.onresult;
    const onerror = this.onerror;
    const onspeechend = this.onspeechend;

    const recognizer = this.recognizer;

    try {
      recognizer.recognized = (
        sender: SpeechSDK.Recognizer,
        event: SpeechSDK.SpeechRecognitionEventArgs
      ) => {
        console.log('================ final result =================');
        if (event.result.text !== undefined) {
          // Azure seems to return undefined when it encounters an error.
          // Seems like it shouldn't invoke this callback on error.
          onresult(event.result.text, true);
        }
      }

      recognizer.recognizing = (
        sender: SpeechSDK.Recognizer,
        event: SpeechSDK.SpeechRecognitionEventArgs
      ) => {
        console.log('================ interim result =================');
        if (event.result.text !== undefined) {
          // Azure seems to return undefined when it encounters an error.
          // Seems like it shouldn't invoke this callback on error.
          onresult(event.result.text, false);
        }
      }

      recognizer.recognizeOnceAsync(
        function (result) {
          console.log('================ recognizeOnceAsync callback =================');
          // if (result.text !== undefined) {
          //   // Azure seems to return undefined when it encounters an error.
          //   // Seems like it shouldn't invoke this callback on error.
          //   onresult(result.text, true);
          // }
          onspeechend();
          recognizer.close();
        },
        function (err) {
          console.log('================ recognizeOnceAsync error =================');
          console.log(err);
          onerror();
          onspeechend();
          recognizer.close();
          // recognizer = undefined;
      });
    } catch (e) {
      console.log('caught exception in recognizer.recognizeOnceAsync()');
    }
  }

  stop(): void {
    // throw new Error("Method not implemented.");
  }

  enabled(): boolean {
    return true;
  }
}

export class NopSpeechRecognizer implements IRecognizer {
  onerror: () => void;
  onresult: (transcription: string, isFinal: boolean) => void;
  onspeechend: () => void;

  constructor() {
    this.onerror = () => {};
    this.onresult = () => {};
    this.onspeechend = () => {};
  }

  start(): void {
  }

  stop(): void {
  }

  enabled(): boolean {
    return false;
  }
}

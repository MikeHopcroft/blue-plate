import * as SpeechSDK from 'microsoft-cognitiveservices-speech-sdk';

export interface IRecognizer {
  onerror: () => void;
  onresult: (transcription: string, isFinal: boolean) => void;
  onspeechend: () => void;

  start(): void;
  stop(): void;
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

    this.recognizer.recognizeOnceAsync(
      function (result) {
        console.log('================ result =================');
        onresult(result.text, true);
        // startRecognizeOnceAsyncButton.disabled = false;
        // phraseDiv.innerHTML += result.text;
        // window.console.log(result);

        this.recognizer.close();
        // recognizer = undefined;
      },
      function (err) {
        // startRecognizeOnceAsyncButton.disabled = false;
        // phraseDiv.innerHTML += err;
        // window.console.log(err);

        console.log('================ error =================');
        onerror();
        this.recognizer.close();
        // recognizer = undefined;
      });
    }

  stop(): void {
    throw new Error("Method not implemented.");
  }
}
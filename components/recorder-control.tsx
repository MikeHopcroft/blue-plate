import React from "react";
import Button from 'react-bootstrap/Button';
import { FaMicrophone, FaMicrophoneSlash } from 'react-icons/fa';
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import {
  ApplicationState,
  AnyAction,
  process,
  record,
  TextSource
} from "../actions";

import {
  AzureSpeechRecognizer,
  IRecognizer,
  WebSpeechRecognizer
} from './recognizers';

import styles from './controls.module.css';

interface Props {
  application: ApplicationState;
  recording: (isRecording: boolean) => void;
  transcriptionReady: (
    source: TextSource,
    transcription: string,
    final: boolean
  ) => void;
};

class RecorderControl extends React.Component<Props> {
  private recognizer: IRecognizer;

  // private recognition: any;
  private input: React.RefObject<HTMLInputElement>;

  private historyIndex = 0;
  private newText: string;

  constructor(props: Props) {
    super(props)
    this.input = React.createRef()
  }

  async componentDidMount() {
    // const SpeechRecognition =
    //   (window as any).speechRecognition ||
    //   (window as any).webkitSpeechRecognition;

    // this.recognition = new SpeechRecognition();
    // this.recognition.lang = this.props.application.language;
    // this.recognition.interimResults = true;
    // this.recognition.maxAlternatives = 1;

    // this.recognizer = new WebSpeechRecognizer(window, this.props.application.language);
    this.recognizer = new AzureSpeechRecognizer(
      '',
      'westus2',
      this.props.application.language
    );
  }

  componentDidUpdate() {
    // this.recognition.lang = this.props.application.language;
    this.recognizer = new WebSpeechRecognizer(window, this.props.application.language);
  }

  public startRecognition = () => {
    if (!this.props.application.isRecording) {
      console.log('startRecognition');
      this.props.recording(true);

      this.recognizer.onresult = (transcription: string, isFinal: boolean) => {
        console.log(`Transcription: "${transcription}"`);
        this.props.transcriptionReady(
          TextSource.MICROPHONE,
          transcription,
          isFinal
        );
      }

      this.recognizer.onspeechend = () => {
        this.props.recording(false);
        this.recognizer.stop();
      }

      this.recognizer.onerror = () => {
        this.props.recording(false);
      }

      this.recognizer.start();
    }
  }

  public endRecognition = () => {
    console.log('endRecognition');
    this.props.recording(false);
    this.recognizer.stop();
  }

  // public startRecognition = () => {
  //   if (!this.props.application.isRecording) {
  //     console.log('startRecognition');
  //     this.props.recording(true);

  //     this.recognition.onresult = (event: any) => {
  //       const speechResult = event.results[0][0].transcript as string;
  //       console.log(event);
  //       console.log(`Transcription: "${speechResult}"`);
  //       this.props.transcriptionReady(
  //         TextSource.MICROPHONE,
  //         speechResult,
  //         event.results[0].isFinal
  //       );
  //     }

  //     this.recognition.onspeechend = () => {
  //       this.props.recording(false);
  //       this.recognition.stop();
  //     }

  //     this.recognition.onerror = (event: any) => {
  //       this.props.recording(false);
  //     }

  //     this.recognition.start();
  //   }
  // }

  // public endRecognition = () => {
  //   console.log('endRecognition');
  //   this.props.recording(false);
  //   this.recognition.stop();
  // }

  public onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const input = this.input.current;
    const history = this.props.application.history;

    if (e.key === 'Enter') {
      console.log('submitText');
      this.props.transcriptionReady(
        TextSource.KEYBOARD,
        this.input.current.value,
        true
      );
      input.value = '';
      this.historyIndex = 0;
      e.preventDefault()
    } else if (e.key === 'ArrowUp') {
      if (this.historyIndex < history.length) {
        if (this.historyIndex === 0) {
          this.newText = input.value;
        }
        ++this.historyIndex;
        const text = history[
          history.length - this.historyIndex
        ].text;
        input.value = text;
        setCaretPosition(input, text.length);
        e.preventDefault();
      } else {
        e.preventDefault();
      }
    } else if (e.key === 'ArrowDown') {
      const history = this.props.application.history;
      if (this.historyIndex > 1) {
        --this.historyIndex;
        const text = history[
          history.length - this.historyIndex
        ].text;
        input.value = text;
        setCaretPosition(input, text.length);
        e.preventDefault();
      } else {
        this.historyIndex = 0;
        input.value = this.newText;
        setCaretPosition(input, this.newText.length);
        e.preventDefault();
      }
    }
  }

  render() {
    return (
      <div className={styles.recorder}>
        <div className={styles.recorderInput}>
          <Button
            className="btn btn-success btn-sm"
            disabled={
              !this.props.application.speechSupport ||
              this.props.application.isRecording
            }
            onClick={this.startRecognition}
          >
            <FaMicrophone />
            Start Recording
          </Button>
          <Button
            className="btn btn-danger btn-sm"
            disabled={
              !this.props.application.speechSupport ||
              !this.props.application.isRecording
            }
            onClick={this.endRecognition}
          >
            <FaMicrophoneSlash />
            Stop Recording
          </Button>
          <input
            style={{ flexGrow: 1, marginLeft: '2em' }}
            type="text"
            placeholder="enter text"
            ref={this.input} onKeyDown={this.onKeyDown}
          ></input>
        </div>
        <div>
          <b>Transcription: </b>
          <i>
            {this.props.application.transcription}
          </i>
        </div>
      </div>
    );
  }
}

function setCaretPosition(input: HTMLInputElement, position: number) {
  input.focus();
  input.setSelectionRange(position, position);
  input.selectionStart = position;
  input.selectionEnd = position;
}

function mapStateToProps(application: ApplicationState) {
  return { application };
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
  return {
    recording: (isRecording: boolean) => {
      dispatch(record(isRecording));
    },

    transcriptionReady: (source: TextSource, text: string, final: boolean) => {
      dispatch(process(source, text, final));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RecorderControl);

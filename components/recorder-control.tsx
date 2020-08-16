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
  TextSource,
  SpeechMode
} from "../actions";

import { CreateRecognizer, IRecognizer } from './recognizers';

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

  private input: React.RefObject<HTMLInputElement>;

  private historyIndex = 0;
  private newText: string;

  constructor(props: Props) {
    super(props)
    this.input = React.createRef()
  }

  async componentDidMount() {
    console.log('record-control: componentDidMount');
    this.recognizer = CreateRecognizer(
      window,
      this.props.application.speechConfig,
      this.props.application.language
    );
  }

  componentDidUpdate() {
    console.log('record-control: componentDidUpdate');
    this.recognizer = CreateRecognizer(
      window,
      this.props.application.speechConfig,
      this.props.application.language
    );
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
    const mode = this.props.application.speechConfig.mode;
    const recordTitle = mode === SpeechMode.TEXT ?
      "Recording disabled. To enable, select either Azure Speech or Google Speech from dropdown at top window." :
      "Start recording"

    return (
      <div className={styles.recorder}>
        <div className={styles.recorderInput}>
          <Button
            className="btn btn-success btn-sm"
            disabled={
              this.props.application.speechConfig.mode === SpeechMode.TEXT ||
              this.props.application.isRecording
            }
            onClick={this.startRecognition}
            title={recordTitle}
          >
            <FaMicrophone />
            Start Recording
          </Button>
          <Button
            className="btn btn-danger btn-sm"
            disabled={
              this.props.application.speechConfig.mode === SpeechMode.TEXT ||
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

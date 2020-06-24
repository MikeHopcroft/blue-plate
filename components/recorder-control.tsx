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
  private recognition: any;
  private input: React.RefObject<HTMLInputElement>;

  constructor(props: Props) {
    super(props)
    this.input = React.createRef()
  }

  async componentDidMount() {
    const SpeechRecognition =
      (window as any).speechRecognition ||
      (window as any).webkitSpeechRecognition;

    this.recognition = new SpeechRecognition();
    this.recognition.lang = 'en-US';
    this.recognition.interimResults = true;
    this.recognition.maxAlternatives = 1;
  }

  public startRecognition = () => {
    if (!this.props.application.isRecording) {
      console.log('startRecognition');
      this.props.recording(true);

      this.recognition.onresult = (event: any) => {
        const speechResult = event.results[0][0].transcript as string;
        console.log(event);
        console.log(`Transcription: "${speechResult}"`);
        this.props.transcriptionReady(
          TextSource.MICROPHONE,
          speechResult,
          event.results[0].isFinal
        );
      }

      this.recognition.onspeechend = () => {
        this.props.recording(false);
        this.recognition.stop();
      }

      this.recognition.onerror = (event: any) => {
        this.props.recording(false);
      }

      this.recognition.start();
    }
  }

  public endRecognition = () => {
    console.log('endRecognition');
    this.props.recording(false);
    this.recognition.stop();
  }

  public onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      console.log('submitText');
      this.props.transcriptionReady(
        TextSource.KEYBOARD,
        this.input.current.value,
        true
      );
      this.input.current.value = '';
      e.preventDefault()
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
            style={{flexGrow: 1, marginLeft: '2em'}}
            type="text"
            placeholder="enter text"
            ref = {this.input} onKeyDown={this.onKeyDown}
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

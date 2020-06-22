import React from "react";
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { ApplicationState, AnyAction, process, record } from "../actions";

import styles from './controls.module.css';

interface Props {
  application: ApplicationState;
  toggleRecording: (isRecording: boolean) => void;
  transcriptionReady: (transcription: string, final: boolean) => void;
};

class RecorderControl extends React.Component<Props> {
  private recognition: any;

  async componentDidMount() {
    console.log(`RecorderControl.componentDidMount()`);

    const SpeechRecognition =
      (window as any).speechRecognition ||
      (window as any).webkitSpeechRecognition;

    this.recognition = new SpeechRecognition();
    this.recognition.lang = 'en-US';
    this.recognition.interimResults = true;
    this.recognition.maxAlternatives = 1;
  }

  public startRecognition = () => {
    console.log('startRecognition');
    this.setState({ isRecording: true });

    console.log('this.recognition.start();');
    this.recognition.start();

    console.log(`set this.recognition.onresult`);
    this.recognition.onresult = (event: any) => {
      const speechResult = event.results[0][0].transcript as string;
      console.log(event);
      console.log(`Transcription: "${speechResult}"`);
      this.props.transcriptionReady(speechResult, event.results[0].isFinal);
    }

    this.recognition.onspeechend = () => {
      this.setState({ isRecording: false });
      this.recognition.stop();
    }

    this.recognition.onerror = (event: any) => {
      this.setState({ isRecording: false });
    }
  }

  public endRecognition = () => {
    console.log('endRecognition');
    this.setState({ isRecording: false });
    this.recognition.stop();
  }

  render() {
    return (
      <div className={styles.recorder}>
        <Button
          className="btn btn-success btn-sm"
          disabled={this.props.application.isRecording}
          onClick={this.startRecognition}
        >
          <i className="fa fa-microphone"/> Start Recording
        </Button>
        <Button
          className="btn btn-danger btn-sm"
          disabled={!this.props.application.isRecording}
          onClick={this.endRecognition}
        >
          <i className="fa fa-microphone-slash"/> Stop Recording
        </Button>
        {/* <div>
          Recording: {this.props.application.isRecording ? 'true' : 'false'}
        </div> */}
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
    toggleRecording: (isRecording: boolean) => {
      dispatch(record(isRecording));
    },
    transcriptionReady: (text: string, final: boolean) => {
      dispatch(process(text, final));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RecorderControl);

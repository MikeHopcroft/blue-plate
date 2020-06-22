import React from "react";
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { ApplicationState, AnyAction, record } from "../actions";

import styles from './controls.module.css';

interface Props {
  application: ApplicationState;
  toggleRecording: (isRecording: boolean) => void;
};

class RecorderControl extends React.Component<Props> {
  onClick = () => {
    this.props.toggleRecording(!this.props.application.isRecording);
  }

  render() {
    return (
      <div className={styles.recorder}>
        <Button
          className="btn btn-success btn-sm"
          disabled={this.props.application.isRecording}
          onClick={this.onClick}
        >
          <i className="fa fa-microphone"/> Start Recording
        </Button>
        <Button
          className="btn btn-danger btn-sm"
          disabled={!this.props.application.isRecording}
          onClick={this.onClick}
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RecorderControl);

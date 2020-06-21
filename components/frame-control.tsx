import React from "react";
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { ApplicationState, AnyAction, record } from "../actions";

interface Props {
  application: ApplicationState;
  toggleRecording: (isRecording: boolean) => void;
};

class FrameControl extends React.Component<Props> {
  onClick = () => {
    this.props.toggleRecording(!this.props.application.isRecording);
  }

  render() {
    return (
      <div>
        <h3>Frame</h3>
        <button onClick={this.onClick}>Test</button>
        <div>
          Recording: {this.props.application.isRecording ? 'true' : 'false'}
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

export default connect(mapStateToProps, mapDispatchToProps)(FrameControl);

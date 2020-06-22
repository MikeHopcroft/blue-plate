import React from "react";
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
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
        <h3>Framexxx</h3>
        <button onClick={this.onClick}>Test</button>
        <div>
          Recording: {this.props.application.isRecording ? 'true' : 'false'}
        </div>
        <div>
          {this.props.application.world ? 'world' : 'uninitialized'}
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

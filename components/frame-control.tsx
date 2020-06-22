import React from "react";
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { ApplicationState, AnyAction, record } from "../actions";

import CartControl from './cart-control';
import Header from './header-control';
import LoadingControl from './loading-control';

interface Props {
  application: ApplicationState;
  toggleRecording: (isRecording: boolean) => void;
};

class FrameControl extends React.Component<Props> {
  onClick = () => {
    this.props.toggleRecording(!this.props.application.isRecording);
  }

  render() {
    if (this.props.application.world) {
      return (
        <div>
          <Header/>
          <h3>Framexxx</h3>
          <button onClick={this.onClick}>Test</button>
          <div>
            Recording: {this.props.application.isRecording ? 'true' : 'false'}
          </div>
          <div>
            {this.props.application.world ? 'world' : 'uninitialized'}
          </div>
          <CartControl/>
        </div>
      );
    } else {
      return <LoadingControl/>;
    }
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

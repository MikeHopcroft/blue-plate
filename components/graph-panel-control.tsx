import React from 'react';
import { connect } from 'react-redux'

import { ApplicationState } from "../actions";

import GraphControl from './graph-control';

interface Props {
  application: ApplicationState;
};

class GraphPanelControl extends React.Component<Props> {
  render() {
    return (
      <GraphControl
        cart={this.props.application.cart}
        key={this.props.application.transcription}
        transcription={this.props.application.transcription}
      />
    );
  }
}

function mapStateToProps(application: ApplicationState) {
  return { application };
}

export default connect(mapStateToProps)(GraphPanelControl);

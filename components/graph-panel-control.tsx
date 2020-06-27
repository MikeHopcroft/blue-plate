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
      <GraphControl transcription = 'hello to the world'/>
    );
  }
}

function mapStateToProps(application: ApplicationState) {
  return { application };
}

export default connect(mapStateToProps)(GraphPanelControl);

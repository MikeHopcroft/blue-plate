import React from 'react';
import { connect } from 'react-redux'

import { ApplicationState } from "../actions";

interface Props {
  application: ApplicationState;
};

class GraphPanelControl extends React.Component<Props> {
  render() {
    return (
      <h1>
        Graph
      </h1>
    );
  }
}

function mapStateToProps(application: ApplicationState) {
  return { application };
}

export default connect(mapStateToProps)(GraphPanelControl);

import React from 'react';
import { connect } from 'react-redux'

import { ApplicationState, AnyAction, record } from "../actions";

interface Props {
  application: ApplicationState;
};

class HistoryControl extends React.Component<Props> {
  render() {
    return (
      <h1>
        History { this.props.application.world ? 'world' : 'uninitialized' }
      </h1>
    );
  }
}

function mapStateToProps(application: ApplicationState) {
  return { application };
}

export default connect(mapStateToProps)(HistoryControl);

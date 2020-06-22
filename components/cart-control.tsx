import React from 'react';
import { connect } from 'react-redux'

import { ApplicationState, AnyAction, record } from "../actions";

interface Props {
  application: ApplicationState;
};

class CartControl extends React.Component<Props> {
  render() {
    return (
      <h1>
        Cart { this.props.application.world ? 'world' : 'uninitialized' }
      </h1>
    );
  }
}

function mapStateToProps(application: ApplicationState) {
  return { application };
}

export default connect(mapStateToProps)(CartControl);

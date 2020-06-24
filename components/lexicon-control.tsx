import React from 'react';
import { connect } from 'react-redux'

import { ApplicationState, AnyAction, record } from "../actions";

interface Props {
  application: ApplicationState;
};

class LexiconControl extends React.Component<Props> {
  render() {
    return (
      <h1>
        Lexicon
      </h1>
    );
  }
}

function mapStateToProps(application: ApplicationState) {
  return { application };
}

export default connect(mapStateToProps)(LexiconControl);

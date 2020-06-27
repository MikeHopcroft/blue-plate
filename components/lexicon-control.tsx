import React from 'react';
import { connect } from 'react-redux'
import { LexiconSpec, TokenSpec } from 'short-order';

import { ApplicationState } from "../actions";

import styles from './controls.module.css';

interface Props {
  lexiconSpec?: LexiconSpec;
};

class LexiconControl extends React.Component<Props> {
  render() {
    if (!this.props.lexiconSpec) {
      return null;
    } else {
      return renderLexicon(this.props.lexiconSpec);
    }
  }
}

function renderLexicon(lexicon: LexiconSpec) {
  return lexicon.lexicon.map(renderTokenSpec);
}

function renderTokenSpec(spec: TokenSpec, index1) {
  return (
    <div className={styles.lexiconToken} key={index1}>
      {spec.name}{spec.name=='QUANTITY'?`(${spec.value})`:''}
      {spec.aliases.map((alias,index2) => 
        <div className={styles.lexiconAlias} key={index2}>
          {alias}
        </div>
      )}
    </div>
  );
}

function mapStateToProps({ lexiconSpec }: ApplicationState) {
  return { lexiconSpec };
}

export default connect(mapStateToProps)(LexiconControl);

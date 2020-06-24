import React from "react";
import ReactMarkdown from 'react-markdown';
import { connect } from 'react-redux'

import { ApplicationState } from "../actions";

import styles from './controls.module.css';

interface Props {
  text: string;
  speechSupport: boolean;
};

class ChromeWarning extends React.Component<Props> {
  render() {
    console.log(`ChromeWarning: ${this.props.speechSupport}`);
    if (this.props.speechSupport) {
      return null;
    } else {
      return (
        <div className={styles.warning}>
          <ReactMarkdown source={this.props.text}/>
        </div>
      );
    }
  }
}

function mapStateToProps({speechSupport}: ApplicationState) {
  return { speechSupport };
}

export default connect(mapStateToProps)(ChromeWarning);

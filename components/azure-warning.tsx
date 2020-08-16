import React from "react";
import ReactMarkdown from 'react-markdown';
import { connect } from 'react-redux'

import { ApplicationState, SpeechConfig } from "../actions";

import styles from './controls.module.css';

interface Props {
  speechConfig: SpeechConfig
  text: string;
};

class AzureWarning extends React.Component<Props> {
  render() {
    const {
      azureSubscriptionKey,
      azureRegion,
    } = this.props.speechConfig;

    const azureEnabled = !!(azureRegion && azureSubscriptionKey);

    console.log(`AzureWarning: ${azureEnabled}`);
    if (azureEnabled) {
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

function mapStateToProps({speechConfig}: ApplicationState) {
  return { speechConfig };
}

export default connect(mapStateToProps)(AzureWarning);

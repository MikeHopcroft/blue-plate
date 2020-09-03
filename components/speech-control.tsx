import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { FaMicrophone } from 'react-icons/fa';
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import {
  ApplicationState,
  AnyAction,
  setSpeechConfig,
  SpeechMode,
} from "../actions";

import styles from './controls.module.css';

interface Props {
  application: ApplicationState;
  setAzure: () => void;
  setWebSpeech: () => void;
  setText: () => void;
};

class SpeechControl extends React.Component<Props> {
  render() {
    const config = this.props.application.speechConfig;
    const mode = config.mode;
    const speech = 
      mode === SpeechMode.AZURE ? 
      'Azure Speech' :
      mode === SpeechMode.WEB_SPEECH ?
      'Google Speech' : 'Text';

    const azureEnabled = !!(config.azureRegion && config.azureSubscriptionKey);
    const webSpeechEnabled = config.speechSupport;
    console.log(`Azure: ${azureEnabled}, WebSpeech: ${webSpeechEnabled}`);

    return (
      <Dropdown>
        <Dropdown.Toggle variant="light" id="dropdown-basic">
          <FaMicrophone style={{width: '1.2em', height: '1.2em', paddingRight: '4px'}}/>
          { speech }
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            disabled={!azureEnabled}
            onSelect={this.props.setAzure}
          >
            Azure Speech
          </Dropdown.Item>
          <Dropdown.Item
            disabled={!webSpeechEnabled}
            onSelect={this.props.setWebSpeech}
          >
            Google Speech
          </Dropdown.Item>
          <Dropdown.Item
            onSelect={this.props.setText}
          >
            Text
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}

function mapStateToProps(application: ApplicationState) {
  return { application };
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
  return {
    setAzure: () => {
      dispatch(setSpeechConfig({mode: SpeechMode.AZURE}));
    },
    setText: () => {
      dispatch(setSpeechConfig({mode: SpeechMode.TEXT}));
    },
    setWebSpeech: () => {
      dispatch(setSpeechConfig({mode: SpeechMode.WEB_SPEECH}));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SpeechControl);

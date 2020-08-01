import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { FaMicrophone } from 'react-icons/fa';
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import {
  ApplicationState,
  AnyAction,
  setSpeechConfig,
} from "../actions";

import styles from './controls.module.css';

interface Props {
  application: ApplicationState;
  setAzure: () => void;
  setGoogle: () => void;
};

class SpeechControl extends React.Component<Props> {
  render() {
    const speech = this.props.application.speechConfig.useAzureSpeech ? 
      'Azure Speech' : 'Google Speech';

    return (
      <Dropdown>
        <Dropdown.Toggle variant="light" id="dropdown-basic">
          <FaMicrophone style={{width: '1.2em', height: '1.2em', paddingRight: '4px'}}/>
          { speech }
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onSelect={this.props.setAzure}>Azure Speech</Dropdown.Item>
          <Dropdown.Item onSelect={this.props.setGoogle}>Google Speech</Dropdown.Item>
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
      dispatch(setSpeechConfig({useAzureSpeech: true}));
    },
    setGoogle: () => {
      dispatch(setSpeechConfig({useAzureSpeech: false}));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SpeechControl);

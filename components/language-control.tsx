import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { FaGlobe } from 'react-icons/fa';
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import {
  ApplicationState,
  AnyAction,
} from "../actions";

import styles from './controls.module.css';

interface Props {
  application: ApplicationState;
  setLanguage: (language: string) => void;
};

class LanguageControl extends React.Component<Props> {
  render() {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="light" id="dropdown-basic">
          <FaGlobe style={{width: '1.2em', height: '1.2em', paddingRight: '4px'}}/>
          English
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item>English (EN)</Dropdown.Item>
          <Dropdown.Item disabled>Español (ES)</Dropdown.Item>
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
    setLanguage: (language: string) => {
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageControl);

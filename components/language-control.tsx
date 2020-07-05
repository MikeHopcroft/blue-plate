import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { FaGlobe } from 'react-icons/fa';
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import {
  ApplicationState,
  AnyAction,
  loadWorld,
} from "../actions";

import styles from './controls.module.css';

interface Props {
  application: ApplicationState;
  setEnglish: () => void;
  setSpanish: () => void;
};

class LanguageControl extends React.Component<Props> {
  render() {
    const language = this.props.application.language === 'es-US' ? 
      'Español (es-US)' : 'English (en-US)';

    return (
      <Dropdown>
        <Dropdown.Toggle variant="light" id="dropdown-basic">
          <FaGlobe style={{width: '1.2em', height: '1.2em', paddingRight: '4px'}}/>
          { language }
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onSelect={this.props.setEnglish}>English (en-US)</Dropdown.Item>
          <Dropdown.Item onSelect={this.props.setSpanish}>Español (es-US)</Dropdown.Item>
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
    setEnglish: () => {
      dispatch(loadWorld('en-US'));
    },
    setSpanish: () => {
      dispatch(loadWorld('es-US'));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageControl);

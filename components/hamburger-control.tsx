import fileDownload from 'js-file-download';
import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { MdMenu } from 'react-icons/md';
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import {
  ApplicationState,
  AnyAction,
  clearHistory,
  HistoryItem
} from "../actions";

import styles from './controls.module.css';

interface Props {
  application: ApplicationState;
  doClearHistory: () => void;
  downloadHistory: (history: HistoryItem[]) => void;
};

class HamburgerControl extends React.Component<Props> {
  downloadHistory = () => {
    this.props.downloadHistory(this.props.application.history);
  }

  render() {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="light" id="dropdown-basic">
          <MdMenu/>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onSelect={this.downloadHistory}>Download History</Dropdown.Item>
          <Dropdown.Item onSelect={this.props.doClearHistory}>Clear History</Dropdown.Item>
          <Dropdown.Divider/>
          <Dropdown.Item disabled>Import Menu</Dropdown.Item>
          <Dropdown.Item disabled>Settings</Dropdown.Item>
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
    doClearHistory: () => {
      dispatch(clearHistory());
    },
    downloadHistory: (history: HistoryItem[]) => {
      const data = JSON.stringify(history, null, 4);
      const datePart = new Date().toISOString().slice(0,-5).replace(/:/g,'-');
      const filename = 'history-' + datePart;
      fileDownload(data, filename, 'application/json');
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HamburgerControl);

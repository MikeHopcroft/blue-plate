import React from "react";
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import { connect } from 'react-redux'
import SplitPane from 'react-split-pane'
import { Dispatch } from 'redux'

import { ApplicationState, AnyAction, record } from "../actions";

import CartControl from './cart-control';
import HamburgerControl from './hamburger-control';
import InfoControl from './info-control';
import MenuControl from './menu-control';
import GraphControl from './graph-control';
import HistoryControl from './history-control';
import LoadingControl from './loading-control';
import RecorderControl from './recorder-control';

import styles from './controls.module.css';

interface Props {
  application: ApplicationState;
  toggleRecording: (isRecording: boolean) => void;
};

class FrameControl extends React.Component<Props> {
  onClick = () => {
    this.props.toggleRecording(!this.props.application.isRecording);
  }

  render() {
    if (this.props.application.world) {
      return (
        <div className={styles.frame}>
          <div>
            <SplitPane split="horizontal" minSize={100} defaultSize={400}>
              <div style={{display: 'flex', flexDirection: 'column', width:'100%', height:'100%'}}>
                {this.renderTabs()}
              </div>
              <div className={styles.frameLowerPanel}>
                <RecorderControl />
                <CartControl />
              </div>
            </SplitPane>
          </div>
        </div>
      );
    } else {
      return <LoadingControl />;
    }
  }

  renderTabs() {
    return (
      <Tab.Container id="left-tabs-example" defaultActiveKey="info">
        <Nav variant="tabs" className="flex-row">
        <Nav.Item>
            <Nav.Link eventKey="info">Info</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="menu">Menu</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="graph">Graph</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="history">History</Nav.Link>
          </Nav.Item>
          <div style={{flexGrow: 1}}>
          </div>
          <HamburgerControl/>
        </Nav>
        <Tab.Content className={styles.frameTab}>
          <Tab.Pane eventKey="info">
            <InfoControl />
          </Tab.Pane>
          <Tab.Pane eventKey="menu">
            <MenuControl />
          </Tab.Pane>
          <Tab.Pane eventKey="graph">
            <GraphControl />
          </Tab.Pane>
          <Tab.Pane eventKey="history">
            <HistoryControl history={this.props.application.history}/>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    );
  }
}

function mapStateToProps(application: ApplicationState) {
  return { application };
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
  return {
    toggleRecording: (isRecording: boolean) => {
      dispatch(record(isRecording));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FrameControl);

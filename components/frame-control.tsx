import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { connect } from 'react-redux'
import SplitPane from 'react-split-pane'
import { Dispatch } from 'redux'

import { ApplicationState, AnyAction, record } from "../actions";

import CartControl from './cart-control';
// import HeaderControl from './header-control';
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
                {/* <HeaderControl/> */}
                {renderTabs()}
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
}

function renderTabs() {
  return (
    <Tabs className="bar" style={{width: '100%'}} defaultActiveKey="info" id="frameTabs">
      <Tab className={styles.frameTab} eventKey="info" title="Info">
        <InfoControl />
      </Tab>
      <Tab className={styles.frameTab} eventKey="menu" title="Menu">
        <MenuControl />
      </Tab>
      <Tab className={styles.frameTab} eventKey="graph" title="Graph">
        <GraphControl />
      </Tab>
      <Tab className={styles.frameTab} eventKey="history" title="History">
        <HistoryControl />
      </Tab>
    </Tabs>
  );
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

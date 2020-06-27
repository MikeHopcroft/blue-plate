import Bowser from "bowser";
import React from "react";
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import { connect } from 'react-redux'
import SplitPane from 'react-split-pane'
import { Dispatch } from 'redux'

import { ApplicationState, AnyAction, setSpeechSupport } from "../actions";

import CartControl from './cart-control';
import GraphPanelControl from './graph-panel-control';
import HamburgerControl from './hamburger-control';
import HistoryControl from './history-control';
import InfoControl from './info-control';
import LexiconControl from './lexicon-control';
import LoadingControl from './loading-control';
import MenuControl from './menu-control';
import RecorderControl from './recorder-control';

import styles from './controls.module.css';

interface Props {
  application: ApplicationState;
  speechSupported: (isRecording: boolean) => void;
};

class FrameControl extends React.Component<Props> {
  render() {
    if (this.props.application.world) {
      return (
        <div className={styles.frame}>
          <div>
            <SplitPane split="horizontal" minSize={100} defaultSize={600}>
              <div className={styles.frameUpperPanel}>
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

  componentDidMount() {
    let isChrome = false;
    if (typeof window !== 'undefined') {
      const w = window as any;
      const b = Bowser.parse(window.navigator.userAgent);
      // TODO: use browser.satisfies() for Chrome detection.
      isChrome = b.browser.name === 'Chrome';
    }
    this.props.speechSupported(isChrome);
  }

  // DESIGN NOTE: mountOnEnter and unmountOnExit are necessary for the
  // GraphControl layout algorithm. It turns out the getBBox() returns
  // an empty bounding box for svg text elements that aren't currently
  // visible.
  //   https://stackoverflow.com/questions/21387965/getbbox-width-and-height-returns-0
  //   https://stackoverflow.com/questions/40744176/getbbox-and-getcomputedtextlength-once-working-once-not
  //   https://github.com/DmitryBaranovskiy/raphael/issues/760
  //   https://stackoverflow.com/questions/28282295/getbbox-of-svg-when-hidden
  renderTabs() {
    return (
      <Tab.Container 
        id="left-tabs-example"
        defaultActiveKey="info"
        mountOnEnter={true}
        unmountOnExit={true}
      >
        <Nav variant="tabs" className="flex-row">
        <Nav.Item>
            <Nav.Link eventKey="info">Info</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="menu">Menu</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="lexicon">Lexicon</Nav.Link>
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
          <Tab.Pane eventKey="menu" style={{height: '100%', overflow: 'auto'}}>
            <MenuControl />
          </Tab.Pane>
          <Tab.Pane eventKey="lexicon">
            <LexiconControl />
          </Tab.Pane>
          <Tab.Pane eventKey="graph" style={{height: '100%', overflow: 'auto'}}>
            <GraphPanelControl />
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
    speechSupported: (speechSupport: boolean) => {
      dispatch(setSpeechSupport(speechSupport));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FrameControl);

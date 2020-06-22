import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { connect } from 'react-redux'
import SplitPane from 'react-split-pane'
import { Dispatch } from 'redux'

import { ApplicationState, AnyAction, record } from "../actions";

import CartControl from './cart-control';
import InfoControl from './info-control';
import MenuControl from './menu-control';
import GraphControl from './graph-control';
import HeaderControl from './header-control';
import HistoryControl from './history-control';
import LoadingControl from './loading-control';
import RecorderControl from "./recorder-control";

interface Props {
  application: ApplicationState;
  toggleRecording: (isRecording: boolean) => void;
};

class FrameControl extends React.Component<Props> {
  onClick = () => {
    this.props.toggleRecording(!this.props.application.isRecording);
  }

  render4() {
    if (this.props.application.world) {
      return (
        <div className='frame'>
          <Split
            sizes={[25, 75]}
            minSize={100}
            expandToMin={false}
            gutterSize={10}
            gutterAlign="center"
            snapOffset={30}
            dragInterval={1}
            direction="vertical"
            cursor="row-resize"
            className="splitterx"
            style={{height: '100%'}}
          >
            <div>
              {renderTabs()}
            </div>
            <div>
              <RecorderControl />
              <CartControl />
            </div>
          </Split>
          <style jsx>{`
            .splitterx {
              width: 100%;
              height: 100%;
            }
            .frame {
              width: 100%;
              height: 100%;
              border-color: red;
              border-width: 4px;
              border-style: solid;
              padding: 4px;
            }
            .middlex {
              flex-grow: 2;
            }
            .cartx {
              flex-grow: 1;
            }
            .foo {
              background-color: green;
            }
          `}</style>
          <style jsx global>{`
            html, body, .viewport {
              width: 100%;
              height: 100%;
              margin: 0;
            }
            #__next {
              width: 100%;
              height: 100%;
            }
          `}</style>
        </div>
      );
    } else {
      return <LoadingControl />;
    }
  }

  render() {
    if (this.props.application.world) {
      return (
        <div className='frame'>
          <div>
            <SplitPane split="horizontal" minSize={100} defaultSize={400}>
              <div>
                {renderTabs()}
              </div>
              <div>
                <RecorderControl />
                <CartControl />
              </div>
            </SplitPane>
          </div>
          <style jsx>{`
            .frame {
              width: 100%;
              height: 100%;
              display: flex;
              flex-direction: column;
              border-color: red;
              border-width: 4px;
              border-style: solid;
              padding: 4px;
            }
            .middlex {
              flex-grow: 2;
            }
            .cartx {
              flex-grow: 1;
            }
            .foo {
              background-color: green;
            }
          `}</style>
          <style jsx global>{`
            html, body, .viewport {
              width: 100%;
              height: 100%;
              margin: 0;
            }
            #__next {
              width: 100%;
              height: 100%;
            }
          `}</style>
        </div>
      );
    } else {
      return <LoadingControl />;
    }
  }

  render2() {
    if (this.props.application.world) {
      return (
        <div className='frame'>
          {/* <HeaderControl /> */}
          <SplitPane split="horizontal" minSize={500} defaultSize={600}>
            <div>one</div>
            <div>two</div>
          </SplitPane>
          {/* <div>
              <div className='middle'>
                {renderTabs()}
              </div>
              <h3>Frame</h3>
              <div className='foo'>
                {this.props.application.world ? 'world' : 'uninitialized'}
              </div>
              <RecorderControl />
            </div>
            <CartControl /> */}
          <style jsx>{`
            .framex {
              width: 100%;
              height: 100%;
              display: flex;
              flex-direction: column;
            }
            .middlex {
              flex-grow: 2;
            }
            .cartx {
              flex-grow: 1;
            }
            .foo {
              background-color: green;
            }
          `}</style>
          <style jsx global>{`
            html, body, .viewport {
              width: 100%;
              height: 100%;
              margin: 0;
            }
            #__next {
              width: 100%;
              height: 100%;
            }
          `}</style>
        </div>
      );
    } else {
      return <LoadingControl />;
    }
  }
}

function renderTabs() {
  return (
    <Tabs defaultActiveKey="info" id="uncontrolled-tab-example">
      <Tab eventKey="info" title="Info">
        <InfoControl />
      </Tab>
      <Tab eventKey="menu" title="Menu">
        <MenuControl />
      </Tab>
      <Tab eventKey="graph" title="Graph">
        <GraphControl />
      </Tab>
      <Tab eventKey="history" title="History">
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

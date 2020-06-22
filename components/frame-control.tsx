import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { ApplicationState, AnyAction, record } from "../actions";

import CartControl from './cart-control';
import InfoControl from './info-control';
import MenuControl from './menu-control';
import GraphControl from './graph-control';
import HeaderControl from './header-control';
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

  render() {
    if (this.props.application.world) {
      return (
        <div className='frame'>
          <HeaderControl />
          <div className='middle'>
            {renderTabs()}
          </div>
          <h3>Frame</h3>
          <div className='foo'>
            {this.props.application.world ? 'world' : 'uninitialized'}
          </div>
          <RecorderControl />
          <div className='cart'>
            <CartControl />
          </div>
          <style jsx>{`
            .frame {
              width: 100%;
              height: 100%;
              display: flex;
              flex-direction: column;
            }
            .middle {
              flex-grow: 2;
            }
            .cart {
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

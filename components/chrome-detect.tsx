import Bowser from "bowser";
import React from "react";
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { AnyAction, setSpeechSupport } from "../actions";

interface Props {
  speechSupported: (isRecording: boolean) => void;
};

class ChromeDetect extends React.Component<Props> {
  attempedChromeDetect = false;

  render() {
    return null;
  }

  componentDidMount() {
    if (!this.attempedChromeDetect) {
      this.attempedChromeDetect = true;
      console.log('Attempting to detect chrome');
      let isChrome = false;
      // if (typeof window !== 'undefined') {
      const w = window as any;
      const b = Bowser.parse(window.navigator.userAgent);
      // TODO: use browser.satisfies() for Chrome detection.
      isChrome = b.browser.name === 'Chrome';
      // }
      // if (isChrome) {
      console.log('this.props.speechSupported(isChrome)');
      this.props.speechSupported(isChrome);
      // }
    }
  }
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
  return {
    speechSupported: (speechSupport: boolean) => {
      dispatch(setSpeechSupport(speechSupport));
    },
  };
}

export default connect(null, mapDispatchToProps)(ChromeDetect);

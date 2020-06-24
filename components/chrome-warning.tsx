import Bowser from "bowser";
import React from "react";
import ReactMarkdown from 'react-markdown';

import styles from './controls.module.css';

interface Props {
  text: string;
};

export default class ChromeWarning extends React.Component<Props> {
  render() {
    let isChrome = false;
    if (typeof window !== 'undefined') {
      const w = window as any;
      const b = Bowser.parse(window.navigator.userAgent);

      // TODO: use browser.satisfies() for Chrome detection.
      // TODO: store broser in ApplicationState so that it can
      // be used to enable/disable speech buttons.
      isChrome = b.browser.name === 'Chrome';
    }

    if (isChrome) {
      return null;
    } else {
      return (
        <div className={styles.warning}>
          <ReactMarkdown source={this.props.text}/>
        </div>
      );
    }
  }
}
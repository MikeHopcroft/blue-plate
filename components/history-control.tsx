import React from 'react';
import { connect } from 'react-redux'

import { ApplicationState, HistoryItem } from "../actions";

import styles from './controls.module.css';

interface Props {
  history: HistoryItem[];
};

class HistoryControl extends React.Component<Props> {
  panelEndRef = React.createRef<HTMLDivElement>();
  itemCount = 0;
  scrollOnUpdate = false;

  render() {
    return (
      <div>
        {this.renderHistory(this.props.history)}
        <div ref={this.panelEndRef}/>
      </div>
    );
  }

  componentDidMount() {
    this.scrollToBottom();
    this.scrollOnUpdate = false;
  }

  componentDidUpdate() {
    if (this.scrollOnUpdate) {
      this.scrollToBottom();
      this.scrollOnUpdate = false;
    }
  }

  renderHistory(history: HistoryItem[]) {
    if (this.itemCount !== history.length) {
      this.itemCount = history.length;
      this.scrollOnUpdate = true;
    }
    const groups = groupHistoryItems(history);
    return [...groups].map(renderHistoryGroup);
  }

  scrollToBottom = () => {
    this.panelEndRef.current.scrollIntoView({ behavior: "auto" });
  }
}

function renderHistoryGroup(group: HistoryItem[], index: number) {
  return (
    <div className={styles.historyGroup} key={index.toString()}>
      {group[0].timestamp.toLocaleDateString()}
      {group.map(renderHistoryItem)}
    </div>
  )
}

function renderHistoryItem(item: HistoryItem, index: number) {
  return (
    <div className={styles.historyItem} key={'x' + index}>
      <b>{`${item.timestamp.toLocaleTimeString()}: `}</b>
      <i>{item.text}</i>
    </div>
  );
}

const THRESHOLD = 1000*60;  // 60 seconds
function* groupHistoryItems(
  items: HistoryItem[]
): IterableIterator<HistoryItem[]> {
  if (items.length > 0) {
    let grouped: HistoryItem[] = [];

    for (const item of items) {
      item.timestamp
      if (grouped.length === 0) {
        grouped.push(item);
      } else {
        const x = item.timestamp.getTime() - grouped[0].timestamp.getTime();
        if (x <= THRESHOLD) {
          grouped.push(item);
        } else {
          yield grouped;
          grouped = [item];
        }
      }
    }
    if (grouped.length > 0) {
      yield grouped;
    }
  }
}

function mapStateToProps(application: ApplicationState) {
  return { application };
}

export default connect(mapStateToProps)(HistoryControl);

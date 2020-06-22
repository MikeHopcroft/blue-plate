import React from 'react';
import { connect } from 'react-redux'

import { ApplicationState, AnyAction, record, HistoryItem } from "../actions";

import styles from './controls.module.css';

interface Props {
  application: ApplicationState;
};

class HistoryControl extends React.Component<Props> {
  render() {
    return (
      <div>
        {renderHistory(this.props.application.history)}
      </div>
    );
  }
}

function renderHistory(history: HistoryItem[]) {
  const groups = groupHistoryItems(history);
  return [...groups].map(renderHistoryGroup);
}

function renderHistoryGroup(group: HistoryItem[]) {
  return (
    <div className={styles.historyGroup}>
      {group[0].timestamp.toLocaleDateString()}
      {group.map(renderHistoryItem)}
    </div>
  )
}

function renderHistoryItem(item: HistoryItem) {
  return (
    <div className={styles.historyItem}>
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

function renderHistoryItems(items: HistoryItem[]) {
  const lastDate = new Date(0).toLocaleDateString();

  return items.map(item => {
    const currentDate = item.timestamp.toLocaleDateString();
    if (lastDate !== currentDate) {
      return (
        <div>
          <b>{`${item.timestamp.toLocaleString()}: `}</b>
          <i>{item.text}</i>
        </div>
      );
    }
  });
}

function renderDay(previousDate: string, currentDate: string) {
  if (previousDate !== currentDate) {

  }
}

function mapStateToProps(application: ApplicationState) {
  return { application };
}

export default connect(mapStateToProps)(HistoryControl);

import { Cart, ItemInstance, World } from 'prix-fixe';
import React from 'react';
import { FaKeyboard, FaMicrophone, FaQuestionCircle } from 'react-icons/fa';
import { connect } from 'react-redux'

import { ApplicationState, HistoryItem, TextSource } from "../actions";

import styles from './controls.module.css';

interface Props {
  history: HistoryItem[];
  world: World;
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
    return [...groups].map(this.renderHistoryGroup);
  }

  renderHistoryGroup = (group: HistoryItem[], index: number) => {
    return (
      <div className={styles.historyGroup} key={index.toString()}>
        {group[0].timestamp.toLocaleDateString()}
        {group.map(this.renderHistoryItem)}
      </div>
    )
  }
  
  renderHistoryItem = (item: HistoryItem, index: number) => {
    return (
      <div className={styles.historyItem} key={'x' + index}>
        { renderSource(item.source ) }
        <b>{`${item.timestamp.toLocaleTimeString()}: `}</b>
        <i>{item.text}</i>
        {this.renderCart(item.cart)}
      </div>
    );
  }

  renderCart(cart: Cart) {
    return (
      <div className={styles.historyCart}>
        {this.renderItemList(cart.items)}
      </div>
    )
  }

  renderItemList(items: ItemInstance[]) {
    const renderItem = (item: ItemInstance) => {
      const specific = this.props.world.catalog.getSpecific(item.key);
      return (
        <div className={styles.cartItem} key={item.uid}>
          {`${item.quantity} ${specific.name} (${specific.sku})`}
          {this.renderItemList(item.children)}
        </div>
      )
    }
  
    return items.map(renderItem);
  }

  scrollToBottom() {
    this.panelEndRef.current.scrollIntoView({ behavior: "auto" });
  }
}

function renderSource(source: TextSource) {
  return (<span className={styles.historySource}>
    { renderSourceIcon(source)}
  </span>)
}

function renderSourceIcon(source: TextSource) {
  switch (source) {
    case TextSource.KEYBOARD:
      return <FaKeyboard/>;
    case TextSource.MICROPHONE:
      return <FaMicrophone/>;
    default:
      return <FaQuestionCircle/>
  }
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
  return { world: application.world };
}

export default connect(mapStateToProps)(HistoryControl);

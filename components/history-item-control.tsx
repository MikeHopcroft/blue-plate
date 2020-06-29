import { Cart, ItemInstance, World } from 'prix-fixe';
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

import {
  FaComment,
  FaKeyboard,
  FaMicrophone,
  FaQuestionCircle,
  FaRegComment,
  FaStickyNote,
  FaThumbsDown,
  FaThumbsUp
} from 'react-icons/fa';

import { connect } from 'react-redux'

import { ApplicationState, HistoryItem, TextSource, Correctness } from "../actions";

import styles from './controls.module.css';

interface Props {
  history: HistoryItem;
  world: World;
};

interface State {
  hover: boolean
}

class HistoryItemControl extends React.Component<Props, State> {
  panelEndRef = React.createRef<HTMLDivElement>();
  itemCount = 0;
  scrollOnUpdate = false;

  constructor(props) {
    super(props);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.state = {
      hover: false
    }
    // this.state = {
    //   isHovering: false,
    // };
  }

  onMouseEnter(x: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    // console.log(`enter`);
    // console.log(this);
    this.setState({ hover: true });
  }

  onMouseLeave() {
    // console.log(`leave`);
    this.setState({ hover: false });
  }

  render() {
    const item = this.props.history;
    return (
      <div
        className={styles.historyItem}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      // style={this.state.hover?{backgroundColor: 'gray'}:{}}
      >
        <div className={styles.historyItemHeader}>
          {renderCorrectness(this.state.hover, item.correctness)}
          {renderSource(item.source)}
          <b>{`${item.timestamp.toLocaleTimeString()}: `}</b>
          <span style={{ paddingLeft: '6px' }}><i>{item.text}</i></span>
          {/* <div style={{flexGrow: 1}}></div> */}
          {/* {this.state.hover || item.note ? renderNote(item.note) : null} */}
          { renderNote(this.state.hover, item.note) }
        </div>
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
    {renderSourceIcon(source)}
  </span>)
}

function renderSourceIcon(source: TextSource) {
  switch (source) {
    case TextSource.KEYBOARD:
      return <FaKeyboard />;
    case TextSource.MICROPHONE:
      return <FaMicrophone />;
    default:
      return <FaQuestionCircle />
  }
}

const CustomToggle = React.forwardRef<
  HTMLAnchorElement,
  {
    children: React.ReactNode,
    onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
  }
>(({ children, onClick }, ref) => {
  return (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </a>
  )
});

function renderCorrectness(hover: boolean, correctness: Correctness) {
  if (hover) {
    return (
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-basic">
          {renderCorrectnessIcon(hover, correctness)}
        </Dropdown.Toggle>

        <Dropdown.Menu style={{ minWidth: '1rem', padding: '0px 2px' }}>
          <Dropdown.Item href="#/action-1" style={{ padding: '1px 1ex' }}><FaThumbsUp style={{ color: 'green' }} /></Dropdown.Item>
          <Dropdown.Item href="#/action-2" style={{ padding: '1px 1ex' }}><FaThumbsDown style={{ color: 'red' }} /></Dropdown.Item>
          <Dropdown.Item href="#/action-3" style={{ padding: '1px 1ex' }}><FaQuestionCircle style={{ color: 'lightgray' }} /></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  } else {
    return <div className='dropdown'>{renderCorrectnessIcon(hover, correctness)}</div>;
  }
}

function renderCorrectnessIcon(hover: boolean, correctness: Correctness) {
  switch (correctness) {
    case Correctness.CORRECT:
      return <FaThumbsUp style={{ color: 'green' }} />;
    case Correctness.INCORRECT:
      return <FaThumbsDown style={{ color: 'red' }} />;
    default:
      return <FaQuestionCircle style={hover ? { color: 'lightgray' } : { color: 'white' }} />;
  }
}

function renderNote(hover: boolean, note?: string) {
  const style = note ? { color: '#ffd699' } : { color: 'lightgray'};
  const icon = note ? <FaComment style={style}/> : <FaRegComment style={style}/>;

  if (hover) {
    const popover = (
      <Popover id="popover-basic" style={{maxWidth: 'unset'}}>
        {/* <Popover.Title as="h3">Comment here</Popover.Title> */}
        <Popover.Content>
          <textarea rows={5} cols={20} style={{resize: 'both'}}>
            {note}
          </textarea>
        </Popover.Content>
      </Popover>
    );

    return (
      <OverlayTrigger trigger="click" placement="right" overlay={popover}>
        {icon}
      </OverlayTrigger>
    )
  } else if (note) {
    return icon;
  } else {
    return null;
  }
}

function mapStateToProps(application: ApplicationState) {
  return { world: application.world };
}

export default connect(mapStateToProps)(HistoryItemControl);

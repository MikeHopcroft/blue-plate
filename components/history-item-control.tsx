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
import { Dispatch } from 'redux'

import {
  AnyAction,
  ApplicationState,
  Correctness,
  HistoryItem,
  TextSource,
  updateHistoryItem,
} from "../actions";

import HistoryNoteControl from './history-note-control';

import styles from './controls.module.css';

interface Props {
  history: HistoryItem;
  world: World;
  setCorrectness: (id: number, value: Partial<HistoryItem>) => void;
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
  }

  onMouseEnter(x: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    this.setState({ hover: true });
  }

  onMouseLeave() {
    this.setState({ hover: false });
  }

  setCorrectness = (id, key: string) => {
    if (
      key === Correctness.CORRECT ||
      key === Correctness.INCORRECT ||
      key === Correctness.UNKNOWN
    ) {
      this.props.setCorrectness(id, { correctness: key });
    }
  }

  setNote = (id: number, note: string) => {
    this.props.setCorrectness(id, { note });
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
          {renderCorrectness(this.state.hover, item, this.setCorrectness)}
          {renderSource(item.source)}
          <b>{`${item.timestamp.toLocaleTimeString()}: `}</b>
          <span style={{ paddingLeft: '6px' }}><i>{item.text}</i></span>
          { renderNote(this.state.hover, item, this.setNote) }
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

function renderCorrectness(
  hover: boolean,
  item: HistoryItem,
  setCorrectness: (id: number, key: string) => void
) {
  const correctness = item.correctness;
  const id = item.id;

  if (hover) {
    return (
      <Dropdown onSelect={(key) => {setCorrectness(id, key)}}>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-basic">
          {renderCorrectnessIcon(hover, correctness)}
        </Dropdown.Toggle>

        <Dropdown.Menu style={{ minWidth: '1rem', padding: '0px 2px' }}>
          <Dropdown.Item eventKey={Correctness.CORRECT} style={{ padding: '1px 1ex' }}><FaThumbsUp style={{ color: 'green' }} /></Dropdown.Item>
          <Dropdown.Item eventKey={Correctness.INCORRECT} style={{ padding: '1px 1ex' }}><FaThumbsDown style={{ color: 'red' }} /></Dropdown.Item>
          <Dropdown.Item eventKey={Correctness.UNKNOWN} style={{ padding: '1px 1ex' }}><FaQuestionCircle style={{ color: 'lightgray' }} /></Dropdown.Item>
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
      return <FaThumbsUp style={{ color: 'green', paddingRight: '4px' }} />;
    case Correctness.INCORRECT:
      return <FaThumbsDown style={{ color: 'red', paddingRight: '4px' }} />;
    default:
      return <FaQuestionCircle style={
        hover ? { color: 'lightgray', paddingRight: '4px' } : 
        { color: 'white', paddingRight: '4px' }} />;
  }
}

function renderNote(
  hover: boolean,
  item: HistoryItem,
  setNote: (id: number, text: string) => void,
) {
  const note = item.note;
  const style = note ? 
    { color: '#ffd699', marginLeft: '6px' } : 
    { color: 'lightgray', marginLeft: '6px' };
  const icon = note ? <FaComment style={style}/> : <FaRegComment style={style}/>;

  // https://stackoverflow.com/questions/38467848/react-bootstrap-how-to-manually-close-overlaytrigger
  if (hover) {
    const popover = (
      <Popover id="popover-basic" style={{maxWidth: 'unset'}}>
        <Popover.Content>
          <HistoryNoteControl id={item.id} note={note}/>
        </Popover.Content>
      </Popover>
    );

    return (
      <OverlayTrigger
        trigger="click"
        placement="right"
        overlay={popover}
        rootClose
        rootCloseEvent = 'mousedown'
      >
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
  return { world: application.bluePlateWorld.prixFixeWorld };
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
  return {
    setCorrectness: (id: number, changes: Partial<HistoryItem>) => {
      // console.log(`${id}: ${JSON.stringify(changes)}`);
      dispatch(updateHistoryItem(id, changes));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryItemControl);

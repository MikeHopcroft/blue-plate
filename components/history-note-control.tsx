import React from 'react';

import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import {
  AnyAction,
  ApplicationState,
  updateHistoryItem,
} from "../actions";

import styles from './controls.module.css';

interface Props {
  id: number,
  note: string,
  setNote: (id: number, note: string) => void;
};

class HistoryNoteControl extends React.Component<Props> {
  textAreaRef = React.createRef<HTMLTextAreaElement>();

  constructor(props) {
    super(props);
    this.state = {
      hover: false
    }
  }

  render() {
    return (
      <textarea
        ref = {this.textAreaRef}
        autoFocus = {true}
        onInput = {(e) => {
          this.props.setNote(this.props.id, e.currentTarget.value)
        }}
        onKeyDown = {(e) => {
          console.log(`"${e.key}"`);
          // if (e.key === 'Escape' || e.key === 'Enter') {
          if (e.key === 'Escape') {
            // OverlayTrigger should close on click outside.
            document.body.click();
          }
        }}

        rows={5}
        cols={20}
        style={{resize: 'both'}}
        defaultValue={this.props.note}
      />
    );
  }

  componentDidMount() {
    const input = this.textAreaRef.current;
    const length = input.value.length;
    input.focus();
    input.setSelectionRange(length, length);
  }
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
  return {
    setNote: (id: number, note: string) => {
      console.log(`setNote(${id}, "${note}")`);
      dispatch(updateHistoryItem(id, {note}));
    },
  };
}

export default connect(null, mapDispatchToProps)(HistoryNoteControl);

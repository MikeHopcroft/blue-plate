import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import {
  ApplicationState,
  AnyAction,
  setSpeechConfig,
  SpeechConfig,
} from "../actions";

import styles from './controls.module.css';

interface Props {
  application: ApplicationState;
  save: (config: Partial<SpeechConfig>) => void;

  close: () => void;
  show: boolean;
};

interface State {
}

class SpeechConfigControl extends React.Component<Props, State> {
  useAzure = React.createRef<HTMLInputElement>();
  subscription = React.createRef<HTMLInputElement>();
  region = React.createRef<HTMLInputElement>();

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  save = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const config: Partial<SpeechConfig> = {
      useAzureSpeech: this.useAzure.current.checked,
      azureSubscriptionKey: this.subscription.current.value,
      azureRegion: this.region.current.value
    }

    this.props.save(config);
    this.props.close();
  }

  render() {
    const {
      useAzureSpeech,
      azureSubscriptionKey,
      azureRegion
    } = this.props.application.speechConfig;

    return (
      <Modal
        show={this.props.show}
        onHide={this.props.close}
        backdrop="static"
        keyboard={false}
      >
        <Form onSubmit={this.save}>
          <Modal.Header closeButton>
            <Modal.Title>Speech Settings</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="formWebSpeech1">
              <Form.Check
                name="speechRadio"
                type="radio"
                label="Disable speech"
                defaultChecked={!useAzureSpeech}
              />
            </Form.Group>
            <Form.Group controlId="formWebSpeech2">
              <Form.Check
                name="speechRadio"
                type="radio"
                label="Use Web Speech API (Chrome browser only)"
                defaultChecked={!useAzureSpeech}
              />
            </Form.Group>
            <Form.Group controlId="formAzureSpeech3">
              <Form.Check
                name="speechRadio"
                type="radio"
                label="Use Azure Speech API"
                defaultChecked={useAzureSpeech}
                ref={this.useAzure}
              />
            </Form.Group>

            <Form.Group controlId="formSubscriptionKey">
              <Form.Label>Azure Subscription Key</Form.Label>
              <Form.Control
                type="password"
                placeholder="enter subscription key"
                ref={this.subscription}
                defaultValue={azureSubscriptionKey}
              />
            </Form.Group>

            <Form.Group controlId="formRegion">
              <Form.Label>Azure Region</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter region (e.g. westus2)"
                ref={this.region}
                defaultValue={azureRegion}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.close}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    )
  }
}

function mapStateToProps(application: ApplicationState) {
  return { application };
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
  return {
    save: (config: Partial<SpeechConfig>) => {
      console.log('save');
      dispatch(setSpeechConfig(config));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SpeechConfigControl);

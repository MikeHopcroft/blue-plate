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
  SpeechMode
} from "../actions";

import styles from './controls.module.css';

interface Props {
  application: ApplicationState;
  save: (config: Partial<SpeechConfig>) => void;

  close: () => void;
  show: boolean;
};

interface State {
  speechConfig: SpeechConfig;
}

class SpeechConfigControl extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      speechConfig: props.application.speechConfig
    }
    this.onModeChange = this.onModeChange.bind(this);
    this.onRegionChange = this.onRegionChange.bind(this);
    this.onSubscriptionChange = this.onSubscriptionChange.bind(this);
  }

  onModeChange(e: React.ChangeEvent<HTMLInputElement>) {
    const speechConfig = {
      ...this.state.speechConfig,
      mode: e.target.value as SpeechMode
    }
    this.setState({speechConfig});
  }

  onSubscriptionChange(e: React.ChangeEvent<HTMLInputElement>) {
    const azureSubscriptionKey = e.target.value as SpeechMode;
    const mode = azureSubscriptionKey ? this.state.speechConfig.mode : SpeechMode.TEXT;
    const speechConfig = {
      ...this.state.speechConfig,
      azureSubscriptionKey,
      mode
    }
    this.setState({speechConfig});
  }

  onRegionChange(e: React.ChangeEvent<HTMLInputElement>) {
    const azureRegion = e.target.value as SpeechMode;
    const mode = azureRegion ? this.state.speechConfig.mode : SpeechMode.TEXT;
    console.log(`region="${azureRegion}"`);
    console.log(`mode=${mode}`);
    const speechConfig = {
      ...this.state.speechConfig,
      azureRegion,
      mode
    }
    this.setState({speechConfig});
  }

  save = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    this.props.save(this.state.speechConfig);
    this.props.close();
  }

  render() {
    const {
      mode,
      azureSubscriptionKey,
      azureRegion,
      speechSupport
    } = this.state.speechConfig;

    const azureEnabled = !!(azureRegion && azureSubscriptionKey);
    const webSpeechEnabled = speechSupport;

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
                checked={mode === SpeechMode.TEXT}
                label="Disable speech"
                type="radio"
                value={SpeechMode.TEXT}
                onChange={this.onModeChange}
              />
              <Form.Check
                checked={mode === SpeechMode.WEB_SPEECH}
                disabled={!webSpeechEnabled}
                label="Use Web Speech API (Chrome browser only)"
                type="radio"
                value={SpeechMode.WEB_SPEECH}
                onChange={this.onModeChange}
              />
              <Form.Check
                checked={mode === SpeechMode.AZURE}
                disabled={!azureEnabled}
                label="Use Azure Speech API"
                type="radio"
                value={SpeechMode.AZURE}
                onChange={this.onModeChange}
              />
            </Form.Group>

            <Form.Group controlId="formSubscriptionKey">
              <Form.Label>Azure Subscription Key</Form.Label>
              <Form.Control
                defaultValue={this.state.speechConfig.azureSubscriptionKey}
                placeholder="enter subscription key"
                type="password"
                onChange={this.onSubscriptionChange}
              />
            </Form.Group>

            <Form.Group controlId="formRegion">
              <Form.Label>Azure Region</Form.Label>
              <Form.Control
                defaultValue={this.state.speechConfig.azureRegion}
                type="text"
                placeholder="enter region (e.g. westus2)"
                onChange={this.onRegionChange}
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

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

    this.getMode = this.getMode.bind(this);
    this.onModeChange = this.onModeChange.bind(this);
    this.onRegionChange = this.onRegionChange.bind(this);
    this.onSubscriptionChange = this.onSubscriptionChange.bind(this);
    this.onShow = this.onShow.bind(this);
    this.save = this.save.bind(this);
  }

  getMode(azureSubscriptionKey: string, azureRegion: string): SpeechMode {
    const azureConfigured = !!azureSubscriptionKey.trim() && !!azureRegion.trim();

    const currentMode = this.props.application.speechConfig.mode;
    const newMode = this.state.speechConfig.mode;
    const speechSupport = this.props.application.speechConfig.speechSupport;

    if (newMode === SpeechMode.AZURE && !azureConfigured) {
      if (currentMode !== SpeechMode.AZURE) {
        return currentMode;
      } else {
        return SpeechMode.TEXT
      }
    }

    if (newMode === SpeechMode.WEB_SPEECH && !speechSupport) {
      if (currentMode !== SpeechMode.WEB_SPEECH) {
        return currentMode;
      } else {
        return SpeechMode.TEXT
      }
    }

    return newMode;
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
    const mode = this.getMode(
      azureSubscriptionKey,
      this.state.speechConfig.azureRegion
    );
    const speechConfig = {
      ...this.state.speechConfig,
      azureSubscriptionKey,
      mode
    }
    this.setState({speechConfig});
  }

  onRegionChange(e: React.ChangeEvent<HTMLInputElement>) {
    const azureRegion = e.target.value as SpeechMode;
    const mode = this.getMode(
      this.state.speechConfig.azureSubscriptionKey,
      azureRegion
    );
    console.log(`onRegionChange: region="${azureRegion}"`);
    console.log(`mode=${mode}`);
    const speechConfig = {
      ...this.state.speechConfig,
      azureRegion,
      mode
    }
    this.setState({speechConfig});
  }

  onShow() {
    this.setState({
      speechConfig: this.props.application.speechConfig
    });
  }

  save(e: React.FormEvent<HTMLFormElement>) {
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

    console.log('SpeechConfigControl.render()');
    console.log(JSON.stringify(this.state.speechConfig));

    return (
      <Modal
        show={this.props.show}
        onHide={this.props.close}
        onShow={this.onShow}
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

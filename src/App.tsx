import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Button, Col, Container, Row } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.xxx
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Container>
          <Row>
            <Col>
                <div>
                  <Button block className="btn btn-danger btn-lg" disabled={false}><i className="fa fa-microphone-slash" /> Stop Recording</Button>
                </div>
                <div>
                  <Button block className="btn btn-success btn-lg" disabled={true}><i className="fa fa-microphone" /> Start Recording</Button>
                </div>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;

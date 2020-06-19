import * as React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
// import { Button, Col, Container, Row } from 'react-bootstrap';
// import { Token } from 'token-flow';
import logo from '../logo.svg';
// import { Pipeline } from '../pipeline';
import '../App.css';
// import { Buttons } from './Buttons';
// import { TokenTable } from './TokenTable';
// import { TranscribedSpeech } from './TranscribedSpeech';

interface State {
    isRecording: boolean,
    transcribedSpeech: string | undefined,
    // tokens: Token[] | undefined
}

class App extends React.Component<{}, State> {
    public static SpeechRecognition =
        (window as any).speechRecognition ||
        (window as any).webkitSpeechRecognition;
    private recognition: any;
    // private pipeline: Pipeline;

    constructor(props: any) {
        super(props);
        this.state = {
            isRecording: false,
            // tokens: [],
            transcribedSpeech: undefined
        };

        this.recognition = new App.SpeechRecognition();
        this.recognition.lang = 'en-US';
        this.recognition.interimResults = true;
        this.recognition.maxAlternatives = 1;

        // this.pipeline = new Pipeline(
        //     JSON.stringify(require('../data/menu.json')),
        //     JSON.stringify(require('../data/intents.json')),
        //     JSON.stringify(require('../data/attributes.json')),
        //     JSON.stringify(require('../data/quantifiers.json')),
        //     undefined,
        //     false);
    }

    public startRecognition = () => {
        console.log('startRecognition');
        this.setState({ isRecording: true });
        this.recognition.start();

        this.recognition.onresult = (event: any) => {
            const speechResult = event.results[0][0].transcript as string;
            this.setState({
                // tokens: this.pipeline.processOneQuery(speechResult),
                transcribedSpeech: speechResult
            });
        }

        this.recognition.onspeechend = () => {
            this.setState({ isRecording: false });
            this.recognition.stop();
        }

        this.recognition.onerror = (event: any) => {
            this.setState({ isRecording: false });
        }
    }

    public endRecognition = () => {
        console.log('endRecognition');
        this.setState({ isRecording: false });
        this.recognition.stop();
    }

    public render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Container>
                        <Row>
                            <Col>
                                <div>
                                    {this.state.isRecording ? 'Recording' : 'Not Recording'}
                                </div>
                                <div>
                                    {this.state.transcribedSpeech}
                                </div>
                                <Button
                                    block
                                    className="btn btn-success btn-lg"
                                    disabled={this.state.isRecording}
                                    onClick={this.startRecognition}
                                >
                                    <i className="fa fa-microphone" /> Start Recording
                                </Button>
                                <Button 
                                    block
                                    className="btn btn-danger btn-lg"
                                    disabled={!this.state.isRecording}
                                    onClick={this.endRecognition}
                                >
                                    <i className="fa fa-microphone-slash" /> Stop Recording
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </header>
            </div>
        );
    }
}

export default App;

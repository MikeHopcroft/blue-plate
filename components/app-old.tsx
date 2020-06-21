import * as React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
// import { Button, Col, Container, Row } from 'react-bootstrap';
// import { Token } from 'token-flow';
// import logo from '../logo.svg';
// import { Pipeline } from '../pipeline';
// import '../App.css';
// import { Buttons } from './Buttons';
// import { TokenTable } from './TokenTable';
// import { TranscribedSpeech } from './TranscribedSpeech';

import { createWorld3, loadCatalogSpec, ObjectLoader, ICatalog, Catalog } from 'prix-fixe';
// import { createShortOrderWorld } from 'short-order';
// import { go } from './web';

// import data from './data.yaml';
const data = require('./data.yaml');

const menuRoot = {
  catalog: [
    {
      items: [
        {
          name: 'apple bran muffin',
          aliases: ['apple bran muffin', 'apple muffin'],
        },
        {
          name: 'blueberry muffin',
          aliases: ['blueberry muffin'],
        }
      ]
    }
  ],
  imports: [
    'foo/child.yaml',
  ]
};

const menuChild = {
  catalog: [
    {
      items: [
        {
          name: 'lemon poppyseed muffin',
          aliases: ['lemon poppyseed muffin', 'lemon muffin'],
        },
      ]
    }
  ],
};

interface State {
  catalog: ICatalog,
  isRecording: boolean,
  transcribedSpeech: string | undefined,
  // tokens: Token[] | undefined
}

class AppOld extends React.Component<{}, State> {
  // public static SpeechRecognition =
  //   (window as any).speechRecognition ||
  //   (window as any).webkitSpeechRecognition;
  private recognition: any;
  // private pipeline: Pipeline;

  constructor(props: any) {
    super(props);
    this.state = {
      catalog: Catalog.fromEntities([].values(), [].values()),
      isRecording: false,
      // tokens: [],
      transcribedSpeech: undefined
    };

    // go();
    // const world = createWorld2('datapath');


    // this.recognition = new App.SpeechRecognition();
    // this.recognition.lang = 'en-US';
    // this.recognition.interimResults = true;
    // this.recognition.maxAlternatives = 1;

    // this.pipeline = new Pipeline(
    //     JSON.stringify(require('../data/menu.json')),
    //     JSON.stringify(require('../data/intents.json')),
    //     JSON.stringify(require('../data/attributes.json')),
    //     JSON.stringify(require('../data/quantifiers.json')),
    //     undefined,
    //     false);
  }

  async componentDidMount() {
    console.log(`DATA2: ${JSON.stringify(data)}`);

    const SpeechRecognition =
      (window as any).speechRecognition ||
      (window as any).webkitSpeechRecognition;

    this.recognition = new SpeechRecognition();
    this.recognition.lang = 'en-US';
    this.recognition.interimResults = true;
    this.recognition.maxAlternatives = 1;

    const loader = new ObjectLoader([
      ['/samples/menu/menu.yaml', menuRoot],
      ['/samples/menu/foo/child.yaml', menuChild],
    ]);
    const spec = await loadCatalogSpec(loader, '/samples/menu/menu.yaml');
    const world = createWorld3(spec);
    const catalog = world.catalog;

    this.setState({
      catalog,
      isRecording: false,
      transcribedSpeech: undefined,
    });
  }

  public startRecognition = () => {
    console.log('startRecognition');
    this.setState({ isRecording: true });

    console.log('this.recognition.start();');
    this.recognition.start();

    console.log(`set this.recognition.onresult`);
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
            {printCatalog(this.state.catalog)}
          </Container>
        </header>
      </div>
    );
  }
}

function printCatalog(catalog:ICatalog) {
  return [...catalog.specificEntities()].map(item => (
    <Row>
      {`${item.name} (${item.sku})`}
    </Row>
  ));
}

export default AppOld;

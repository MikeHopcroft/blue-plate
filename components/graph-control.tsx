import React from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import { connect } from 'react-redux'
import { ShortOrderWorld } from 'short-order';

import { ApplicationState } from "../actions";

import { EdgeLabel, EdgePath } from './edge-controls';
import { createLayout, Layout, EdgeTreatment } from './layout';

import styles from './controls.module.css';
import { Cart } from 'prix-fixe';

interface Props {
  cart: Cart;
  transcription: string;
  shortOrderWorld?: ShortOrderWorld;
};

interface State {
  measurePassId: Symbol;
  cartFilter: boolean;
  pathIndex: number;
}

class GraphControl extends React.Component<Props, State> {
  transcription: string;

  layout: Layout;
  measurePassId: Symbol;
  pathIndex: number;
  cartFilter: boolean;

  constructor(props) {
    super(props);
    this.state = {
      measurePassId: Symbol(),
      pathIndex: 0,
      cartFilter: false,
    };

    this.pathIndex = 0;
    this.onPathSelected = this.onPathSelected.bind(this);
    this.onSetCartFilter = this.onSetCartFilter.bind(this);
  }

  render() {
    console.log('GraphControl.render()');
    if (this.transcription !== this.props.transcription) {
      // Props changed. Render structure in order to gather text box measures.
      console.log('  create layout');
      this.transcription = this.props.transcription;
      this.layout = createLayout(
        this.props.shortOrderWorld,
        this.transcription,
        this.props.cart
      );

      this.cartFilter = false;
      this.pathIndex = 0;
      this.setState({ pathIndex: 0, cartFilter: false });
    }

    // If checked state changes, we need to change state.pathIndex

    if (this.pathIndex !== this.state.pathIndex || this.cartFilter !== this.state.cartFilter) {
      if (this.cartFilter !== this.state.cartFilter) {
        this.pathIndex = 0;
        this.cartFilter = this.state.cartFilter;
      } else {
        this.pathIndex = this.state.pathIndex;
      }
      this.layout.select(this.pathIndex, this.state.cartFilter);
    }

    const selected = this.layout.edges.filter(e => e.treatment === EdgeTreatment.SELECTED);
    const other = this.layout.edges.filter(e => e.treatment !== EdgeTreatment.SELECTED);

    let r = null;
    const bb = this.layout.boundingBox;
    if (bb) {
      r = <rect x={bb.x1} y={bb.y1} width={bb.x2 - bb.x1} height={bb.y2 - bb.y1} style={{ stroke: 'blue', fill: 'lightgray' }} />;
    }

    const translate = `translate(${bb.x1 + 20},${-bb.y1 + 20})`;
    const w = `${bb.x2 - bb.x1 + 40}px`;
    const h = `${bb.y2 - bb.y1 + 40}px`;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>
        <div style={{ overflow: 'auto', flexGrow: 1 }}>
          <svg style={{ width: w, height: h }}>
            <g transform={translate}>
              {this.layout.columns.map((c, i) => (
                <circle key={i} cx={c.x1} cy={0} r={5} className={styles.graphVertex} />
              ))}
              {other.map((e, i) => (
                <EdgePath key={i} edge={e} padding={this.layout.xPadding} />
              ))}
              {selected.map((e, i) => (
                <g key={i}>
                  <EdgePath edge={e} padding={this.layout.xPadding} />
                  <circle cx={e.x} cy={0} r={5} className={styles.graphVertexSelected} />
                  <circle cx={e.x + e.width} cy={0} r={5} className={styles.graphVertexSelected} />
                </g>
              ))}
              {this.layout.edges.map((e, i) => (
                <EdgeLabel key={i} edge={e} padding={this.layout.xPadding} />
              ))}
            </g>
          </svg>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: 'lightgreen' }}>
          <div style={{fontWeight: 'bold', marginLeft: '1em', marginRight: '1em'}}>
              Paths:
          </div>
          { this.renderPathSelectionControls()}
          <div style={{flexGrow: 1}}/>
          <div>{this.state.cartFilter?'filtered':'not'}</div>
          <ToggleButtonGroup type="checkbox" name="options">
            <ToggleButton
              value={0}
              variant="primary"
              onChange={(e) => this.onSetCartFilter(e.currentTarget.checked)}
            >
              Cart Filter
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
    );
  }

  onPathSelected(pathIndex: number) {
    // console.log(`*************************** onPathSelected(${pathIndex})`);
    // console.log(pathIndex);
    this.setState({pathIndex});
  }

  onSetCartFilter(cartFilter: boolean) {
    this.setState({cartFilter});
  }

  renderPathSelectionControls() {
    const buttons: JSX.Element[] = [];
    for (let i = 0; i < this.layout.getPathCount(); ++i) {
      buttons.push(
        <ToggleButton value={i}>{i}</ToggleButton>
      );
    }
    return (
      <ToggleButtonGroup
        type="radio"
        name="options"
        defaultValue={0}
        onChange={this.onPathSelected}
      >
        { buttons }
      </ToggleButtonGroup>
    )
  }

  componentDidMount() {
    // console.log('GraphControl.componentDidMount() xxx');
    this.layout.measure();
    this.layout.layout();

    // Trigger another render since measurements have changed.
    this.setState({ measurePassId: this.layout.measurePassId })
  }

  componentDidUpdate() {
    // console.log('GraphControl.componentDidUpdate()');

    if (this.layout.measurePassId !== this.state.measurePassId) {
      console.log('  measure and layout');
      this.layout.measure();
      this.layout.layout();

      // Trigger another render since measurements have changed.
      this.setState({ measurePassId: this.layout.measurePassId })
    } else {
      console.log('  skip measure and layout');
    }
  }
}

function mapStateToProps({ bluePlateWorld, transcription }: ApplicationState) {
  return { shortOrderWorld: bluePlateWorld.shortOrderWorld };
}

export default connect(mapStateToProps)(GraphControl);

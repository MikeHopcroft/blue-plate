import React from 'react';
import { connect } from 'react-redux'
import { ShortOrderWorld } from 'short-order';

import { ApplicationState } from "../actions";

import { EdgeLabel, EdgePath } from './edge-controls';
import { createLayout, Layout, EdgeTreatment } from './layout';

import styles from './controls.module.css';

interface Props {
  transcription: string;
  shortOrderWorld?: ShortOrderWorld
};

interface State {
  measurePassId: Symbol;
}

class GraphControl extends React.Component<Props, State> {
  transcription: string;

  layout: Layout;
  measurePassId: Symbol;

  render() {
    console.log('GraphControl.render()');
    if (this.transcription !== this.props.transcription) {
      // Props changed. Render structure in order to gather text box measures.
      console.log('  create layout');
      this.transcription = this.props.transcription;
      this.layout = createLayout(
        this.props.shortOrderWorld,
        this.transcription
      );
    }

    console.log('  map');
    const selected = this.layout.edges.filter(e => e.treatment === EdgeTreatment.SELECTED);
    const other = this.layout.edges.filter(e => e.treatment !== EdgeTreatment.SELECTED);

    let r = null;
    const bb = this.layout.boundingBox;
    if (bb) {
      console.log(`${bb.x1} ${bb.x2} ${bb.y1} ${bb.y2}`);
      r = <rect x={bb.x1} y={bb.y1} width={bb.x2-bb.x1} height={bb.y2-bb.y1} style={{ stroke: 'blue', fill: 'lightgray'}}/>;
    }

    const translate = `translate(${bb.x1 + 20 },${-bb.y1 + 20})`;
    const w = `${bb.x2-bb.x1 + 40}px`;
    const h = `${bb.y2-bb.y1 + 40}px`;

    console.log('before render');
    console.log(this.layout);

    return (
      <svg style={{ width: w, height: h }}>
        <g transform={translate}>
          {/* { r } */}
          { this.layout.columns.map((c,i) => (
            <circle key={i} cx={c.x1} cy={0} r={5} className={styles.graphVertex}/>
          ))}
          { other.map((e,i) => (
            <EdgePath key={i} edge={e} padding={this.layout.xPadding}/>
          ))}
          { selected.map((e,i) => (
            <g key={i}>
              <EdgePath  edge={e} padding={this.layout.xPadding}/>
              <circle cx={e.x} cy={0} r={5} className={styles.graphVertexSelected}/>
              <circle cx={e.x + e.width} cy={0} r={5} className={styles.graphVertexSelected}/>
            </g>
          ))}
          { this.layout.edges.map((e,i) => (
            <EdgeLabel key={i} edge={e} padding={this.layout.xPadding}/>
          ))}
        </g>
      </svg>
    );
  }

  componentDidMount() {
    console.log('GraphControl.componentDidMount() xxx');
    this.layout.measure();
    this.layout.layout();

    // Trigger another render since measurements have changed.
    this.setState({ measurePassId: this.layout.measurePassId})
  }

  componentDidUpdate() {
    console.log('GraphControl.componentDidUpdate()');

    if (this.layout.measurePassId !== this.state.measurePassId) {
      console.log('  measure and layout');
      this.layout.measure();
      this.layout.layout();

      // Trigger another render since measurements have changed.
      this.setState({ measurePassId: this.layout.measurePassId})
    } else {
      console.log('  skip measure and layout');
    }
  }
}

function mapStateToProps({ shortOrderWorld, transcription}: ApplicationState) {
  return { shortOrderWorld };
}

export default connect(mapStateToProps)(GraphControl);

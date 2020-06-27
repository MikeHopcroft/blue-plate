import React from 'react';
// import { Graph } from 'token-flow';

import { createLayout, Edge, Layout, EdgeTreatment } from './layout';

import styles from './controls.module.css';

interface Props {
  transcription: string;
};

interface State {
  measurePassId: Symbol;
}

export default class GraphControl extends React.Component<Props, State> {
  transcription: string;

  layout: Layout;
  measurePassId: Symbol;

  render() {
    console.log('GraphControl.render()');
    if (this.transcription !== this.props.transcription) {
      // Props changed. Render structure in order to gather text box measures.
      console.log('  create layout');
      this.transcription = this.props.transcription;
      this.layout = createLayout(this.transcription);
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
          { r }
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

    // Force rerender since measurements have changed.
    this.setState({ measurePassId: this.layout.measurePassId})
  }

  componentDidUpdate() {
    console.log('GraphControl.componentDidUpdate()');

    if (this.layout.measurePassId !== this.state.measurePassId) {
      console.log('  measure and layout');
      this.layout.measure();
      this.layout.layout();

      // Force rerender since measurements have changed.
      this.setState({ measurePassId: this.layout.measurePassId})
    } else {
      console.log('  skip measure and layout');
    }
  }
}

interface EdgeProps {
  edge: Edge;
  padding: number;
}

class EdgeLabel extends React.Component<EdgeProps> {
  render() {
    console.log('EdgeControl.render()');
    const e = this.props.edge;

    const treatment = (e.treatment === EdgeTreatment.SELECTED) ?
      styles.graphShapeSelected : (e.treatment === EdgeTreatment.WORD) ?
      styles.graphShapeWord : styles.graphShapeToken;
    const className = `${styles.graphShape} ${treatment}`;

    const padding = this.props.padding;
    const dimensionsBox = {
      x: e.x + 2 * padding,
      y: e.y - e.textHeight * 0.5,
      width: e.textWidth,
      height: e.textHeight,
    }

    const dimensionsText = {
      x: e.x + 2 * padding,
      y: e.y + e.textHeight * 0.35,
    }

    return (
      <g>
        <rect {...dimensionsBox} className={className}/>
        <text {...dimensionsText} ref={e.control} className={styles.graphText}>
          { e.text }
          <title>{e.text}</title>
        </text>
      </g>
    );
  }

  
  componentDidMount() {
    console.log(`EdgeLabel.componentDidMount`);
  }
}

class EdgePath extends React.Component<EdgeProps> {
  render() {
    console.log('EdgePath.render()');
    const e = this.props.edge;
    const className =
      (e.treatment === EdgeTreatment.SELECTED) ?
      styles.graphPathSelected :
      styles.graphPath;

      const padding = this.props.padding;

    return (
      <path
        className={className}
        d = {this.getPath()}
      />
    );
  }

  getPath(): string {
    const padding = this.props.padding;
    const e = this.props.edge;

    const u = padding/2;
    const left = e.x;
    const right = e.x + e.width;

    if (e.y === 0) {
      return `
        M${left},${0}
        H${right}
      `;
    } else if (e.y > 0) {
      return `
        M${left},${0}
        h${u}
        a${u},${u},0,0,1,${u},${u}
        V${e.y-u}
        a${u},${u},0,0,0,${u},${u}
        H${right - 3*u}
        a${u},${u},0,0,0,${u},${-u}
        V${u}
        a${u},${u},0,0,1,${u},${-u}
        H${right}
      `;
    } else {
      return `
        M${left},${0}
        h${u}
        a${u},${u},0,0,0,${u},${-u}
        V${e.y+u}
        a${u},${u},0,0,1,${u},${-u}
        H${right - 3*u}
        a${u},${u},0,0,1,${u},${u}
        V${-u}
        a${u},${u},0,0,0,${u},${u}
        H${right}
      `;
    }
  }
}

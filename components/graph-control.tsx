import React from 'react';
// import { Graph } from 'token-flow';

import { createLayout, Edge, Layout } from './layout';

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
    // console.log(this.columns);
    return (
      <g transform="translate(100,200)">
        { this.layout.edges.map((e,i) => (
          <EdgeControl key={i} edge={e} padding={this.layout.xPadding}/>
        ))}
        { this.layout.columns.map((c,i) => (
          <circle key={i} cx={c.x1} cy={0} r={5} className={styles.graphVertex}/>
        ))}
      </g>
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
      this.layout.measure();
      this.layout.layout();

      // Force rerender since measurements have changed.
      this.setState({ measurePassId: this.layout.measurePassId})
    }
  }
}

interface EdgeProps {
  edge: Edge;
  padding: number;
}

interface EdgeState {
  bbox: SVGRect;
}

class EdgeControl extends React.Component<EdgeProps, EdgeState> {
  textElement: React.RefObject<SVGTextElement>;
  currentProps: EdgeProps;

  constructor(props) {
    super(props);

    this.textElement = React.createRef()
  }

  render() {
    console.log('EdgeControl.render()');
    const e = this.props.edge;

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
        <path
          className={styles.graphPath}
          d = {this.getPath()}
        />
        <rect {...dimensionsBox} className={styles.graphShape}/>
        <text {...dimensionsText} ref={e.control} className={styles.graphText}>
          { e.text }
        </text>
      </g>
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
      `;
    }
  }

  componentDidMount() {
    console.log('EdgeControl.componentDidMount()');
  }

  componentDidUpdate() {
    console.log('EdgeControl.componentDidUpdate()');
  }
}

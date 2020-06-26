import React from 'react';

import styles from './controls.module.css';

interface EdgeInfo {
  startCol: number;
  endCol: number;
}

interface Column {
  x1: number;
  x2: number;
}

interface Measure {
  width: number;
  height: number;
}

interface Props {
  edges: string[];
};

interface State {
  measures: Measure[];
}

const leftPadding = 10;
const run0 = 10;
const run1 = 10;
const rise = 50;

export default class GraphControl extends React.Component<Props, State> {
  edges: string[] = [];
  edgeControls: Array<React.RefObject<EdgeControl>>;
  edgeInfo: EdgeInfo[] = [];
  columns: Column[] = [];
  measures: Measure[];

  layout() {
    console.log('inside layout xxx');
    console.log('inside layout yyy');
    console.log(this);
    let x = leftPadding;
    this.columns = [];
    for (const [i,e] of this.edges.entries()) {
      console.log(`i=${i} e=${e}`);
      const w = this.measures[i].width;
      const x1 = x;
      const x2 = x + w + 2 * (run0 + run1);
      console.log('here');
      this.columns.push({x1, x2});
      x = x2;
      console.log(this);
    }
  }

  render() {
    console.log('GraphControl.render()');
    if (this.edges !== this.props.edges) {
      // Props changed. Render structure in order to gather text box measures.
      console.log('  measure');
      this.edges = this.props.edges;
      this.edgeControls = this.edges.map(x => React.createRef<EdgeControl>());
      this.measures = this.edges.map(x => ({width: 0, height: 0}));
      this.columns = this.edges.map(x => ({x1: 0, x2: 0}));
    } else if (this.measures !== this.state.measures) {
        // We just got new text box measures. Layout before rendering.
        console.log('  layout')
        this.measures = this.state.measures;
        this.layout();
    }

    console.log('  map');
    console.log(this.columns);
    return this.edges.map((x,i) => {
      console.log(`  x=${x} i=${i}`);
      console.log(this);
      const c = this.columns[i];
      const m = this.measures[i];

      return <EdgeControl
        key={i}
        ref={this.edgeControls[i]}
        x1={c.x1}
        x2={c.x2}
        y={100}
        w={m.width}
        h={m.height}
        text={this.edges[i]}
      />;
    });
  }

  componentDidMount() {
    console.log('GraphControl.componentDidMount() xxx');
    console.log(this);
    const measures: Measure[] = [];
    for (const [i, e] of this.edgeControls.entries()) {
      const { width, height } = e.current.textElement.current.getBBox();
      console.log(`  width=${width} height=${height}`);
      measures.push({ width, height });
    }
    this.setState({ measures });
  }

  componentDidUpdate() {
    console.log('GraphControl.componentDidUpdate()');
    console.log(this);
    console.log(this.measures !== this.state.measures);
    if (this.measures !== this.state.measures) {
      // this.measures = this.state.measures;
      const measures: Measure[] = [];
      for (const [i, e] of this.edgeControls.entries()) {
        const { width, height } = e.current.textElement.current.getBBox();
        console.log(`  width=${width} height=${height}`);
        measures.push({ width, height });
      }
      this.setState({ measures: measures });
    }
  }
}

interface EdgeProps {
  x1: number;
  x2: number;
  y: number;
  w: number;
  h: number;
  text: string;
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
    const dimensionsBox = {
      x: this.props.x1,
      y: this.props.y - this.props.h * 0.825,
      width: this.props.w,
      height: this.props.h,
    }

    const dimensionsText = {
      x: this.props.x1,
      y: this.props.y,
    }

    return (
      <g>
        <rect {...dimensionsBox} className={styles.graphShape}/>
        <text {...dimensionsText} ref={this.textElement} className={styles.graphText}>
          { this.props.text }
        </text>
      </g>
    );
  }

  componentDidMount() {
    console.log('EdgeControl.componentDidMount()');
    this.currentProps = this.props;
    this.setState({ bbox: this.textElement.current.getBBox() });
  }

  componentDidUpdate() {
    console.log('EdgeControl.componentDidUpdate()');
    if (this.currentProps !== this.props) {
      this.currentProps = this.props;
      this.setState({ bbox: this.textElement.current.getBBox() });
    }
  }
}

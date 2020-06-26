import React from 'react';

import styles from './controls.module.css';
import { xxx } from './attributes-control';

interface SVGState {
  text_extents: null | [number, number];
};

interface Props2 {
  nodes: string[];
};

interface State2 {
  positions: number[];
}

/*

Layout based on columns.
Column starts after rightmost incoming edge.
All incoming edges adjusted to end at rightmost incoming edge.

 */
export class TestLayout extends React.Component<Props2, State2> {
  nodes: Array<React.RefObject<TestControl>>;

  constructor(props) {
    super(props);

    this.nodes = props.nodes.map(React.createRef);
  }

  render() {
    console.log('TestLayout.render');
    if (this.state) {
      // console.log('this.state');
      // console.log(this.state);
      return this.props.nodes.map((x,i) => (
        <TestControl key={i} text={this.props.nodes[i]} x={this.state.positions[i]} y={100} ref={this.nodes[i]}/>
      ));
    } else {
      return this.props.nodes.map((x,i) => (
        <TestControl key={i} text={this.props.nodes[i]} x={0} y={0} ref={this.nodes[i]}/>
      ));
    }
  }

  componentDidMount() {
    console.log('TestLayout.componentDidMount');
    const positions: number[] = [];
    let x = 0;
    for (const n of this.nodes) {
      const bbox = n.current.textElement.current.getBBox();
      // console.log(bbox);
      // console.log(`bbox.left = ${bbox.x}`);
      positions.push(bbox.x + x);
      x += bbox.width + 20;

      // console.log(`x=${x}`);
      // console.log(bbox);
    }
    // console.log('setState');
    // console.log(positions);
    this.setState({positions});
    // console.log(this.state);
  }
}

interface Props {
  x: number;
  y: number;
  text: string;
}

interface State {
  bbox: SVGRect;
}

export default class TestControl extends React.Component<Props, State> {
  textElement: React.RefObject<SVGTextElement>;

  constructor(props) {
    super(props);

    this.textElement = React.createRef()
  }

  render() {
    console.log(`TestControl.render x=${this.props.x} y=${this.props.y}`);
    // console.log(this.state);
    const border = this.state ? (
      <rect
        x={this.props.x}
        y={this.props.y - this.state.bbox.height}
        width={this.state.bbox.width}
        height={this.state.bbox.height}
        style={{ fill: 'white', stroke: 'red' }}
      />
    ) : null;

    return (
      <g>
        <circle cx={50} cy={50} r={10} fill="red" />
        {border}
        <text ref={this.textElement} x={this.props.x} y={this.props.y} className={styles.graphNode}>
          { this.props.text }
          {/* Hello, world!!!! */}
        </text>
      </g>
    );
  }

  componentDidMount() {
    console.log('TestControl.componentDidMount');
    // console.log(this.textElement.current.getBBox());
    // this.setState({ bbox: this.textElement.current.getBBox() });

    // Note sure all this complicated logic is necessary.
    // Probably should do all layout in parent control.
    // But what about bounding box?
    // Perhaps control has an optional bounding box parameter.
    // First render is without.
    // Second render is with.

    // Only update state when bbox actually changes. Otherwise causes excess renders.
    if (this.state) {
      const old = this.state.bbox;
      const bbox = this.textElement.current.getBBox();
      if (bbox.width !== old.width || bbox.height !== old.height || bbox.x !== old.x || bbox.y !== old.y) {
        this.setState({ bbox });
      }
    } else {
      this.setState({ bbox: this.textElement.current.getBBox() });
    }
  }

  componentDidUpdate() {
    console.log('TestControl.componentDidUpdate');
    // Only update state when bbox actually changes. Otherwise causes
    //  react-dom.development.js:23093 Uncaught Error: Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.
    const old = this.state.bbox;
    const bbox = this.textElement.current.getBBox();
    if (bbox.width !== old.width || bbox.height !== old.height || bbox.x !== old.x || bbox.y !== old.y) {
      this.setState({ bbox });
    }
  }
}
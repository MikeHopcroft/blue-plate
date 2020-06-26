import React from 'react';
// import { Graph } from 'token-flow';

import { createLayout, Edge, Layout } from './layout';

import styles from './controls.module.css';
import { renderGeneric } from './product-detail-control';

// interface Edge2 {
//   startCol: number;
//   endCol: number;
//   text: string;
// }

// interface Column2 {
//   x1: number;
//   x2: number;
//   // in: Edge[];
//   // out: Edge[];
// }


// interface Measure {
//   width: number;
//   height: number;
// }

interface Props {
  transcription: string;
};

interface State {
  measurePassId: Symbol;
}

const leftPadding = 10;
const run0 = 10;
const run1 = 10;
const rise = 50;

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
    return this.layout.edges.map((e,i) => {
      return <EdgeControl key={i} edge={e}/>;
    });
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

    const padding = (e.width - e.textWidth)/2;
    const dimensionsBox = {
      x: e.x + padding,
      y: e.y - e.textHeight * 0.825 + 200,
      width: e.textWidth,
      height: e.textHeight,
    }

    const dimensionsText = {
      x: e.x + padding,
      y: e.y + 200,
    }

    return (
      <g>
        <rect {...dimensionsBox} className={styles.graphShape}/>
        <text {...dimensionsText} ref={e.control} className={styles.graphText}>
          { e.text }
        </text>
      </g>
    );
  }

  componentDidMount() {
    console.log('EdgeControl.componentDidMount()');
  }

  componentDidUpdate() {
    console.log('EdgeControl.componentDidUpdate()');
    // if (this.currentProps !== this.props) {
    //   this.currentProps = this.props;
    //   this.setState({ bbox: this.textElement.current.getBBox() });
    // }
  }
}

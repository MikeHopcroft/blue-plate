import React from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import { connect } from 'react-redux'
import { ShortOrderWorld, Span } from 'short-order';

import { ApplicationState } from "../actions";

import { EdgeLabel, EdgePath } from './edge-controls';
import { GraphBuilder } from './graph-builder';
import { Layout, EdgeTreatment } from './layout';

import styles from './controls.module.css';
import { Cart } from 'prix-fixe';

const selectionRectangle = styles.graphSelectionRectangle;

interface Props {
  cart: Cart;
  transcription: string;
  shortOrderWorld?: ShortOrderWorld;
};

interface State {
  measurePassId: Symbol;
  cartFilter: boolean;
  pathIndex: number;
  selecting: boolean;
  x1: number;
  x2: number;
  span?: Span;
}

class GraphControl extends React.Component<Props, State> {
  transcription: string;

  graphBuilder: GraphBuilder;
  layout: Layout;
  measurePassId: Symbol;

  span?: Span = undefined;

  constructor(props) {
    super(props);
    this.state = {
      measurePassId: Symbol(),
      pathIndex: 0,
      cartFilter: false,
      selecting: false,
      x1: 0,
      x2: 0,
    };

    this.graphBuilder = new GraphBuilder(
      this.props.shortOrderWorld,
      this.props.transcription,
      this.props.cart
    );

    this.layout = this.graphBuilder.layout;

    this.onPathSelected = this.onPathSelected.bind(this);
    this.onSetCartFilter = this.onSetCartFilter.bind(this);

    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
  }

  onMouseDown(event: React.PointerEvent<HTMLDivElement>) {
    // console.log(`mouse down (${event.clientX},${event.clientY})`);
    // console.log(`mouse down (${event.screenX},${event.screenY})`);
    // console.log(`mouse down (${event.movementX},${event.movementY})`);
    // const y = event.pageY - event.currentTarget.offsetTop + event.currentTarget.scrollTop;
    // if (y > event.currentTarget.offsetHeight) {
    //   console.log('click on scrollbar');
    // }

    // const x = event.pageX - event.currentTarget.offsetLeft + event.currentTarget.scrollLeft;
    // const x = event.pageX - event.currentTarget.offsetLeft - event.currentTarget.scrollLeft;
    event.currentTarget.setPointerCapture(event.pointerId);

    const x = event.nativeEvent.offsetX;
    console.log(`mouse down (${x},--)`);

    this.setState({
      selecting: true,
      x1: x,
      x2: x,
    });
    // this.selecting = true;
    event.preventDefault();
  }

  onMouseMove(event: React.PointerEvent<HTMLDivElement>) {
    if (this.state.selecting) {
      // console.log(`mouse move (${event.clientX},${event.clientY})`);
      // const x = event.pageX - event.currentTarget.offsetLeft + event.currentTarget.scrollLeft;
      // const x = event.pageX - event.currentTarget.offsetLeft - event.currentTarget.scrollLeft;
      const x = event.nativeEvent.offsetX;
      console.log(`mouse move (${x},--)`);

      this.setState({
        x2: x,
      });
      event.preventDefault();
    }
  }

  onMouseUp(event: React.PointerEvent<HTMLDivElement>) {
    // console.log(`mouse up (${event.clientX},${event.clientY})`);
    // const x = event.pageX - event.currentTarget.offsetLeft + event.currentTarget.scrollLeft;
    // const x = event.pageX - event.currentTarget.offsetLeft - event.currentTarget.scrollLeft;
    event.currentTarget.releasePointerCapture(event.pointerId);
    const x = event.nativeEvent.offsetX;

    console.log(`mouse up (${x},--)`);

    const span = this.layout.getSpan(this.state.x1, x);
    if (span) {
      console.log(`span: start=${span.start}, length=${span.length}`);
    } else {
      console.log('span undefined');
    }

    this.setState({ selecting: false, span, pathIndex: 0 });
    event.preventDefault();
  }

  render() {
    console.log('GraphControl.render()');

    if (this.span !== this.state.span) {
      console.log(`Old span: ${JSON.stringify(this.span)}`);
      console.log(`New span: ${JSON.stringify(this.state.span)}`);
      this.span = this.state.span;
      this.graphBuilder.setSpan(this.state.span);
    }

    console.log(`this.layout.select(${this.state.pathIndex}, ${this.state.cartFilter})`);
    this.layout.select(this.state.pathIndex, this.span);

    const selected = this.layout.edges.filter(e => e.selectedPath);
    const other = this.layout.edges.filter(e => !e.selectedPath);

    const vertices = this.layout.columns.map(c => ({
      x: c.x1,
      style: styles.graphVertex
    }));
    for (const e of other) {
      vertices[e.startCol].style =
        e.filtered ? styles.graphVertexFiltered : styles.graphVertex;
      vertices[e.endCol].style =
        e.filtered ? styles.graphVertexFiltered : styles.graphVertex;
    }
    for (const e of selected) {
      vertices[e.startCol].style = styles.graphVertexSelected;
      vertices[e.endCol].style = styles.graphVertexSelected;
    }

    let r = null;
    const bb = this.layout.boundingBox;
    if (bb) {
      r = <rect x={bb.x1} y={bb.y1} width={bb.x2 - bb.x1} height={bb.y2 - bb.y1} style={{ stroke: 'blue', fill: 'lightgray' }} />;
    }

    const translate = `translate(${bb.x1 + 20},${-bb.y1 + 20})`;
    const w = `${bb.x2 - bb.x1 + 40}px`;
    const h = `${bb.y2 - bb.y1 + 40}px`;

    const score = this.layout.edges.reduce((p,c) => p + (c.selectedPath ? c.info.score : 0), 0);

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          userSelect: 'none',
        }}>
        <div style={{ overflow: 'auto', flexGrow: 1 }}>
          <div
            style={{ width: w , height: h }}
            onPointerDown={this.onMouseDown}
            onPointerUp={this.onMouseUp}
            onPointerMove={this.onMouseMove}
          >
            <svg style={{ width: w , height: h }}>
            <g transform={translate}>
              {this.renderSelection(bb.y2 - bb.y1 + 40)}
              {other.map((e, i) => (
                <EdgePath key={i} edge={e} padding={this.layout.xPadding} />
              ))}
              {selected.map((e, i) => (
                <EdgePath key={i} edge={e} padding={this.layout.xPadding} />
              ))}
              {this.layout.edges.map((e, i) => (
                <EdgeLabel key={i} edge={e} padding={this.layout.xPadding} />
              ))}
              {vertices.map((v, i) => (
                <circle key={i} cx={v.x} cy={0} r={5} className={v.style} />
              ))}
            </g>
          </svg>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: 'lightgreen' }}>
          <div style={{fontWeight: 'bold', marginLeft: '1em', marginRight: '1em'}}>
              {this.state.span ? 'Filtered ': ''}
              Paths:
          </div>
          { this.renderPathSelectionControls()}
          <div style={{flexGrow: 1}}/>
          <div style={{fontWeight: 'bold', marginLeft: '1em', marginRight: '1em'}}>
            Score: {score}
          </div>
        </div>
      </div>
    );
  }

  renderSelection(height: number) {
    if (this.state.selecting) {
      const x = Math.min(this.state.x1, this.state.x2) - 20;
      const width = Math.max(this.state.x1, this.state.x2) - 20 - x;
      // const y = -1000;
      // height = 1000;
      // const height = 100;
      // TODO: replace hack that hard-codes y and height.
      return <rect x={x} y={-1000} width={width} height={2000} className={selectionRectangle}/>
    } else {
      return null;
    }
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
        <ToggleButton
          key={i}
          value={i}
          name="options"
        >
          {i}
        </ToggleButton>
      );
    }

    // DESIGN NOTE: Need key to force dismount when switching between modes.
    // Otherwise, focus may remain on a button that is not active.
    const key = this.state.span ? "subgraph" : "completegraph";
    return (
      <ToggleButtonGroup
        type="radio"
        key={key}
        name="options"
        value={this.state.pathIndex}
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

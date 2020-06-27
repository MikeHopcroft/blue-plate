import React from 'react';

import { Edge, EdgeTreatment } from './layout';

import styles from './controls.module.css';

interface EdgeProps {
  edge: Edge;
  padding: number;
}

export class EdgeLabel extends React.Component<EdgeProps> {
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

}

export class EdgePath extends React.Component<EdgeProps> {
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

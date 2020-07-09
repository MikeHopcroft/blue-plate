import { OPTION } from 'prix-fixe';
import React from 'react';
import { Token } from 'token-flow';

import {
  AnyToken,
  ATTRIBUTE,
  ENTITY,
  OPTION_RECIPE,
  PRODUCT_RECIPE,
  QUANTITY,
  UNIT,
  WORD,
} from 'short-order';

import { NUMBERTOKEN } from 'token-flow';

import { Edge, EdgeTreatment } from './layout';

import styles from './controls.module.css';

const shapeWord = styles.graphShapeWord;
const shapeToken = styles.graphShapeToken;
const shapeSelected = styles.graphShapeSelected;
const shapeText = styles.graphText;
const shapeTextSelected = styles.graphTextSelected;
const pathOrdinary = styles.graphPath;
const pathSelected = styles.graphPathSelected;

interface EdgeProps {
  edge: Edge;
  padding: number;
}

const BOX_PADDING = 2;

export class EdgeLabel extends React.Component<EdgeProps> {
  render() {
    // console.log('EdgeControl.render()');
    const e = this.props.edge;

    const shapeClassName = e.selectedPath ?
      shapeSelected : e.treatment === EdgeTreatment.WORD ?
      shapeWord : shapeToken;
    const textClassName = e.selectedPath ? shapeTextSelected : shapeText;

    const padding = this.props.padding;

    const position = {
      x: e.x,
      y: e.y,
    }

    const dimensionsBox = {
      x: 2 * padding - BOX_PADDING,
      y: -e.textHeight * 0.5 - BOX_PADDING,
      width: e.textWidth + BOX_PADDING * 2,
      height: e.textHeight + BOX_PADDING * 2,
    }

    const dimensionsText = {
      x: 2 * padding,
      y: -e.textHeight * 0.1,
    }

    return (
      <g transform={`translate(${position.x} ${position.y})`}>
        <rect {...dimensionsBox} className={shapeClassName} />
        <text {...dimensionsText} ref={e.control} className={textClassName}>
          <tspan style={{ fontWeight: 'bold' }}>{e.info.type}</tspan>
          {e.info.name}
          <tspan x={2 * padding} dy="1em">
            score={e.info.score.toFixed(1)}{e.info.info}
          </tspan>
        </text>
      </g>
    );
  }

}

export class EdgePath extends React.Component<EdgeProps> {
  render() {
    // console.log('EdgePath.render()');
    const e = this.props.edge;
    const className = e.selectedPath ? pathSelected : pathOrdinary;

    return (
      <path
        className={className}
        d={this.getPath()}
      />
    );
  }

  getPath(): string {
    const padding = this.props.padding;
    const e = this.props.edge;

    const u = padding / 2;
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
        V${e.y - u}
        a${u},${u},0,0,0,${u},${u}
        H${right - 3 * u}
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
        V${e.y + u}
        a${u},${u},0,0,1,${u},${-u}
        H${right - 3 * u}
        a${u},${u},0,0,1,${u},${u}
        V${-u}
        a${u},${u},0,0,0,${u},${u}
        H${right}
      `;
    }
  }
}


export interface TokenFormat {
  type: string;
  name: string;
  info: string;
  score: number;
}

export function formatToken(t: Token, score: number): TokenFormat {
  const token = t as AnyToken;

  let type: string;
  let name: string;
  let info: string;

  switch (token.type) {
    case ATTRIBUTE:
      type = 'ATTRIBUTE: ';
      name = token.name;
      info = ', aid=' + token.id;
      break;
    case ENTITY:
      type = 'PRODUCT: ';
      name = token.name;
      info = ', pid=' + token.pid;
      break;
    case NUMBERTOKEN:
      type = 'NUMBER: ';
      name = token.value.toString();
      info = '';
      break;
    case OPTION:
      type = 'OPTION: ';
      name = token.name;
      info = ', pid=' + token.id;
      break;
    case OPTION_RECIPE:
      type = 'OPTION_RECIPE: ';
      name = token.name;
      info = ', rid=' + token.rid;
      break;
    case PRODUCT_RECIPE:
      type = 'PRODUCT_RECIPE: ';
      name = token.name;
      info = ', rid=' + token.rid;
      break;
    case QUANTITY:
      type = 'QUANTITY: ';
      name = token.value.toString();
      info = '';
      break;
    case UNIT:
      type = 'UNIT ';
      name = '';
      info = '';
      break;
    case WORD:
      type = 'WORD ';
      name = token.text;
      info = '';
      break;
    default:
      {
        const symbol = t.type.toString();
        type = `${symbol.slice(7, symbol.length - 1)}`;
        name = '';
        info = '';
      }
  }
  return {
    type,
    name,
    info,
    score
  }
}

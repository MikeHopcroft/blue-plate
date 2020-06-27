import React from 'react';
import { ShortOrderWorld, tokenToString } from 'short-order';
import { coalesceGraph, filterGraph, Graph } from 'token-flow';


export enum EdgeTreatment {
  WORD = 'WORD',
  TOKEN = 'TOKEN',
  SELECTED = 'SELECTED'
}

export class Edge {
  startCol: number;
  endCol: number;
  text: string;
  title: string; 

  length: number;
  control: React.RefObject<SVGTextElement>;

  textWidth: number;
  textHeight: number;

  width: number;
  height: number;

  x: number;
  y: number;

  row: Row;

  treatment: EdgeTreatment;

  constructor(
    startCol: number,
    endCol: number,
    text: string,
    title: string,
    treatment: EdgeTreatment
  ) {
    this.startCol = startCol;
    this.endCol = endCol;
    this.text = text;
    this.title = title;
    this.treatment = treatment;

    this.length = endCol - startCol;
    this.control = React.createRef<SVGTextElement>();

    this.textWidth = 0;
    this.textHeight = 0;

    this.width = 0;
    this.height = 0;
    this.x = 0;
    this.y = 0;
  }
}

export interface Column {
  x1: number;
  x2: number;
  in: Edge[];
  out: Edge[];
}

class Row {
  edges: Array<Edge | null> = [];
  height = 0;
  y = 0;

  constructor(columnCount: number) {
    for (let i = 0; i < columnCount; ++i) {
      this.edges.push(null);
    }
  }

  tryAssign(e: Edge): boolean {
    for (let i = e.startCol; i < e.endCol; ++i) {
      if (this.edges[i]) {
        return false;
      }
    }
    for (let i = e.startCol; i < e.endCol; ++i) {
      this.edges[i] = e;
    }
    e.row = this;
    return true;
  }

  setHeight() {
    this.height = 0;
    for (const e of this.edges) {
      if (e && e.height > this.height) {
        this.height = e.height;
      }
    }
  }
}

export interface MinMax {x1: number, x2: number, y1:number, y2:number};

export class Layout {
  xPadding = 20;
  yPadding = 10;

  edges: Edge[];
  columns: Column[] = [];
  rows: Row[] = [];

  boundingBox: MinMax = { x1: 0, x2: 0, y1:0, y2:0 };

  measurePassId: Symbol = Symbol('measure');

  constructor(columnCount: number, edges: Edge[]) {
    edges.sort((a,b) => {
      const d = a.length - b.length;
      if (d) {
        return d;
      }
      return a.startCol - b.startCol;
    })
    this.edges = edges;
    for (let i = 0; i <= columnCount; ++i) {
      this.columns.push({ x1: 0, x2: 0, in: [], out: [] })
    }
    for (const e of edges) {
      this.columns[e.startCol].out.push(e);
      this.columns[e.endCol].in.push(e);
    }
  }

  measure() {
    // Update unique measure pass id.
    // This is used by React to determine when to do a second rendering pass.
    this.measurePassId = Symbol('measure');

    for (const e of this.edges) {
      const { width, height } = e.control.current.getBBox();
      console.log(`"${e.text}": width: ${width}, height: ${height}`);
      e.textWidth = width;
      e.textHeight = height;
      e.width = 0; //width + 2 * this.xPadding;
      e.height = height + 2 * this.yPadding;
    }
  }

  layout() {
    //
    // Layout x-coordinates
    //
    for (const c of this.columns) {
      c.x1 = 0;
      c.x2 = 0;
    }

    for (const c of this.columns) {
      c.x1 = 0;
      for (const e of c.in) {
        const x = e.x + e.textWidth + this.xPadding * 4;
        if (x > c.x1) {
          c.x1 = x;
        }
      }
      for (const e of c.in) {
        e.width = c.x1 - e.x;
      }
      for (const e of c.out) {
        e.x = c.x1;
      }
    }

    //
    // Assign rows
    //
    for (const e of this.edges) {
      this.assign(e);
    }

    //
    // Layout y-coordinates
    //
    for (const r of this.rows) {
      r.setHeight();
    }

    this.rows[0].y = 0;

    let y = this.rows[0].height / 2 + this.yPadding;
    // let y = this.yPadding;
    // Even rows go one the baseline and below.
    for (let i = 1; i < this.rows.length; i += 2) {
      this.rows[i].y = y;
      y += this.rows[i].height / 2 + this.yPadding;
    }

    // Odd rows go above the baseline.
    y = -this.rows[0].height / 2 - this.yPadding;
    // y = -this.yPadding;
    for (let i = 2; i < this.rows.length; i += 2) {
      this.rows[i].y = y;
      y -= this.rows[i].height / 2 + this.yPadding;
    }

    for (const e of this.edges) {
      e.y = e.row.y;
    }

    // Upate the bounding box for the entire layout.
    this.boundingBox = this.edges.reduce<Partial<MinMax>>((acc, edge) => {
      const x1 = edge.x;
      const x2 = edge.x + edge.width;
      const y1 = edge.y - edge.textHeight/2;
      const y2 = edge.y + edge.textHeight/2;
      acc.x1 = ( acc.x1 === undefined || x1 < acc.x1 ) ? x1 : acc.x1;
      acc.x2 = ( acc.x2 === undefined || x2 > acc.x2 ) ? x2 : acc.x2;
      acc.y1 = ( acc.y1 === undefined || y1 < acc.y1 ) ? y1 : acc.y1;
      acc.y2 = ( acc.y2 === undefined || y2 > acc.y2 ) ? y2 : acc.y2;
      return acc;
    }, {}) as MinMax;

    console.log(this);
  }

  assign(e: Edge) {
    for (const r of this.rows) {
      if (r.tryAssign(e)) {
        return;
      }
    }
    const r = new Row(this.columns.length);
    this.rows.push(r);
    r.tryAssign(e);
  }
}

export function createLayout(world: ShortOrderWorld, text: string): Layout {
  const terms = world.lexer.lexicon.termModel.breakWords(text);

  const rawGraph: Graph = world.lexer.createGraph(text);

  // TODO: REVIEW: MAGIC NUMBER
  const coalescedGraph = coalesceGraph(world.lexer.tokenizer, rawGraph);
  const filteredGraph: Graph = filterGraph(coalescedGraph, 0.35);
  // 0.35 is the score cutoff for the filtered graph.

  const edges: Edge[] = [];
  for (const [i, term] of terms.entries()) {
    edges.push(new Edge(i, i + 1, term, "score=0", EdgeTreatment.WORD));
  }
  for (const [i, edgeList] of filteredGraph.edgeLists.entries()) {
      for (const edge of edgeList) {
        const description = tokenToString(edge.token);
        const title = 'score=' + edge.score.toFixed(2);
        if (description !== '[UNKNOWNTOKEN]') {
          edges.push(new Edge(i, i + edge.length, description, title, EdgeTreatment.TOKEN));
        }
      }
  }
  return new Layout(coalescedGraph.edgeLists.length, edges);
}

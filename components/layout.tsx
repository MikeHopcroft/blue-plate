import React from 'react';
// import * as tf from 'token-flow';

export interface Column {
  x1: number;
  x2: number;
  in: Edge[];
  out: Edge[];
}

export class Layout {
  xPadding = 20;
  yPadding = 30;

  edges: Edge[];
  columns: Column[] = [];

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
    console.log(this.edges);
    let y = 0;
    for (const [i,e] of this.edges.entries()) {
      // if (i < 5) {
      //   e.y = 0;
      // } else {
      //   e.y = (i - 4) * 100;
      // }
      if (e.text.startsWith('token')) {
        e.y = ++y * 100;
      } else {
        e.y = 0;
      }
      if (e.text==='token2') {
        e.y = -100;
      }
      console.log(`${i}: "${e.text}" y=${e.y}`);
    }

    //
    // Layout y-coordinates
    //
  }
}

export class Edge {
  startCol: number;
  endCol: number;
  text: string;

  length: number;
  control: React.RefObject<SVGTextElement>;

  textWidth: number;
  textHeight: number;

  width: number;
  height: number;

  x: number;
  y: number;

  constructor(startCol: number, endCol: number, text: string) {
    this.startCol = startCol;
    this.endCol = endCol;
    this.text = text;

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

export function createLayout(text: string): Layout {
  const words = text.split(/\s+/);
  while (words.length < 5) {
    words.push(`word${words.length + 1}`);
  }

  const edges: Edge[] = words.map((word,i) => new Edge(i, i+1, word));
  edges.push(new Edge(0, 1, 'token0a'));
  edges.push(new Edge(0, 2, 'token1xxxxxxxxxxyyyyyyyy'));
  edges.push(new Edge(1, 4, 'token2'));

  for (const [i,e] of edges.entries()) {
    console.log(`${i}: "${e.text}"`);
  }


  return new Layout(words.length, edges);
}

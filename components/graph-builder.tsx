import { AttributeInfo, Cart } from 'prix-fixe';

import {
  ShortOrderWorld,
  Span,
  subgraphFromItems,
  ILexicalAnalyzer
} from 'short-order';

import {
  allPaths,
  coalesceGraph,
  Edge as TFEdge,
  filterGraph,
  Graph,
  maximalPaths
} from 'token-flow';

import { formatToken, TokenFormat } from './edge-controls';
import { Edge, EdgeTreatment, Layout } from './layout';

export class GraphBuilder {
  private readonly attributeInfo: AttributeInfo;
  private readonly lexer: ILexicalAnalyzer;
  private readonly cart: Cart;

  private readonly filteredGraph: Graph;

  private readonly tfEdgeToEdge = new Map<TFEdge, Edge>();
  private readonly maximalPaths: Set<Edge>[];

  layout: Layout;

  constructor(
    world: ShortOrderWorld,
    text: string,
    cart: Cart
  ) {
    this.attributeInfo = world.attributeInfo;
    this.lexer = world.lexer;
    this.cart = cart;

    const terms = world.lexer.lexicon.termModel.breakWords(text);
    const rawGraph: Graph = world.lexer.createGraph(text);
    const coalescedGraph = coalesceGraph(world.lexer.tokenizer, rawGraph);
  
    // TODO: REVIEW: MAGIC NUMBER
    // Magic number: 0.35 is the score cutoff for the filtered graph.
    const scoreThreshold = 0.35;
    this.filteredGraph = filterGraph(coalescedGraph, scoreThreshold);

    const tfPaths = [
      ...maximalPaths(this.filteredGraph.edgeLists)
    ].map(x => new Set(x));
  
    const edges: Edge[] = [];
  
    for (const [i, edgeList] of this.filteredGraph.edgeLists.entries()) {
      for (const edge of edgeList) {
        const info = formatToken(edge.token, edge.score);
        if (info.type === 'UNKNOWNTOKEN' && edge.score === 0 && edge.length === 1) {
          const info: TokenFormat = {
            type: 'WORD: ',
            name: terms[i],
            info: '',
            score: 0
          }
          const e = new Edge(i, i + 1, info, EdgeTreatment.WORD);
          this.tfEdgeToEdge.set(edge, e);
          edges.push(e);
        } else {
          const e = new Edge(i, i + edge.length, info, EdgeTreatment.TOKEN);
          this.tfEdgeToEdge.set(edge, e);
          edges.push(e);
        }
      }
    }
  
    // console.log(tfEdgeToEdge);
    this.maximalPaths = tfPaths.map(path => 
      new Set([...path.values()].map(e => this.tfEdgeToEdge.get(e)))
    );

    this.layout = new Layout(
      coalescedGraph.edgeLists.length,
      edges);
    this.layout.setPathList(this.maximalPaths);
  }

  setSpan(span?: Span) {
    if (span) {
      const attributes = this.attributeInfo;
      const lexer = this.lexer;
      const subgraph = subgraphFromItems(
        attributes,
        lexer,
        this.cart,
        this.filteredGraph,
        span,
        true
      );
    
      const tfSubgraphPaths = [
        ...allPaths(subgraph.edgeLists)
      ].map(x => new Set(x));
      // console.log('tfSubgraphPaths:');
      // for (const [i, p] of tfSubgraphPaths.entries()) {
      //   console.log(`  ${i}: size=${p.size}`);
      //   console.log(p);
      // }
      const subgraphPaths: Set<Edge>[] = tfSubgraphPaths.map(path => 
        new Set([...path.values()].map(e => this.tfEdgeToEdge.get(e)))
      );
      this.layout.setPathList(subgraphPaths);
      // console.log('========================');
      // for (const [i, p] of subgraphPaths.entries()) {
      //   console.log(`  ${i}: size=${p.size}`);
      //   console.log(p);
      // }
    } else {
      this.layout.setPathList(this.maximalPaths);
    }
  }
}

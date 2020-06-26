import React from 'react';

import GraphControl from '../components/graph-control';

export default function Home() {
  return (
    <svg style={{ width: '100%', height: '100%' }}>
      <GraphControl edges={['hello there', 'world world', 'XX', 'MM']}/>
    </svg>
  );
}

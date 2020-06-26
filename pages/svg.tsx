import React from 'react';

import TestControl from '../components/test-control';
import { TestLayout } from '../components/test-control';


export default function Home() {
  return (
    <svg style={{ width: '100%', height: '100%' }}>
      <TestLayout nodes={['hello', 'world world', 'XX', 'MM']}/>
    </svg>
  );
    // <TestControl x={100} y={200} />
    // <div>helllo</div>
    // <Provider store={store}>
    //     <FrameControl/>
    // </Provider>
}

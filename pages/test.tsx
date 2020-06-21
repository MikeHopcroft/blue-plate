// import * as fs from 'fs';

import AppOld from '../components/app-old';

// export async function getStaticProps() {
//   const x = fs; // For tree shaking. https://github.com/vercel/next.js/issues/7755
//   // https://github.com/3rd-Eden/useragent/pull/117

//   console.log('getStaticProps()');
//   return {
//     props: {
//       x: 1,
//       y: 2,
//     }
//   }
// }

export default function Home() {
  // console.log(`propsxxx: ${JSON.stringify(p)}`);
  // console.log(`x:${x} y:${y}`);
  return (
    <div>
      hello2
      <AppOld/>
    </div>
  );
}


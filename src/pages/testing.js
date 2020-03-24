import React, { useState } from 'react';
import Child from './testing/child';

const Testing = () => {
  const [count, setCount] = useState(0);

  console.log('rerender');
  console.log(count, 'count');

  const a = {a: 'a'};
  const b = a;
  const c = count <= 2 ? a : b;

  const z = 'a';

  return (
    <div>
      <Child ok="test" />
      <button onClick={() => setCount(count + 1)}>Test</button>
    </div>
  )
};

export default Testing;
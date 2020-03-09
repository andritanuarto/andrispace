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
      <Child ok={a} />
      <button onClick={() => setCount(count + 1)}>Testing</button>
    </div>
  )
};

export default Testing;
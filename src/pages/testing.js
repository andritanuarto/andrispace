import React, { useState } from 'react';
import Child from './testing/child';

const Testing = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Child ok="test" />
      <button onClick={() => setCount(count + 1)}>Test</button>
    </div>
  )
};

export default Testing;
import React, { useState } from 'react';
import Counter from './components/Counter';
import Display from './components/Display';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>React Debugging Example</h1>
      <Counter increment={increment} />
      <Display count={count} />
    </div>
  );
};
export default App;
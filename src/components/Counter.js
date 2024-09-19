import React from 'react';

const Counter = ({ increment }) => {
  return (
    <button onClick={increment}>Increment</button>
  );
};

export default Counter;
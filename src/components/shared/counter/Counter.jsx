import React, { useState } from 'react';

const Counter = () => {
  const [result, setResult] = useState(0);

  const changeResult = (delta: number) => {
    setResult(prev => prev + delta);
  };

  return (
    <div>
      <button onClick={() => changeResult(1)}>Add</button>
      <div id='role'>{result}</div>
      <button id='reset' onClick={() => changeResult(0)}>
        Reset
      </button>
      <button onClick={() => changeResult(-1)}>Remove</button>
    </div>
  );
};

export default Counter;

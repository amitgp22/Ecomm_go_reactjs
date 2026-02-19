import React, { useState, useMemo } from 'react';

function ReactMemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // This simulates an expensive function
  const expensiveCalculation = (num) => {
    console.log('Calculating...');
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += num;
    }
    return result;
  };

  // useMemo caches the result so the calculation only runs when 'count' changes
  const calculatedValue = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <h1>useMemo Example</h1>
      <p>Expensive Calculation Result: {calculatedValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment {count}</button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />
    </div>
  );
}

export default ReactMemo;
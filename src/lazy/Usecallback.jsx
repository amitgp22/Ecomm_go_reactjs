import React, { useState, useMemo } from "react";


 

function Usecallback() {
  const [count, setCount] = useState(0);

 const expensiveCalculation = useMemo(() => {
    console.log("Calculating...");
    // Simulate an expensive calculation
    for (let i = 0; i < 1000000000; i++) {}
    return count * 2;
  }, [count]);

  return (
    <div>
      {expensiveCalculation}
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
      {count}
    </div>
  );
}
export default Usecallback
import { useState } from "react";

export function ClosureIssue() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setTimeout(() => {
      console.log(count);
    }, 2000);
  }

  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={handleClick}>Log Count</button>
    </>
  );
}

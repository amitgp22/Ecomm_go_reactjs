import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment,incrementbyamount } from "./Store/CounterSlice";

export default function Amit() {
  const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

  console.log({count});
  return (
    <div>
      <h2>counter:{count}</h2>
     

      <button onClick={() => dispatch(increment())}>
        Increment
      </button>

      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button>

      <button onClick={() => dispatch(incrementbyamount(5))}>
        Increment by 5
      </button>
    </div>
  );
}

import { useSelector, useDispatch } from "react-redux";

function Counter() {
  const count = useSelector(state => state.count);
  console.log({ count });
  const dispatch = useDispatch();

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        +{count}
      </button>
    </>
  );
}

export default Counter;

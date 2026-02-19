import React, { use } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { increment } from './CounterSlice';

export default function Actiondis() {
    const dispatch = useDispatch();
    const data=useSelector((state) => state.countery.value);
    console.log({data})
    

  return (
    <div>
         <h1>Actiondis</h1>
        <p>{data}</p>
        <button onClick={() => dispatch(increment())}>Dispatch Action</button>

    </div>
  )
}

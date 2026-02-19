import React, { useState } from 'react'

export default function Coding_interview() {
    const[counter,setcounter]=useState(0)
  return (
    <>
      <button onClick={()=>{setcounter(counter+1)}}>{counter}</button>
      <button onClick={()=>{setcounter(0)}}>reset</button>

    </>
  )
}

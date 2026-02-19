import React, { useState } from 'react'

export default function Coding_interview3() {
    const[count,setcount]=useState(0)
    const[running,setrunning]=useState(false)




function togglehandle(){
  console.log('l')
}
    
  return (
    <div>
        <button onClick={togglehandle}>
            {running?'pause':'start'}
        </button>
        <p>jhkbjhkgvjhvkjhvjhv</p>
    </div>
  )
}

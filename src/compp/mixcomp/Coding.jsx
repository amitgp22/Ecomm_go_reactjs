import React, { useEffect, useState } from 'react'

export default function Coding() {
    const[count,setcount]=useState(0)
    const[running,setrunning]=useState(false)

  


  useEffect(()=>{
      if(running){
  const interval=setInterval(()=>{
    setcount(pre=>pre+1)
  },1000) 
    return ()=>clearInterval(interval)
}  

  },[running])


function togglehandle(){
  console.log('l')
  setrunning(pre=>!pre)
}
    
  return (
    <div>
        {count}
        <button onClick={togglehandle}>
            {running?'pause':'start'}
        </button>
    </div>
  )
}

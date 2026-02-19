import React, { useEffect, useState } from 'react'

export default function Coding_interview2() {
    const[time,setime]=useState(0)
   useEffect(()=>{
      const inter=setInterval(()=>{
        setime(pre=>pre+1)
      },1000)
      return ()=>clearInterval(inter)
    },[])
  return (
    <div>
   time is  {time}
    </div>
  )
}


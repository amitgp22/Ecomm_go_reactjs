import React, { useState } from 'react'

export default function () {
  const[ss,setss]=useState(0)

  const handle1=()=>{
    setss((prev)=>prev+1)
    console.log('childeen')
  }
  return (
    <div>
        Newcompoment bhai{ss}
    </div>
  )
}

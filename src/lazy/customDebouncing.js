import React, { useEffect } from 'react'

export default function customDebouncing(value,delay) {
  const[debou,setbou]=React.useState("")
  useEffect(()=>{
    const handler=setTimeout(()=>{
      setbou(value)
      console.log("debou",value)
    },delay)
    return()=>{
      clearTimeout(handler)
    }
  },[value,delay])
  return(debou) 
}
  

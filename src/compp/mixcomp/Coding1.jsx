import React, { useEffect, useState } from 'react'

export default function Coding1() {
    const[user,setuser]=useState('')
    const[err,seterr]=useState(false)
    const[loading,setloading]=(false)
const fetch=async()=>{
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const res1=await res.json()
}

    useEffect(()=>{
        fetch();
    })
  return (
    <div>
        
    </div>
  )
}

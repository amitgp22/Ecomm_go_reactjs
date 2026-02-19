import React, { useEffect, useState } from 'react'

export default function Search() {
const[search,setsearch]=useState('')
const[userdata,setdata]=useState([])
const[deboun,setdobun]=useState('')

useEffect(()=>{
  const fetchdata=async()=>{
     const data=await fetch('https://jsonplaceholder.typicode.com/users')
     const res=await data.json();
     console.log(res)
     setdata(res)
  }
  fetchdata()
},[])

useEffect(()=>{
 const timer= setTimeout(() => {
    console.log(search)
    setdobun(search)
 
  }, 500);
     return ()=>clearInterval(timer)
},[search])

const filterdata=userdata.filter((item)=>{
  return item.name.toLowerCase().includes(deboun.toLowerCase())
})

  return (
    <div>
      <input type="text" placeholder='Search...' 
      value={search}
      onChange={(e)=>setsearch(e.target.value)}/>

     {filterdata.map((item)=>
      <ul key={item.id}>
        {item.name}
      </ul>
     )}
    </div>
  )
}

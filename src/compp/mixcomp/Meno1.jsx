import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Count from './Count'
import TableauDashboard from './tablue'
import { useSelector } from 'react-redux';
export default function Meno1() {
    const datareduxqwwwwwwwwwwwww=useSelector(state=>state.count);
   console.log({datareduxqwwwwwwwwwwwww})
    const[c,setc]=useState(0)
    const hadnle=()=>{
      setc((prev)=>prev+1)
   console.log('parnwt')
    }
  return (
    <>
    <div>Meno1{c}</div>
    <button onClick={hadnle}>clcick</button>
    <Count/>
    <TableauDashboard />
    </>
    
  )
}

import React, { useEffect } from 'react'
import {getdata} from './AxiosInstance'

export default function Api() {
    useEffect(async()=>{
         const res=await getdata()
         console.log(res)
    },[])
  return (
    <div>Api</div>
  )
}

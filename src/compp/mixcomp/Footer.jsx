import React, { useEffect } from 'react'
import { getdata2 } from './AxiosInstance'

export default function Footer() {
  useEffect(async()=>{
    const res=await getdata2()
    console.log(res)
  })
  return (
    <div>Footer</div>
  )
}

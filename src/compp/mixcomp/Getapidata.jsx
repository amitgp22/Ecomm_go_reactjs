import React from 'react'

export const  Getapidata = async ()=> {

 try {
    const res=await fetch('https://dummyjson.com/products')
   const data=res.json()
   return data
 } catch (error) {
    console.log(error)
 }
}

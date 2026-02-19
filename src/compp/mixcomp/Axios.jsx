import React, { useEffect } from 'react'
import axios from "axios"

export default function Axios() {

    // useEffect(async () =>{
    //     const result=await axios.get("https://jsonplaceholder.typicode.com/posts")
    //     console.log(result)
    // })

    useEffect(()=>{

        const fetchdata=async()=>{
         try {
            const result=await axios.get("https://jsonplaceholder.typicode.com/posts")
            console.log(result)
        } catch (err) {
            console.log(err)
        }
        }
        fetchdata()
    },[])

  return (
    <>
    Axios

    </>
  )
}

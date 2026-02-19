import React, { useEffect, useState } from 'react'

export default function Pagzination() {
    const[data,setdata]=useState([])
    const[currentPage,setCurrentPage]=useState(1)
    const[error,seterror]=useState(false)

    const itemsPerPage=10;
    const totalPages=10;

const fetchuser=async()=>{
    try {
        const res=await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${itemsPerPage}`)
        const res1=await res.json()
        console.log(res1)
        setdata(res1)
        
    } catch (error) {
        seterror(error)
    }
   
}

   useEffect(()=>{
    fetchuser();
   },[currentPage])
  return (
    <div>

        {error && <p>Loading...</p>}
      {  data.map((item)=>
        <li key={item.id}>{item.title}</li>
      )}

    const[currentPage,setCurrentPage]=useState(1)
      <button onClick={() => setCurrentPage(prev => prev - 1)} disabled={currentPage==1}>Prev</button>
       <span style={{ margin: "0 10px" }}>
          Page {currentPage} of {totalPages}
        </span>
      <button onClick={() => setCurrentPage(prev => prev + 1)} disabled={currentPage==10}>Next</button>

    </div>
  )
}

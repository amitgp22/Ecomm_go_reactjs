import React from 'react'
import { useSelector } from 'react-redux'
import { Link ,NavLink} from "react-router-dom";


export default function Home() {
  // const useit=useSelector((state)=>state.counter.value)
  return (
    <div>
      <h1>Home</h1>
      {/* <h1>{useit}</h1> */}
<NavLink
  to="/Movie"
  style={({ isActive }) => ({
    color: isActive ? "red" : "black",
    fontWeight: isActive ? "bold" : "normal",
  })}
>
  Movie
</NavLink>
    </div>
    
  )
}

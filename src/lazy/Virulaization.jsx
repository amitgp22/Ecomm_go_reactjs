import React, { useRef } from "react";
import Ref from "./Ref";

function Virulaization() {
  // const inputRef = useRef(null);
  // const inputref2=useRef(null)  
  const focusinput=(ref)=>{
    ref.current?.focus()
     
  }

  const username=useRef(null)
  const email=useRef(null)
  console.log(username)
  function handleSubmit(event) {
    event.preventDefault();
    // const username=document.getElementById("username");
    // const email=document.getElementById("email");
    console.log(username.current.value);
    console.log(email.current.value);
    console.log("Form submitted");
  } 

  return (
    <form action="handleSubmit">
   <div style={{ padding: "200px", display: "flex", justifyContent: "center", alignItems: "flex-end", gap: "19px" }}>
      <input  type="text"  id="username" ref={username}/>
      <button onClick={()=>focusinput(inputRef)}>Focus Input</button>
      <input type="text"  id="email" ref={email}/>
      {/* <button onClick={()=>focusinput(inputref2)}>Focus Input</button> */}
      <button onClick={handleSubmit}>Submit</button>
      {/* <Ref/> */}
    </div>
    </form>
 
  );
}

export { Virulaization };
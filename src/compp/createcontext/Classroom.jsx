import React from 'react'
import mycontext from './CreateContext';

export default function Classroom() {
    const classroom1=React.useContext(mycontext);
    console.log({classroom1});
  return (
    <div>Classroom</div>
  )
}

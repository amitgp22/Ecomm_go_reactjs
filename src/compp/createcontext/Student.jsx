import React from 'react'
import mycontext from './CreateContext';

export default function Student() {
    const student=React.useContext(mycontext);
    console.log({student});
  return (
    <div>Student</div>
  )
}

import React, {  } from 'react'
import { useSelector } from 'react-redux';
import mycontext from './CreateContext'
import School from './School';
import Navbar from '../Navbar';
import About from '../../lazy/About';
import App from '../../lazy/App';

export default function App1() {
   const data='tomorrrow is holiday';
   const dataredux=useSelector(state=>state.count);
   console.log({dataredux})
  return (
    <div>
        <mycontext.Provider value={data}>
        <School />
        <Navbar />
        <About />
       
        </mycontext.Provider>
         <App/>
    </div>
  )
}

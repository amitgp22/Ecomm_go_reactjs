import {useState} from 'react'
import User from './User'
import Api from './Api'

export default function Ass() {
    const[data, setData] = useState('')
    const handleChange = (event) => {
        console.log(event.target.value)
        setData(event.target.value)
    }
  return (
    <div>
        <input type="text" value={data} placeholder='Enter asset name' onChange={handleChange}/>
        <button>button</button>
        <User name='amit1'/>
        <Api/>
    </div>
  )
}

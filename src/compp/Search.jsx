import React, { useEffect, useState } from 'react'
import { Data } from './Data'

export default function App() {
  const [data] = useState(Data)
  const [input, setInput] = useState('')
  const [debouncedInput, setDebouncedInput] = useState('')

  const handle = (e) => {
    console.log(e.target.value)
    setInput(e.target.value)
    
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedInput(input)
    }, 3000)

    return () => clearTimeout(timer)
  }, [input])

  const filterout = data.filter(item =>
    item.name.toLowerCase().includes(debouncedInput.toLowerCase())
  )

  return (
    <>
      <h2>List of Data</h2>

      {filterout.map(item => (
        <ul key={item.id}>
          <li>{item.name}</li>
        </ul>
      ))}

      <input
        type="text"
        placeholder="search"
        onChange={handle}
      />
    </>
  )
}

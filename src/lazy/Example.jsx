import React, { useState, useMemo } from 'react'

export default function Example() {
  const [count, setcount] = useState(0)
  const [input, setinput] = useState(2)

  function handle() {
    setcount(prev => prev + 1)
  }

  function expensive(input) {
    console.log('inside')
    for (let i = 0; i < 100000000000; i++) {}
    return input * 2
  }

  const expens = useMemo(() => expensive(input), [input])

  return (
    <>
      <button onClick={handle}>button</button>
      <br />
      Count: {count}
      <br />

      <input
        type='number'
        onChange={(e) => setinput(Number(e.target.value))}
        value={input}
      />

      <br />
      Result: {expens}
    </>
  )
}
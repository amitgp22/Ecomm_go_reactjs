import React, { useState } from 'react'

export default function Todo1() {
  const [takedata, settakedata] = useState('')
  const [data, setdata] = useState([])
  const [editIndex, setEditIndex] = useState(null)

  function handleAdd(e) {
    e.preventDefault()

    if (editIndex !== null) {
      // update existing item
      const updatedData = [...data]
      updatedData[editIndex] = takedata
      setdata(updatedData)
      setEditIndex(null)
    } else {
      // add new item
      setdata([...data, takedata])
    }

    settakedata('')
  }

  function handleEdit(index) {
    settakedata(data[index]) // put item in input
    setEditIndex(index)
  }
  function handledelete(index) {
  const updatedData = data.filter((_, i) => i !== index);
  setdata(updatedData);
}

  return (
    <div className="todo-container">
      <h2>To-Do List</h2>

      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Add a new task"
          value={takedata}
          onChange={(e) => settakedata(e.target.value)}
        />
        <button type="submit">
          {editIndex !== null ? 'Update' : 'Add'}
        </button>
      </form>

      <ul className="todo-list">
        {data.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={()=>handledelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

import React from 'react'

export default function Api() {
    const [data, setData] = React.useState('')
    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setData(json))
    }, [])  
  return (
    <div>
       <ul>
        {data && data.map((item) => (
            <li key={item.id}>{item.title}</li>
        ))} 
       </ul>
    </div>
  )
}

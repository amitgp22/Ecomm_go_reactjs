import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetuser } from "./Store/userSlice";


export default function Apiresponse() {
const dispatch = useDispatch();
  const {users,loading,error} = useSelector(
    (state) => state.users
  );
  
  console.log({users})
  useEffect(()=>{
    dispatch(fetuser())
  },[dispatch])

  if (loading) return <p>Loading...</p>;
if (error) return <p>{error}</p>;

return (
  <ul>
    {users.map((user) => (
      <li key={user.id}>{user.name}</li>
    ))}
  </ul>
)
}

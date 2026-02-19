import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetuser } from "./userSlice";

function Users() {
  const dispatch = useDispatch();

  // Get data from Redux store
  const { users, loading, error } = useSelector(
    (state) => state.users1
  );

  console.log({ users, loading, error });

  // Call API when component mounts
  useEffect(() => {
    dispatch(fetuser());
  }, [dispatch]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div>
      <h2>User List</h2>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Users;

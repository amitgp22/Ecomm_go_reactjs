import { useLoaderData, Link } from "react-router-dom";

export  function Movie() {
//   const users = useLoaderData();
// console.log({users})
  return (
    <>
      <h2>Users</h2>
      {/* <ul>
        {users.products.map((user) => (
          <li key={user.id}>{user.title}</li>
        ))}
      </ul> */}

      <Link to="/">Go Home</Link>
    </>
  );
}

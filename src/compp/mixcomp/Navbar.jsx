import { useContext } from "react";
import { Link } from "react-router-dom";
import mycontext from "./createcontext/CreateContext";

function Navbar() {
  const Nav1=useContext(mycontext);
  console.log({Nav1})
  return (
    // <nav>
    //   <Link to="/">Home</Link> |<Link to="/dashboard">Dashboard</Link>
    // </nav>
    <p>njnjbjb</p>
  );
}

export default Navbar;

import { useContext } from "react";
import Classroom from "./Classroom";
import mycontext from "./CreateContext";
import { useSelector } from "react-redux";

function School() {
    const dataa=useContext(mycontext)
      const dataredux123=useSelector(state=>state.count);
   console.log({dataredux123})
    console.log({dataa})
  return <Classroom />;
}

export default School;

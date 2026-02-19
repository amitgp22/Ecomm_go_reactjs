import { useMatch } from "react-router-dom";

function CheckRoute() {
  const match = useMatch("/dashboard");

  return <p>Is Dashboard: {match ? "Yes" : "No"}</p>;
}

export default CheckRoute;

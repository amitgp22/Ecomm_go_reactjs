import { useNavigate, useLocation } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location)

  const handleLogin = () => {
    navigate("/dashboard", {
      state: { user: "Amit" },
   
    });
  };

  return (
    <>
      <h2>Login Page</h2>
      <p>Current path: {location.pathname}</p>
      <button onClick={handleLogin}>Login</button>
    </>
  );
}

export default Login;

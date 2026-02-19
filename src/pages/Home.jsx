import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Home</h1>
      <button onClick={() => navigate("/login")}>
        Go to Login
      </button>
    </>
  );
}

export default Home;

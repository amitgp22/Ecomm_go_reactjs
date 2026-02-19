import { useAuth } from "./useAuth";
const Dashboard = () => {
  const { user, login, logout, isAuthenticated } = useAuth();

  return (
    <div>
      {isAuthenticated ? (
        <>
          <p>Welcome {user.name}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={() => login({ name: "Amit" })}>
          Login
        </button>
      )}
    </div>
  );
};
export default Dashboard;
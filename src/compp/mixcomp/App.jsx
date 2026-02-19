import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import UserDetails from "./pages/UserDetails";
import NotFound from "./pages/NotFound";
import Profile1 from "./pages/Profile1";
import Profile2 from "./pages/Profile2";
import App1 from "./compp/createcontext/App1";
import Counter from "./compp/Redux/Counter";

function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<Home />} />
    //   <Route path="/login" element={<Login />} />

    //   <Route path="/dashboard" element={<Dashboard />}>
    //  <Route index element={<Profile />} />
    //     <Route path="profile1" element={<Profile1 />} />
    //     <Route path="profile2" element={<Profile2 />} />
    //   </Route>

    //   <Route path="/user/:id" element={<UserDetails />} />
    //   <Route path="*" element={<NotFound />} />
    // </Routes>
    <div>
      <App1 />
      <Counter />
    </div>
  );
}

export default App;

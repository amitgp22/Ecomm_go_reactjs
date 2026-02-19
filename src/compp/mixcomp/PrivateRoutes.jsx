import { Navigate } from "react-router-dom";


const isAuth = true; // simulate auth


const PrivateRoutes = ({ children }) => {
return isAuth ? children : <Navigate to="/login"  />;
};


export default PrivateRoutes;
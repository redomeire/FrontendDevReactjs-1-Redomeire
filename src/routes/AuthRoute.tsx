import { Navigate, Outlet } from "react-router-dom";

const AuthRoute = () => {
    if(localStorage.getItem("token"))
        return <Navigate to="/"/>
    
    return <Outlet />
}
 
export default AuthRoute;

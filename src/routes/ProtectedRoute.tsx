import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    if(localStorage.getItem("token"))
        return <Outlet />
    
    return <Navigate to="/login"/>
}
 
export default ProtectedRoute;

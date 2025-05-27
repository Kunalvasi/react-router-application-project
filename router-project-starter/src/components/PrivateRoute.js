import { Navigate } from "react-router-dom";

function PrivateRoute({isLoggedin,children}){
    if(isLoggedin){
        return children;
    }
    else{
        return <Navigate to="/login"/>
    }
}
export default PrivateRoute;
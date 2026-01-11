import { Navigate } from "react-router";

const ProtectedRoute = ({children}) => {
    const isAuthenticated = true; 

    if(!isAuthenticated){
        return <Navigate to = "/login" replace />
    }
    return children;
}

export default ProtectedRoute;
// import { useContext } from "react"
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
// import { AuthContext } from "../auth/authContext"


export const PrivateRoute = ({ children }) => {

    // const { user } = useContext(AuthContext);
    // const { pathname, search } = useLocation();
    const auth = useSelector( state => state.auth )
    // localStorage.setItem('lastPath', pathname + search )
    // console.log(selector)

    return auth.uid 
        ? children
        : <Navigate to='/auth/login' />

}

// import { useContext } from "react"
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
// import { AuthContext } from "../auth/authContext"


export const PublicRoute = ({children}) => {

    // const { user } = useContext(AuthContext);
    // const { pathname, search } = useLocation();

    // localStorage.setItem('lastPath', pathname + search )

    const auth = useSelector( state => state.auth );

    return !auth.uid
        ? children
        : <Navigate to='/' />

}

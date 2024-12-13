import { useContext } from "react";
import AuthContext from "../ContextProvider/AuthContext";
import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if(loading){
        return <span className="loading loading-spinner text-error"></span>
    }
    if(user){
        return children
    }
    return <Navigate to='/signin' state={location?.pathname}></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.object
}
export default PrivateRoute;
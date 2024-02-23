
import PropTypes from 'prop-types';
import { ReactElement, useContext } from "react"
import { AuthContext } from "../auth"
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({children}: {children: ReactElement | ReactElement[]}) => {

    const { logged } = useContext(AuthContext);
    const {pathname, search} = useLocation();

    const lastPath = pathname + search;
    localStorage.setItem('laspath', lastPath);

    return (logged)
    ? children
    : <Navigate to="/login" />
}

PrivateRoute.propTypes = {
    children: PropTypes.any.isRequired
}
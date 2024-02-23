import PropTypes from 'prop-types';
import { ReactElement, useContext } from "react";
import { AuthContext } from "../auth";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({children}: {children: ReactElement | ReactElement[]}) => {

    const { logged } = useContext(AuthContext);

    return (!logged)
    ? children
    : <Navigate to="/dashboard" />
}

PublicRoute.propTypes = {
    children: PropTypes.any.isRequired
}
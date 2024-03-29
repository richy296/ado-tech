/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { AuthContext } from "./AuthContext"
import { ReactElement, useReducer } from 'react';
import { authReducer } from './authReducer';
import { types } from '../types/types';

const initialState = {
    logged: false
}

const init = () => {
  const user = JSON.parse(localStorage.getItem('user')!);
  return {
    logged: !!user,
    user
  }
}

export const AuthProvider = ({children}: {children: ReactElement | ReactElement[]}) => {

  const [authState, dispatch] = useReducer(authReducer, initialState, init);

  const login = (name = '') => {

    const user = {
      id: 'ABC',
      name
    };

    const action = {
      type: types.login,
      payload: user
    }

    localStorage.setItem('user', JSON.stringify(user));

    dispatch(action)
    return name;
  }

  const logout = () => {

    localStorage.removeItem('user');

    const action = {
      type: types.logout
    }
    
    dispatch(action)
  }

  return (
    <AuthContext.Provider value={{
      ...authState,
      login,
      logout,
      user: {
        name: 'Richard Rojas'
      }
    }}>
        {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
    children: PropTypes.any.isRequired
}

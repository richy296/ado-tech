import { createContext } from 'react';


export const AuthContext = createContext({
    login: (name?: string) => name,
    logged: false,
    logout: () => {},
    user: {
        name: ''
    }
});
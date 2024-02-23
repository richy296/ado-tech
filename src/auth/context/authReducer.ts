import { types } from "../types/types";

const initialState = {
    logged: false
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const authReducer = (state = initialState, action: any ) => {
    switch(action.type) {
        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload
            };

        case types.logout:
            return {
                logged: false
            };

        default:
            return state;
    }
}

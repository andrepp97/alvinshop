import React, { useReducer, createContext } from 'react';

export const AuthContext = createContext();

const AuthReducer = (props) => {
    // INITIAL STATE
    const initialState = {
        id: 0,
        userName: "",
        userRole: "",
        userToken: null,
        isLoading: true,
    }

    // USER REDUCER
    const userReducer = (prevState, action) => {
        switch (action.type) {
            case "LOGIN":
                return {
                    ...prevState,
                    id: action.id,
                    userName: action.username,
                    userRole: action.role,
                    userToken: action.token,
                    isLoading: false,
                }
            case "LOGOUT":
                return {...initialState, isLoading: false}
            case "LOADING_TRUE":
                return {...prevState, isLoading: true}
            case "LOADING_FALSE":
                return {...prevState, isLoading: false}
            default:
                return prevState
        }
    }

    // USER STATE FOR GLOBAL USAGE
    const [userState, dispatch] = useReducer(userReducer, initialState)

    // RENDER
    return (
        <AuthContext.Provider value={{userState, dispatch}}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthReducer;
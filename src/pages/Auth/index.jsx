import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { MDBInput } from 'mdbreact';
import './auth.css';

import { AuthContext } from '../../context/AuthContext';

const Auth = () => {
    // CONTEXT
    const { userState, dispatch } = useContext(AuthContext)

    // STATE
    const [loading, setLoading] = useState(false)
    const [state, setState] = useState({
        username: "",
        password: "",
    })

    // LOGIN FUNCTION
    const onUserLogin = () => {
        if (state.username === "sysadmin" && state.password === "admin") {
            setLoading(true)
            let userToken = "jjK02.p9swQ880"
            localStorage.setItem("@alvinshop", userToken)
            setTimeout(() => {
                dispatch({
                    type: "LOGIN",
                    id: 1,
                    username: "Alvinshop",
                    role: "sysadmin",
                    token: userToken,
                })
            }, 1000)
        } else {
            alert("Unauthorized")
        }
    }

    // LOGIN WHEN KEYUP
    const onLoginKeyup = event => {
        if (event.key === "Enter") {
            onUserLogin()
        }
    }

    // RENDER
    return userState.userToken
    ? <Redirect to="/dashboard" />
    : (
        <div className="auth-container">
            <div className="auth-card shadow">
                <div className="card-body">
                    <div className="card-title">
                        LOGO
                    </div>
                    <hr/>
                    <MDBInput
                        outline
                        icon="user"
                        label="Username"
                        value={state.username}
                        onChange={e => setState({...state, username: e.target.value})}
                    />
                    <MDBInput
                        outline
                        icon="lock"
                        type="password"
                        label="Password"
                        value={state.password}
                        onKeyUp={onLoginKeyup}
                        onChange={e => setState({...state, password: e.target.value})}
                    />
                    <button
                        disabled={loading}
                        onClick={onUserLogin}
                        className="btn btn-block btn-elegant py-2"
                    >
                        {loading ? "Login . . ." : "Login"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Auth;
import React, { useContext, useEffect } from 'react';
import { AuthContext } from './context/AuthContext';
import { setClientToken } from './api/APIRequest';

// COMPONENTS
import Router from './Routes/Router';
import Navbar from './components/Header';
import Sidebar from './components/Sidebar';
import LoadingScreen from './components/LoadingScreen';

const prefix = "@alvinshop/admin";

const App = () => {
  // CONTEXT
  const { userState, dispatch } = useContext(AuthContext)

  // LIFECYCLE
  useEffect(() => {
    const restoreToken = () => {
      let userToken = JSON.parse(localStorage.getItem(prefix))
      if (userToken) {
        setClientToken(userToken)
        dispatch({
          type: "LOGIN",
          id: userToken.id,
          role: userToken.role,
          token: userToken.token,
          username: userToken.username,
        })
      } else {
        console.log('Unauthorized')
        dispatch({
          type: "LOGOUT"
        })
      }
    }

    restoreToken()
  }, [dispatch])

  // RENDER
  return userState.isLoading
  ? <LoadingScreen />
  : (
    <div>
        { userState.userToken ? <Navbar /> : null}
        
        { userState.userToken ? <Sidebar /> : null}

        <main id="main-content" className={userState.userToken ? "content-shift" : null}>
          <Router />
        </main>
    </div>
  );
};


export default App;
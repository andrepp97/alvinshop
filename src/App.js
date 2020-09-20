import React, { useContext, useEffect } from 'react';
import { AuthContext } from './context/AuthContext';

// COMPONENTS
import Router from './Routes/Router';
import Navbar from './components/Header';
import Sidebar from './components/Sidebar';
import LoadingScreen from './components/LoadingScreen';

const App = () => {
  // CONTEXT
  const { userState, dispatch } = useContext(AuthContext)

  // LIFECYCLE
  useEffect(() => {
    const restoreToken = () => {
      let userToken = localStorage.getItem("@alvinshop")
      setTimeout(() => {
        dispatch({
          type: "LOGIN",
          id: 1,
          username: "Alvinshop",
          role: "sysadmin",
          token: userToken,
        })
      }, 1000)
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
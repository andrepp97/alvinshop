import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// COMPONENTS
import Navbar from './components/Header';
import Sidebar from './components/Sidebar';

// PAGES
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Category from './pages/Category';
import Orders from './pages/Orders';
import Banners from './pages/Banners';


class App extends Component {
  state = {
    currentURL: ''
  }

  // LIFECYCLE
  componentDidMount() {
    let url = window.location.pathname
    this.setState({ currentURL: url })
  }

  // MAIN RENDER
  render() {
    // Destructure
    const { currentURL } = this.state

    return (
      <>
        { currentURL === '/' ? null : <Navbar /> }
        
        { currentURL === '/' ? null : <Sidebar /> }

        <div
          id="main-content"
          className="py-3 px-2"
          style={ currentURL === '/' ? null : { marginLeft:'225px', transition:'.25s' } }
        >

          <Switch>
            <Route exact path='/' component={Auth} />
            <Route exact path='/Dashboard' component={Dashboard} />
            <Route exact path='/Products' component={Products} />
            <Route exact path='/Category' component={Category} />
            <Route exact path='/Orders' component={Orders} />
            <Route exact path='/Banners' component={Banners} />
          </Switch>

        </div>
      </>
    );
  }
}

export default App;
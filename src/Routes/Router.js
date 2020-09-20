import React from 'react';
import PrivateRoute from './PrivateRoute';
import { Switch, Route } from 'react-router-dom';

// PAGES
import Auth from '../pages/Auth';
import Dashboard from '../pages/Dashboard';
import Products from '../pages/Products';
import Category from '../pages/Category';
import Orders from '../pages/Orders';
import Banners from '../pages/Banners';

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Auth} />
            <PrivateRoute exact path='/Dashboard' component={Dashboard} />
            <PrivateRoute exact path='/Products' component={Products} />
            <PrivateRoute exact path='/Category' component={Category} />
            <PrivateRoute exact path='/Orders' component={Orders} />
            <PrivateRoute exact path='/Banners' component={Banners} />
        </Switch>
    );
};

export default Router;
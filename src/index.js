import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// APP
import App from './App';
import './assets/styles/Global.css';
import AuthReducer from './context/AuthContext';

// MDBREACT
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

ReactDOM.render(
    <BrowserRouter>
        <AuthReducer>
            <App />
        </AuthReducer>
    </BrowserRouter>,
    document.getElementById('root')
);

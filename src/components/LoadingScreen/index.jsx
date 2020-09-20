import React from 'react';
import Loader from '../../assets/img/loader.svg';

const LoadingScreen = () => {
    return (
        <div id="main-content" className="d-flex align-items-center justify-content-center">
            <div className="text-center">
                <img src={Loader} alt="Loading . . ."/>
                <p className="font-weight-bold opacity-80 mt-2">
                    Please Wait
                </p>
            </div>
        </div>
    );
};

export default LoadingScreen;
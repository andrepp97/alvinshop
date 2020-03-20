import React from 'react';
import { MDBAnimation, MDBContainer, MDBRow, MDBInput, MDBBtn } from 'mdbreact';

const Auth = () => {
    const onUserLogin = () => {
        window.location.pathname = '/Dashboard'
    }

    return (
        <div style={{ position: 'fixed', top: 0, bottom: 0, left: 0, right: 0, backgroundImage: 'linear-gradient(100deg,#0e7ec9,#8639a8)' }}>
            <MDBContainer>
                <MDBAnimation type="fadeIn">
                    <MDBRow className="d-flex align-items-center" style={{ minHeight: '90vh' }}>
                        <div className="col-lg-6 offset-lg-3">
                            <div className="card px-5 py-4">
                                <p className="h5 text-center mb-4">ADMIN AREA</p>
                                <div className="grey-text">
                                    <MDBInput outline label="Username" icon="user" type="email" />
                                    <MDBInput outline label="Password" icon="lock" type="password" />
                                </div>
                                <div className="text-center">
                                    <MDBBtn color="deep-purple" className="rounded-pill px-5" onClick={onUserLogin}>
                                        <span style={{ letterSpacing: '2px', fontWeight: 'bold' }}>Login</span>
                                    </MDBBtn>
                                </div>
                            </div>
                        </div>
                    </MDBRow>
                </MDBAnimation>
            </MDBContainer>
        </div>
    );
};

export default Auth;
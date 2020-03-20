import React, { Component } from "react";
import {
    MDBNavbar, MDBNavbarNav,
    MDBNavItem, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu,
    MDBDropdownItem, MDBIcon
} from "mdbreact";


class NavbarPage extends Component {
    // NAVBAR TOGGLE
    navClose = () => {
        document.getElementById('sidenav').style.marginLeft = '-225px'
        document.getElementById('topnav').style.marginLeft = 0
        document.getElementById('main-content').style.marginLeft = 0
        document.getElementById('toggleLeft').classList.add('d-none')
        document.getElementById('toggleRight').classList.remove('d-none')
    }

    navOpen = () => {
        document.getElementById('sidenav').style.marginLeft = 0
        document.getElementById('topnav').style.marginLeft = '225px'
        document.getElementById('main-content').style.marginLeft = '225px'
        document.getElementById('toggleLeft').classList.remove('d-none')
        document.getElementById('toggleRight').classList.add('d-none')
    }
    // NAVBAR TOGGLE

    // USER ACTIONS
    onUserLogout = () => {
        window.location.pathname = '/'
    }
    // USER ACTIONS

    // MAIN RENDER
    render() {
    return (
        <MDBNavbar 
            dark
            id="topnav"
            color="unique-color-dark"
            className="pr-5 py-1"
            style={{marginLeft:'225px', transition: '.25s'}}>

            <span id="toggleLeft" className="text-white" style={{cursor:'pointer'}} onClick={this.navClose}>
                <i className="fa fa-chevron-left"></i>
                <i className="fa fa-chevron-left"></i>
            </span>
            <span id="toggleRight" className="text-white d-none" style={{cursor:'pointer'}} onClick={this.navOpen}>
                <i className="fa fa-chevron-right"></i>
                <i className="fa fa-chevron-right"></i>
            </span>    

            <MDBNavbarNav right>
                <MDBNavItem>
                    <MDBDropdown>
                        <MDBDropdownToggle nav>
                            <MDBIcon icon="user-circle" size="lg" />
                        </MDBDropdownToggle>
                        <MDBDropdownMenu right>
                            <MDBDropdownItem onClick={this.onUserLogout}>
                                <MDBIcon icon="sign-out-alt" />
                                <span className="font-weight-bold ml-2">Logout</span>
                            </MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                </MDBNavItem>
            </MDBNavbarNav>

        </MDBNavbar>
        );
    }
    }

export default NavbarPage;
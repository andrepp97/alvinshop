import React, { useContext } from "react";
import {
    MDBNavbar, MDBNavbarNav,
    MDBNavItem, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu,
    MDBDropdownItem, MDBIcon
} from "mdbreact";
import { AuthContext } from '../../context/AuthContext';

const NavbarPage = () => {
    // CONTEXT
    const { dispatch } = useContext(AuthContext)

    // NAVBAR TOGGLE
    const navClose = () => {
        document.getElementById('sidenav').style.marginLeft = '-225px'
        document.getElementById('topnav').style.marginLeft = 0
        document.getElementById('main-content').style.marginLeft = 0
        document.getElementById('toggleLeft').classList.add('d-none')
        document.getElementById('toggleRight').classList.remove('d-none')
    }

    const navOpen = () => {
        document.getElementById('sidenav').style.marginLeft = 0
        document.getElementById('topnav').style.marginLeft = '225px'
        document.getElementById('main-content').style.marginLeft = '225px'
        document.getElementById('toggleLeft').classList.remove('d-none')
        document.getElementById('toggleRight').classList.add('d-none')
    }

    // LOGOUT FUNCTION
    const onUserLogout = () => {
        localStorage.removeItem("@alvinshop")
        navClose()
        dispatch({
            type: 'LOGOUT'
        })
    }

    // RENDER
    return (
        <MDBNavbar 
            dark
            id="topnav"
            color="unique-color-dark"
            className="pr-5 py-1"
            style={{marginLeft:'225px', transition: '.25s'}}>

            <span id="toggleLeft" className="text-white pointer-cursor" onClick={navClose}>
                <i className="fa fa-chevron-left"></i>
                <i className="fa fa-chevron-left"></i>
            </span>
            <span id="toggleRight" className="text-white d-none pointer-cursor" onClick={navOpen}>
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
                            <MDBDropdownItem onClick={onUserLogout}>
                                <MDBIcon icon="sign-out-alt" />
                                <span className="font-weight-bold ml-2">Logout</span>
                            </MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                </MDBNavItem>
            </MDBNavbarNav>

        </MDBNavbar>
    )
}

export default NavbarPage;
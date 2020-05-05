import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    MDBNavbarBrand, MDBIcon,
    MDBContainer, MDBListGroup, MDBListGroupItem
} from "mdbreact";
import './sidebar.css';

const sideMenu = [
    { label: 'Dashboard', url: '/Dashboard', icon: 'tachometer-alt' },
    { label: 'Products', url: '/Products', icon: 'gamepad' },
    { label: 'Category', url: '/Category', icon: 'th-list' },
    { label: 'Orders', url: '/Orders', icon: 'shopping-cart' },
    { label: 'Banners', url: '/Banners', icon: 'images' },
]

const Sidebar = (props) => {
    // HOOKS
    const [currentURL, setCurrentURL] = useState('')

    // RENDER MENU
    const renderMenu = () => {
        return sideMenu.map((item,idx) => {
            return (
                <Link to={item.url} key={idx} onClick={() => setCurrentURL(item.url)}>
                    <MDBListGroupItem
                        id="side-menu"
                        className="px-4 mb-3"
                        style={
                            currentURL === item.url
                            ? {background: '#2952a5', color: '#fff', fontWeight: 'bold', borderRadius: '50px'}
                            : {}
                        }
                    >
                        <MDBIcon icon={item.icon} className="mr-3" />
                        {item.label}
                    </MDBListGroupItem>
                </Link>
            )
        })
    }

    // GET CURRENT URL
    const getCurrentURL = () => {
        let url = window.location.pathname
        setCurrentURL(url)
    }

    // LIFECYCLE
    useEffect(() => {
        getCurrentURL()
    }, [])

    // MAIN RENDER
    return (
        <div
            id="sidenav"
            className="bg-dark sidebar-admin"
        >

            {/* SIDEBAR HEADER */}
            <MDBContainer fluid>
                <div className="text-center py-3 mb-5">
                    <MDBNavbarBrand className="white-text text-uppercase border w-100 mx-auto">
                        <h5 className="m-0">Alvin Shop</h5>
                    </MDBNavbarBrand>
                </div>
            </MDBContainer>
            {/* SIDEBAR HEADER */}

            {/* SIDEBAR MENU */}
            <MDBContainer fluid>
                <MDBListGroup>
                    {renderMenu()}
                </MDBListGroup>
            </MDBContainer>
            {/* SIDEBAR MENU */}

        </div>
    );
};

export default Sidebar;
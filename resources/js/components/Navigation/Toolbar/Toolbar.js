import React, { useState } from 'react';
import { Navbar, NavbarToggler, Container, NavbarBrand } from 'reactstrap';

import './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../UI/Logo/Logo';

const toolbar = ({ isAuth, name, drawerToggleClicked, logoutHandler, role, cartItemsNumber, notifications }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="Toolbar fixed-top">
            <Container >
                <Navbar color="transparent" dark expand="md">
                    <NavbarBrand href="/"><Logo /></NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <NavigationItems isAuth={isAuth} name={name} logoutHandler={logoutHandler} notifications={notifications} cartItemsNumber={cartItemsNumber} role={role} />
                </Navbar>
            </Container>
        </div>
    )
};

export default toolbar;
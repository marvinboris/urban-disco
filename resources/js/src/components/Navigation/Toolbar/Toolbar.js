import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarToggler, Container, NavbarBrand } from 'reactstrap';

import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../UI/Logo/Logo';

import './Toolbar.css';

const toolbar = ({ isAuth, name, drawerToggleClicked, logoutHandler, role, cartItemsNumber, notifications }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="Toolbar fixed-top dark">
            <Container >
                <Navbar color="transparent" dark expand="md">
                    <Link className="text-decoration-none navbar-brand" to="/"><Logo /></Link>

                    <NavbarToggler onClick={toggle} />

                    <NavigationItems isAuth={isAuth} isOpen={isOpen} name={name} logoutHandler={logoutHandler} notifications={notifications} cartItemsNumber={cartItemsNumber} role={role} />
                </Navbar>
            </Container>
        </div>
    )
};

export default toolbar;
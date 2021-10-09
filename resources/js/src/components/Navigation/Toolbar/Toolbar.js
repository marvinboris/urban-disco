import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarToggler, Container, NavbarBrand } from 'reactstrap';

import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../UI/Logo/Logo';

import './Toolbar.css';

export default ({ }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="Toolbar fixed-top dark">
            <Container >
                <Navbar color="transparent" dark expand="md">
                    <Link className="text-decoration-none navbar-brand" to="/"><Logo /></Link>

                    <NavbarToggler onClick={toggle} />

                    <NavigationItems isOpen={isOpen} />
                </Navbar>
            </Container>
        </div>
    )
};
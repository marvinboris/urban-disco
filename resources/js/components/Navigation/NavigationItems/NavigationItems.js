import React, { useState } from 'react';
import { Collapse, Nav } from 'reactstrap';

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = ({ isAuth, name, logoutHandler, role, cartItemsNumber, notifications }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto d-flex align-items-center" navbar>
                <NavigationItem icon="home" href="/">Home</NavigationItem>
                <NavigationItem icon="user" href="/about-us">About Us</NavigationItem>
                <NavigationItem exact={false} icon="book" href="/courses">Courses</NavigationItem>
                <NavigationItem exact={false} icon="plane" href="/products">Products</NavigationItem>
                <NavigationItem exact={false} icon="blog" href="/blog">Blog</NavigationItem>
                <NavigationItem icon="envelope" href="/contact">Contact</NavigationItem>
            </Nav>
        </Collapse>
    );
}

export default navigationItems;
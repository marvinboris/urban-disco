import React, { useState } from 'react';
import { Collapse, Nav } from 'reactstrap';

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = ({ isAuth, name, logoutHandler, role, cartItemsNumber, notifications }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto d-flex align-items-center" navbar>
                <NavigationItem icon="home" href="/">Accueil</NavigationItem>
                <NavigationItem icon="user" href="#about">A propos</NavigationItem>
                <NavigationItem icon="book" href="//tutoriels.themasterofarts.com">Cours</NavigationItem>
                <NavigationItem exact={false} icon="plane" href="#products">Produits</NavigationItem>
                <NavigationItem exact={false} icon="blog" href="//themasterofarts.com">Blog</NavigationItem>
                <NavigationItem icon="envelope" href="#footer">Contact</NavigationItem>
            </Nav>
        </Collapse>
    );
}

export default navigationItems;
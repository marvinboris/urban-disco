import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const navigationItem = ({ icon, children, href, className, different, exact = true }) => (
    <NavItem>
        <NavLink className={className + ' nav-link'} to={href} exact={exact} activeClassName={!different ? "text-white text-large" : ""}>{icon ? <FontAwesomeIcon icon={icon} className="mr-1" /> : null}{children}</NavLink>
    </NavItem>
);

export default navigationItem;
import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const navigationItem = ({ icon, children, href, className, different }) => (
    <NavItem>
        <NavLink className={className + ' nav-link text-secondary'} to={href} exact activeClassName={!different ? "text-danger" : ""}>{icon ? <FontAwesomeIcon icon={icon} className="mr-1" /> : null}{children}</NavLink>
    </NavItem>
);

export default navigationItem;
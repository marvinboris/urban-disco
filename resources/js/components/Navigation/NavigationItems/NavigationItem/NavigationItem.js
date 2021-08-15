import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default ({ icon, children, href, className, different, exact = true }) => (
    <NavItem>
        {href.includes('//') || href.includes('#')
            ? <a className={className + ' nav-link'} href={href} target={href.includes("//") ? "_blank" : ""}>{icon && <FontAwesomeIcon icon={icon} className="mr-1" />}{children}</a>
            : <NavLink className={className + ' nav-link'} to={href} exact={exact} activeClassName={!different ? "text-white text-large" : ""}>{icon && <FontAwesomeIcon icon={icon} className="mr-1" />}{children}</NavLink>}
    </NavItem>
);
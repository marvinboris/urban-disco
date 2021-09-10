import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const dropdownItem = ({ icon, children, href, className, onClick, activeClassName }) => {
    return (
        <NavLink onClick={onClick} to={href} exact className={"dropdown-item " + className} activeClassName={activeClassName ? activeClassName : 'bg-danger text-white'}><FontAwesomeIcon className="mr-1" style={{ width: '25px' }} icon={icon} />{children}</NavLink>
    );
};

export default dropdownItem;
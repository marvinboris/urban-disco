import React from 'react';
import { NavLink } from 'react-router-dom';

const navbarBrand = ({ href, children }) => <NavLink className="navbar-brand" to={href}>{children}</NavLink>;

export default navbarBrand;
import React from 'react';

import './SideDrawer.css';
import Logo from '../../UI/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = ({ close, show, isAuth }) => (
    <>
        <Backdrop clicked={close} show={show} />
        <div className="SideDrawer" onClick={close}>
            <Logo />
        </div>
        <nav>
            <NavigationItems isAuth={isAuth} />
        </nav>
    </>
);

export default sideDrawer;
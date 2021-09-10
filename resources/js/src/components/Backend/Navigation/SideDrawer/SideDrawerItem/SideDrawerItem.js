import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Collapse, Button } from 'reactstrap';

import './SideDrawerItem.css';

const SideDrawerItem = ({ children, dropdown, icon, href = '', items, path = '', sideDrawerToggle, exact = false, select, selected, id, dark = true }) => {
    const match = window.location.pathname.includes(path);

    const toggle = () => {
        const match = selected === id;
        match ? select(null) : select(id);
    }

    const onSelect = () => toggle();

    const onSideDrawerToggle = () => {
        sideDrawerToggle();
        toggle();
    }

    let isSelected = selected === id;
    if (selected === '') isSelected = match;

    let content;
    if (!dropdown) content = <>
        <NavLink onClick={onSideDrawerToggle} exact={exact} className="App SideDrawerItem p-0 d-sm-none nav-link" activeClassName="active" to={href}>
            <div className="py-2 px-3 text-16 text-300 rounded-4">
                <i className={"fas fa-" + icon + " fa-fw mr-3"} />

                <span className="text">{children}</span>
            </div>
        </NavLink>

        <NavLink onClick={onSelect} exact={exact} className="App SideDrawerItem p-0 nav-link d-none d-sm-block" activeClassName="active" to={href}>
            <div className="py-2 px-3 text-16 text-300 rounded-4">
                <i className={"fas fa-" + icon + " fa-fw mr-3"} />

                <span className="text">{children}</span>
            </div>
        </NavLink>
    </>;
    else {
        const itemEls = items.map(({ link = '', text }) => (
            <li className="nav-item text-300" key={text}>
                <NavLink onClick={sideDrawerToggle} exact className={`nav-link d-sm-none text-${dark ? "white" : "secondary"}`} activeClassName="text-700" to={path + link}><span className="position-relative text-300" style={{ left: -8 }}>-</span> {text}</NavLink>
                <NavLink exact className={`nav-link d-none d-sm-block text-${dark ? "white" : "secondary"}`} activeClassName="text-700" to={path + link}><span className="position-relative text-300" style={{ left: -8 }}>-</span> {text}</NavLink>
            </li>
        ));

        content = (
            <div>
                <Button color="link" onClick={toggle} className={`App SideDrawerItem nav-link d-block w-100 rounded-0 border-0 p-0 text-left text-${dark ? "white" : "blue"} position-relative ${match ? 'active' : ''}`} style={{ boxShadow: 'none' }}>
                    <div className="py-2 px-3 text-16 text-300 rounded-4">
                        <i className={"fas fa-" + icon + " fa-fw mr-3"} />

                        <span className="text">{children}</span>
                    </div>

                    <FontAwesomeIcon fixedWidth icon={faAngleDown} className={`position-absolute angle-down text-${dark ? "white" : "blue"} ${isSelected ? 'open' : ''}`} style={{ right: 16, top: '50%' }} />
                </Button>

                <Collapse isOpen={isSelected} className={`pl-3 bg-${dark ? "transparent" : "gray-0"}`}>
                    <ul className={`nav flex-column border-left ml-3 border-${dark ? "white" : "border"}-20`}>
                        {itemEls}
                    </ul>
                </Collapse>
            </div>
        );
    }

    return (
        <li className="nav-item">{content}</li>
    );
};

export default SideDrawerItem;
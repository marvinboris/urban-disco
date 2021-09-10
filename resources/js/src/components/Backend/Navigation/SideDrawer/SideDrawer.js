import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Badge, Modal, ModalHeader, ModalBody, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faBell, faWrench, faPowerOff, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

import SideDrawerItem from './SideDrawerItem/SideDrawerItem';
import Logo from '../../../UI/Logo/Logo';

import './SideDrawer.css';

export default ({ data, role = 'user', logoutHandler, toggle, selectItem, selectedItem, cms, dark = false }) => {
    const [modal, setModal] = useState(false);

    const modalToggle = () => setModal(!modal);

    let { name, photo, role: role_ } = data;

    if (!photo) photo = "//placehold.it/100x100";

    let addOns = null;
    let sideDrawerItems = null;
    const {
        pages: {
            backend: {
                header: { logout, close: close_, sure_logout },
                sidebar: {
                    user, admin,
                    menu: {
                        dashboard, admins, users, roles, features, languages, cms: cms_, notifications, methods, settings,
                        post_categories, posts, brands, products,
                    }
                }
            }
        }
    } = cms;

    const roles_ = {
        user,
        admin,
    };

    const logoutContent = <>
        <ModalHeader toggle={modalToggle}>{logout}</ModalHeader>
        <ModalBody className="text-center">
            <p>{sure_logout}?</p>
            <div>
                <Button color="green" onClick={logoutHandler}>{logout} <FontAwesomeIcon icon={faPowerOff} fixedWidth /></Button>{' '}
                <Button color="red" onClick={modalToggle}>{close_} <FontAwesomeIcon icon={faTimes} fixedWidth /></Button>
            </div>
        </ModalBody>
    </>;

    const sideDrawerItem = (fixed = false, id = null, dropdown = null, icon, path, custom = false, addon = []) => {
        if (id && fixed) return <SideDrawerItem id={id} sideDrawerToggle={toggle} select={selectItem} selected={selectedItem} icon={icon} href={path}>{id}</SideDrawerItem>;

        if (fixed) {
            let items = [];

            if (!custom) {
                items.push({ link: '/add', text: dropdown.add });
                items.push({ link: '/', text: dropdown.index });
                items = items.concat(addon);
            }
            else items = custom;

            return <SideDrawerItem id={dropdown.title} sideDrawerToggle={toggle} select={selectItem} selected={selectedItem} icon={icon} dropdown path={path} items={items}>{dropdown.title}</SideDrawerItem>;
        }

        if (id) {
            const feature = role_.features.find(f => '/user/' + f.prefix === path);

            if (!feature) return null;

            return <SideDrawerItem id={id} sideDrawerToggle={toggle} select={selectItem} selected={selectedItem} icon={icon} href={path}>{id}</SideDrawerItem>;
        }

        const feature = role_.features.find(f => '/user/' + f.prefix === path);

        if (!feature) return null;
        let { permissions } = feature;
        let items = [];

        if (!custom) {
            if (permissions && permissions.includes('c')) items.push({ link: '/add', text: dropdown.add });
            items.push({ link: '/', text: dropdown.index });
            items = items.concat(addon);
        }
        else items = custom;

        return <SideDrawerItem id={dropdown.title} sideDrawerToggle={toggle} select={selectItem} selected={selectedItem} icon={icon} dropdown path={path} items={items}>{dropdown.title}</SideDrawerItem>;
    };

    switch (role) {
        case 'user':
            addOns = <div className="text-left">
                <div className="text-white small"><FontAwesomeIcon icon={faCircle} size="sm" fixedWidth className="mr-1" />{role_.name}</div>
            </div>;
            sideDrawerItems = <>
                {sideDrawerItem(true, dashboard, null, "th-large", "/user/dashboard")}
                {sideDrawerItem(false, null, post_categories, "th-list", "/user/post-categories")}
                {sideDrawerItem(false, null, posts, "blog", "/user/posts")}
                {sideDrawerItem(false, null, brands, "copyright", "/user/brands")}
                {sideDrawerItem(false, null, products, "store", "/user/products")}

                <div className="text-16 px-3 py-2 mb-1 mt-4">RESOURCES</div>
                {sideDrawerItem(false, null, users, "user", "/user/users")}
                {sideDrawerItem(false, null, roles, "user-tag", "/user/roles")}
                {sideDrawerItem(false, null, features, "tools", "/user/features")}
                {sideDrawerItem(false, null, languages, "language", "/user/languages")}
                {sideDrawerItem(false, null, methods, "th-list", "/user/methods")}

                <div className="text-16 px-3 py-2 mb-1 mt-4">OTHERS</div>
                {sideDrawerItem(false, null, cms_, "wrench", "/user/cms", [
                    { link: '/global', text: cms_.global },
                    { link: '/general', text: cms_.general },
                    { link: '/messages', text: cms_.messages },
                    { link: '/components', text: cms_.components },
                    { link: '/auth', text: cms_.auth },
                    { link: '/backend', text: cms_.backend },
                    { link: '/frontend', text: cms_.frontend },
                ])}
                <SideDrawerItem id={notifications} sideDrawerToggle={toggle} select={selectItem} selected={selectedItem} icon="bell" href="/user/notifications">
                    {notifications}{' '}
                    {data.notifications.filter(notification => !notification.read_at).length > 0 && <Badge color="green" className="position-relative rounded-circle text-x-small text-700 d-inline-flex justify-content-center align-items-center" style={{ width: 18, height: 18, top: -2, left: 2 }}><b className="text-white">{data.notifications.filter(notification => !notification.read_at).length}</b></Badge>}
                </SideDrawerItem>
                {sideDrawerItem(true, null, settings, "cog", "/user/settings", [
                    { link: '/language', text: settings.language },
                ])}

                <div className="mt-5 pt-5">
                    <div className="py-2 px-3 text-16 text-300 text-gray rounded-4" onClick={modalToggle} style={{ cursor: 'pointer' }}>
                        <FontAwesomeIcon fixedWidth icon={faPowerOff} className="mr-3" />

                        <span className="text">{logout}</span>
                    </div>
                </div>

                <Modal isOpen={modal} toggle={modalToggle}>
                    {logoutContent}
                </Modal>
            </>;
            break;

        case 'admin':
            sideDrawerItems = <>
                {sideDrawerItem(true, dashboard, null, "th-large", "/admin/dashboard")}
                {sideDrawerItem(true, null, post_categories, "th-list", "/admin/post-categories")}
                {sideDrawerItem(true, null, posts, "blog", "/admin/posts")}
                {sideDrawerItem(true, null, brands, "copyright", "/admin/brands")}
                {sideDrawerItem(true, null, products, "store", "/admin/products")}

                <div className="text-16 px-3 py-2 mb-1 mt-4">RESOURCES</div>
                {sideDrawerItem(true, null, admins, "user-cog", "/admin/admins")}
                {sideDrawerItem(true, null, users, "user", "/admin/users")}
                {sideDrawerItem(true, null, roles, "user-tag", "/admin/roles")}
                {sideDrawerItem(true, null, features, "tools", "/admin/features")}
                {sideDrawerItem(true, null, languages, "language", "/admin/languages")}
                {sideDrawerItem(true, null, methods, "th-list", "/admin/methods")}

                <div className="text-16 px-3 py-2 mb-1 mt-4">OTHERS</div>
                {sideDrawerItem(true, null, cms_, faWrench, "/admin/cms", [
                    { link: '/global', text: cms_.global },
                    { link: '/general', text: cms_.general },
                    { link: '/messages', text: cms_.messages },
                    { link: '/components', text: cms_.components },
                    { link: '/auth', text: cms_.auth },
                    { link: '/backend', text: cms_.backend },
                    { link: '/frontend', text: cms_.frontend },
                ])}
                <SideDrawerItem id={notifications} sideDrawerToggle={toggle} select={selectItem} selected={selectedItem} icon={faBell} href="/admin/notifications">
                    {notifications}{' '}
                    {data.notifications.filter(notification => !notification.read_at).length > 0 && <Badge color="green" className="position-relative rounded-circle text-x-small text-700 d-inline-flex justify-content-center align-items-center" style={{ width: 18, height: 18, top: -2, left: 2 }}><b className="text-white">{data.notifications.filter(notification => !notification.read_at).length}</b></Badge>}
                </SideDrawerItem>
                {sideDrawerItem(true, null, settings, faCog, "/admin/settings", [
                    { link: '/language', text: settings.language },
                ])}

                <div className="mt-5 pt-5">
                    <div className="py-2 px-3 text-16 text-300 rounded-4" onClick={modalToggle} style={{ cursor: 'pointer' }}>
                        <i className="fas fa-fw fa-power-off text-gray mr-3" />

                        <span className="text">{logout}</span>
                    </div>
                </div>

                <Modal isOpen={modal} toggle={modalToggle}>
                    {logoutContent}
                </Modal>
            </>;
            break;
    }



    return (
        <div className={`App SideDrawer nav-left-sidebar bg-soft shadow-sm position-fixed`}>
            <div className={`vh-100 d-flex flex-column bg-${dark ? "grayblue text-white border-right border-darkblue" : "black text-white"}`}>
                <div className="px-4 border-bottom border-light bg-black">
                    <div className="mx-3 toolbar-height d-flex align-items-center">
                        <div className="pr-2 pr-md-3 pr-md-4">
                            <Logo />
                        </div>

                        <div className="ml-auto d-md-none">
                            <i className="fas fa-arrow-left text-21 cursor-pointer" onClick={toggle} />
                        </div>
                    </div>
                </div>

                <div className="p-4 mt-1 mt-md-2 mt-md-3 flex-fill">
                    <div className="mx-3">
                        <div className="mb-1 mb-md-2 mb-xxl-3 d-flex justify-content-center">
                            <div className="position-relative">
                                <div className="rounded-circle d-inline-block border border-4 border-white">
                                    <img src={photo} className="rounded-circle border border-3 border-secondary" style={{ width: 92, height: 92, objectFit: 'cover', objectPosition: 'center' }} alt="User profile" />
                                </div>

                                <div className="position-absolute border border-2 border-black bg-gray rounded-circle" style={{ top: 2, right: 5, width: 18, height: 18 }} />
                            </div>
                        </div>

                        <div className="text-center text-18 mb-3 mb-md-4 mb-xxl-5 pb-2 pb-md-3 pb-xxl-4">
                            Welcome {roles_[role]}
                            <Col xs={12} className="p-0 text-700">{name}</Col>
                        </div>

                        <div className="px-3">
                            <ul className="navbar-nav flex-column pr-3 scrollbar-white">
                                {sideDrawerItems}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="backdrop bg-soft-50 position-fixed d-md-none" onClick={toggle} style={{ top: 0, zIndex: -1 }} />
        </div>
    )
};
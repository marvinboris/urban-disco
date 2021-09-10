import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, UncontrolledDropdown, DropdownToggle, Badge, DropdownMenu, DropdownItem, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff, faTimes, faEnvelope, faBell } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';

import MenuBar from '../../../../assets/images/menu-bar.svg';

// import NavigationItem from './NavigationItem/NavigationItem';
// import MyDropdownItem from '../../../Navigation/NavigationItems/DropdownItem/DropdownItem';

export default ({ sidedrawerToggle, logoutHandler, messages = [], notifications = [], date: { weekDay, day, month, year }, clock: { hours, minutes, seconds }, cms, dark = false }) => {
    const [modal, setModal] = useState(false);
    let dateTimeContent, signOutContent, notificationsContent, logoutContent;

    const messageItems = messages.map(message => {
        return <DropdownItem key={'message_' + message.id} className="text-dark text-truncate border-top">
            {message.content}
        </DropdownItem>
    });

    if (cms) {
        const {
            pages: {
                general: { date, time },
                backend: {
                    header: { sign_out, no_message, no_notification, logout, close: close_, sure_logout, you_have, messages: messages_, view_all_messages, notifications: notifications_, view_all_notifications }
                }
            }
        } = cms;

        dateTimeContent = <>
            <div className="d-none d-lg-block" style={{ width: 200 }}>
                <FontAwesomeIcon icon={faClock} className={`text-${dark ? "white" : "yellow"} mr-2`} />
                <strong className={`text-${dark ? "white" : "yellow"}`}>{(time || '').toUpperCase()} : {hours} : {minutes} : {seconds}</strong>
            </div>
            <div className="d-none d-lg-block">
                <strong className={`text-${dark ? "light" : "yellow-50"}`}>{(date || '').toUpperCase()} : {weekDay} {day} {month} {year}</strong>
            </div>
        </>;

        notificationsContent = <>
            <UncontrolledDropdown inNavbar>
                <DropdownToggle nav className="p-0">
                    <FontAwesomeIcon icon={faEnvelope} className="text-light mr-3" size="lg" />
                    <Badge color="green" className="position-absolute rounded-circle d-inline-flex justify-content-center align-items-center" style={{ width: 20, height: 20, transform: 'translate(-30px, -5px)', zIndex: 2 }}>{messages.length}</Badge>
                </DropdownToggle>
                <DropdownMenu right style={{ width: '20rem' }}>
                    {messages.length === 0 ? <DropdownItem disabled className="bg-dark text-white">
                        <div className="py-2">{no_message}.</div>
                    </DropdownItem> : <>
                            <DropdownItem disabled className="text-left pt-0 small">
                                {you_have} {messages.length} {messages_}.
                                </DropdownItem>
                            {messageItems}
                            <DropdownItem className="text-center pb-0 border-top">
                                <Link className="text-reset small" to={"/messages"}>{view_all_messages}</Link>
                            </DropdownItem>
                        </>}
                </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown inNavbar>
                <DropdownToggle nav className="p-0">
                    <FontAwesomeIcon icon={faBell} className="text-light mr-3" size="lg" />
                    <Badge color="red" className="position-absolute rounded-circle d-inline-flex justify-content-center align-items-center" style={{ width: 20, height: 20, transform: 'translate(-30px, -5px)', zIndex: 2 }}>{notifications.length}</Badge>
                </DropdownToggle>
                <DropdownMenu right style={{ width: '20rem' }}>
                    {notifications.length === 0 ? <DropdownItem disabled className="bg-dark text-white">
                        <div className="py-2">{no_notification}.</div>
                    </DropdownItem> : <>
                            <DropdownItem disabled className="text-left pt-0 small">
                                {you_have} {notifications.length} {notifications_}.
                                        </DropdownItem>
                            {notificationItems}
                            <DropdownItem className="text-center pb-0 border-top">
                                <Link className="text-reset small" to={"/notifications"}>{view_all_notifications}</Link>
                            </DropdownItem>
                        </>}
                </DropdownMenu>
            </UncontrolledDropdown>
        </>;

        signOutContent = <>
            <span className="d-none d-xl-inline">{sign_out}</span>
        </>;

        logoutContent = <>
            <ModalHeader toggle={toggle}>{logout}</ModalHeader>
            <ModalBody className="text-center">
                <p>{sure_logout}?</p>
                <div>
                    <Button color="green" onClick={logoutHandler}>{logout} <FontAwesomeIcon icon={faPowerOff} fixedWidth /></Button>{' '}
                    <Button color="red" onClick={toggle}>{close_} <FontAwesomeIcon icon={faTimes} fixedWidth /></Button>
                </div>
            </ModalBody>
        </>;
    }

    const toggle = () => setModal(!modal);

    const notificationItems = notifications.map(notification => {
        let message, icon;
        switch (notification.type) {
            case 'App\\Notifications\\PlanUser':
                message = <Link to={"/notifications/" + notification.id} className="text-reset small"><FontAwesomeIcon className="text-success mr-1" size="lg" fixedWidth icon={faShoppingCart} />New plan bought.</Link>;
                break;

            case 'App\\Notifications\\Deposit':
                message = <Link to={"/notifications/" + notification.id} className="text-reset small"><FontAwesomeIcon className="text-primary mr-1" size="lg" fixedWidth icon={faMoneyBillWaveAlt} />Deposit successfully made.</Link>;
                break;

            case 'App\\Notifications\\LimoPayment':
                message = <Link to={"/notifications/" + notification.id} className="text-reset small"><FontAwesomeIcon className="text-green mr-1" size="lg" fixedWidth icon={faPaperPlane} />Limo Payment successfully submitted.</Link>;
                break;

            case 'App\\Notifications\\LimoPaymentStatus':
                const { message: notificationMessage, status } = notification.data;
                if (status === 1) {
                    icon = <FontAwesomeIcon className="text-green mr-1" size="lg" fixedWidth icon={faCheck} />;
                } else if (status === 2) {
                    icon = <FontAwesomeIcon className="text-danger mr-1" size="lg" fixedWidth icon={faTimes} />;
                }
                message = <Link to={"/notifications/" + notification.id} className="text-reset small">{icon}{notificationMessage}</Link>;
                break;

            default:
                break;
        }

        return <DropdownItem key={'notification_' + notification.id} className="text-dark text-truncate border-top">
            {message}
        </DropdownItem>
    });

    return <div className={`px-3 bg-${dark ? "darkblue" : "darkhead"} flex-fill d-flex align-items-center text-light text-large position-relative`} style={{ height: 70 }}>
        <Nav className="mr-auto d-flex align-items-center" navbar>
            <img className="d-inline mr-3 mr-md-5 ml-2 ml-md-4" style={{ cursor: 'pointer' }} src={MenuBar} onClick={sidedrawerToggle} />
            {dateTimeContent}
        </Nav>
        <div className="ml-auto d-flex align-items-center">
            <div className="py-3 d-flex justify-content-between align-items-center">
                {notificationsContent}
            </div>

            <div onClick={toggle} style={{ cursor: 'pointer' }} className="d-flex align-items-center ml-lg-5">
                {signOutContent}
                <FontAwesomeIcon icon={faPowerOff} size="lg" className={`ml-2 text-${dark ? "light" : "white"}`} />
            </div>
        </div>

        <Modal isOpen={modal} toggle={toggle}>
            {logoutContent}
        </Modal>
    </div>;
}
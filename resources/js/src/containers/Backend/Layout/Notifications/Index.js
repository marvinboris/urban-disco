import React from 'react';
import { Link } from 'react-router-dom';
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faMoneyBillWaveAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default ({ cms, notifications, role }) => {
    const unreadNotifications = notifications.filter(notification => !notification.read_at);

    const notificationItems = notifications.map(notification => {
        let message;
        switch (notification.type) {
            case 'App\\Notifications\\PlanPurchase':
                message = <><FontAwesomeIcon className="text-green mr-1" fixedWidth icon={faShoppingCart} />You successfully bought a {notification.data.name} plan.</>;
                break;

            case 'App\\Notifications\\PlanImminentExpiration':
                message = <><FontAwesomeIcon className="text-orange mr-1" fixedWidth icon={faShoppingCart} />Your {notification.data.name} plan will expire in {notification.data.days} {notification.data.days > 1 ? 's' : ''}.</>;
                break;

            case 'App\\Notifications\\PlanExpired':
                message = <><FontAwesomeIcon className="text-red mr-1" fixedWidth icon={faShoppingCart} />Your {notification.data.name} plan has just expired.</>;
                break;

            case 'App\\Notifications\\RestaurantRecharge':
                message = <><FontAwesomeIcon className="text-blue mr-1" fixedWidth icon={faMoneyBillWaveAlt} />You successfully made a {notification.data.amount} USD{notification.data.method && (notification.data.method.name + ' ')} recharge.</>;
                break;

            default:
                break;
        }

        return <Link key={JSON.stringify(notification)} to={"/" + role + "/notifications/" + notification.id} className={"text-dark dropdown-item text-truncate border-top" + (!notification.read_at ? " text-700" : "")}>
            {message}
        </Link>
    });

    return <UncontrolledDropdown inNavbar>
        <DropdownToggle nav className="circle text-16 text-md-20 text-xxl-24 m-0 rounded-circle bg-border-10 text-border position-relative">
            <FontAwesomeIcon icon={faBell} className="text-secondary" />
            <Badge color="green" className="position-absolute rounded-circle text-x-small text-700 d-inline-flex justify-content-center align-items-center border border-2 border-white" style={{ width: 18, height: 18, top: 0, right: 0, transform: 'translateX(50%)' }}><b className="text-white">{unreadNotifications.length}</b></Badge>
        </DropdownToggle>

        <DropdownMenu right style={{ width: '20rem' }}>
            {notifications.length === 0 ? <DropdownItem disabled className="bg-dark text-white">
                <div className="py-2">{cms.header.no_notification}.</div>
            </DropdownItem> : <>
                <DropdownItem disabled className="text-left pt-0 small">
                    {cms.header.you_have} {unreadNotifications.length} {unreadNotifications.length > 1 ? cms.header.unread_notifications : cms.header.unread_notification}.
                </DropdownItem>

                {notificationItems}

                <DropdownItem className="text-center pb-0 border-top">
                    <Link className="text-reset small" to={"/" + role + "/notifications"}>{cms.header.view_all_notifications}</Link>
                </DropdownItem>
            </>}
        </DropdownMenu>
    </UncontrolledDropdown>;
}
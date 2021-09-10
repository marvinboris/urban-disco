import React, { useState } from 'react';
import { Button, DropdownMenu, DropdownToggle, Modal, ModalBody, ModalHeader, UncontrolledDropdown } from 'reactstrap';

export default ({ cms, logoutHandler }) => {
    const [modal, setModal] = useState(false);

    const modalToggle = () => setModal(!modal);

    const logoutContent = <>
        <ModalHeader toggle={modalToggle}>{cms.header.logout}</ModalHeader>

        <ModalBody className="text-center">
            <p>{cms.header.sure_logout}?</p>

            <div>
                <Button color="green" onClick={logoutHandler}>{cms.header.logout} <i className="fas fa-power-off fa-fw" /></Button>{' '}
                <Button color="red" onClick={modalToggle}>{cms.header.close} <i className="fas fa-times fa-fw" /></Button>
            </div>
        </ModalBody>
    </>;

    return <>
        <UncontrolledDropdown inNavbar>
            <DropdownToggle nav className="text-16 text-md-20 text-xxl-24 rounded-4 p-1 p-md-2 p-xxl-3 bg-greenblue-10 m-0">
                <i className="fas fa-cog fa-fw text-darkgreenblue" />
            </DropdownToggle>

            <DropdownMenu right>
                {/* <Link className="dropdown-item text-decoration-none text-reset" to="/restaurant/plans/purchase"><i className="fas fa-box fa-fw mr-2 text-blue" />{cms.menu.plans.purchase}</Link> */}

                <div className="dropdown-item" style={{ cursor: 'pointer' }} onClick={() => setModal(true)}><i className="fas fa-power-off fa-fw mr-2 text-blue" />{cms.header.logout}</div>
            </DropdownMenu>
        </UncontrolledDropdown>

        <Modal isOpen={modal} toggle={modalToggle}>
            {logoutContent}
        </Modal>
    </>;
}
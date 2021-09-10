import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap';
import { faTrash, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default ({ deleteAction, className = '', children }) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const deleteHandler = () => {
        toggle();
        deleteAction();
    };

    return <>
        <span style={{ cursor: 'pointer' }} onClick={toggle}>{children}</span>
        <Modal isOpen={modal} toggle={toggle} centered className={className}>
            <ModalHeader toggle={toggle}>Delete item</ModalHeader>
            <ModalBody className="text-center">
                <p>Are you sure you want to delete this item?</p>
                <div>
                    <Button color="danger" onClick={deleteHandler}>Delete <FontAwesomeIcon icon={faTrash} fixedWidth /></Button>{' '}
                    <Button color="secondary" onClick={toggle}>Close <FontAwesomeIcon icon={faTimes} fixedWidth /></Button>
                </div>
            </ModalBody>
        </Modal>
    </>;
};
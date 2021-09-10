import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

export default ({ title, content, className, children }) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <>
            <span style={{ cursor: 'pointer' }} onClick={toggle}>{children}</span>
            <Modal isOpen={modal} toggle={toggle} size="lg" centered className={className}>
                {title && <ModalHeader toggle={toggle}>{title}</ModalHeader>}
                <ModalBody>
                    <div className="p-2">{content}</div>
                </ModalBody>
            </Modal>
        </>
    );
}
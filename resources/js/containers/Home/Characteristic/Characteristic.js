import React from "react";
import { Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const characteristic = ({ children, className, number = 0 }) => (
    <Col md={6} className={"d-flex pb-2 " + className} style={{ overflow: 'visible' }}>
        <div className="pr-3">
            <div className="rounded-circle embed-responsive embed-responsive-1by1 border border-dark border-2 text-700 text-x-large d-flex justify-content-center align-items-center" style={{ width: 40 }}>{number}</div>
        </div>

        <div className="text-small text-300">{children}</div>
    </Col>
);

export default characteristic;

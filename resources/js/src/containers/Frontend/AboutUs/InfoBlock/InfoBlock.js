import React from 'react';
import { Col, Row } from 'reactstrap';

export default ({ icon, number, title }) => <Col lg={3} xs={6} className="text-center text-white h2">
    <i className={"fas fa-2x fa-" + icon} />
    <div className="py-4 text-montserrat-alt text-700 counter">{number}</div>
    <div className="text-500">{title}</div>
</Col>;
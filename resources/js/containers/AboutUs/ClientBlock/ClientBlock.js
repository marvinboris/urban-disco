import React from 'react';
import { Col } from 'reactstrap';

const clientBlock = ({ src, height }) =>
    <Col className="text-center">
        <img src={src} style={{ height }} />
    </Col>;

export default clientBlock;
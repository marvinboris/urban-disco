import React from 'react';
import { Col } from 'reactstrap';

export default ({ src, height }) => <Col className="text-center">
    <img src={src} style={{ height }} />
</Col>;
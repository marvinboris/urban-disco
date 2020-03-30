import React from 'react';
import { Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const infoBlock = ({ icon, number, title }) => 
<Col lg={3} xs={6} className="text-center text-white h2">
    <FontAwesomeIcon size="2x" icon={icon} />
    <div className="py-4 text-montserrat-alt text-700 counter">{number}</div>
    <div className="text-500">{title}</div>
</Col>;

export default infoBlock;
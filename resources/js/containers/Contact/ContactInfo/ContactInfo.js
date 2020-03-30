import React from 'react';
import { Col, Card, CardTitle, CardSubtitle } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const contactInfo = ({ title, icon, children }) =>
    <Col md={4}>
        <Card className="text-center h-100 py-3 bg-white shadow-sm">
            <CardTitle className="text-700 h4">{title}</CardTitle>
            <CardSubtitle className="my-4">
                <FontAwesomeIcon icon={icon} className="bg-dark-gradient bg-text" size="3x" />
            </CardSubtitle>
            <div className="text-300">{children}</div>
        </Card>
    </Col>;

export default contactInfo;
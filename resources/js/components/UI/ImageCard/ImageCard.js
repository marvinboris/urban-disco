import React from 'react';
import { Col } from 'reactstrap';

import './ImageCard.css';

const imageCard = ({ src, children, height, lg, md }) => (
    <Col md={md} lg={lg} style={{ height: height + 'px' }} className="ImageCard mb-3">
        <div className="inner shadow-sm rounded">
            <img src={src} className="img-fluid" alt="Carte" />
            <span className="text-white text-uppercase collections-text">Collections</span>
            <span className="text-white inner-text h1">{children}</span>
        </div>
    </Col>
);

export default imageCard;
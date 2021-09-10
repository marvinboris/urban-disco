import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

import './ArticleCard.css';

const articleCard = ({ photo, name, description, price = 0, link = '/', md = 6, lg = 4 }) => (
    <Col md={md} lg={lg} className="ArticleCard pb-3">
        <Card className="text-dark shadow-sm">
            <CardImg top width="100%" src={photo} alt="Card image cap" className="embed-responsive embed-responsive-4by3" />

            <CardBody className="text-center">
                <CardTitle className="h5 text-700">
                    {link.includes('//')
                        ? <a className="bg-dark-gradient bg-text" href={link} target="_blank">{name}</a>
                        : <NavLink className="bg-dark-gradient bg-text" to={link}>{name}</NavLink>}
                </CardTitle>

                <CardSubtitle className="text-muted text-truncate small mb-2">{description}</CardSubtitle>

                <CardText className="bg-dark-gradient bg-text h6 text-600">{price} FCFA</CardText>
            </CardBody>
        </Card>
    </Col>
);

export default articleCard;
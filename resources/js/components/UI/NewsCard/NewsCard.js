import React from 'react';
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import BetweenButton from '../Button/BetweenButton/BetweenButton';

import './NewsCard.css';

const newsCard = ({ src, title, subtitle, children, link = '/', md = 6, lg = 4 }) => {
    return (
        <Col md={md} lg={lg} className="NewsCard text-left pb-3">
            <Card className="overflow-hidden shadow-sm">
                <CardImg top width="100%" src={src} alt="News card cap" className="embed-responsive embed-responsive-4by3" />
                <CardBody>
                    <CardTitle className="h5 bg-dark-gradient bg-text text-truncate">{title}</CardTitle>
                    <CardText>
                        <p className="text-300 text-small mb-4">
                            {children.substr(0, 100)}
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                            <NavLink to={'/blog/' + link}>
                                <BetweenButton icon="arrow-alt-circle-right" color="dark" size="sm">Read More</BetweenButton>
                            </NavLink>
                        </div>
                    </CardText>
                </CardBody>
            </Card>
        </Col>
    );
};

export default newsCard;
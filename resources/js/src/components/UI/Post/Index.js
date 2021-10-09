import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import BetweenButton from '../Button/BetweenButton/BetweenButton';

import { htmlEntities } from '../../../shared/utility';

import './Post.css';
import { connect } from 'react-redux';

class Post extends Component {
    render() {
        const {
            content: {
                cms: {
                    pages: { components: { post } }
                }
            },
            photo, title, body, link = '/', md = 6, lg = 4
        } = this.props;

        return <Col md={md} lg={lg} className="NewsCard text-left pb-3">
            <Card className="overflow-hidden shadow-sm">
                <CardImg top width="100%" src={photo} alt="News card cap" className="embed-responsive embed-responsive-4by3" />

                <CardBody>
                    <CardTitle className="h5 bg-dark-gradient bg-text text-truncate">{title}</CardTitle>

                    <CardText className="text-300 text-small mb-4">
                        {htmlEntities(body).substr(0, 100)}
                    </CardText>

                    <div className="d-flex justify-content-between align-items-center">
                        <NavLink to={link} className="text-decoration-none">
                            <BetweenButton icon="arrow-alt-circle-right" color="dark" size="sm">{post.read_more}</BetweenButton>
                        </NavLink>
                    </div>
                </CardBody>
            </Card>
        </Col>;
    }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(Post);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Collapse, Nav } from 'reactstrap';

import NavigationItem from './NavigationItem/NavigationItem';

class NavigationItems extends Component {
    render() {
        const {
            content: {
                cms: {
                    pages: { frontend: { header: { menu } } }
                }
            },
            isOpen
        } = this.props;

        return (
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto d-flex align-items-center" navbar>
                    <NavigationItem icon="home" href="/">{menu.home}</NavigationItem>
                    <NavigationItem icon="user" href="/#about">{menu.about}</NavigationItem>
                    <NavigationItem icon="book" href="//tutoriels.themasterofarts.com">{menu.courses}</NavigationItem>
                    <NavigationItem exact={false} icon="plane" href="/products">{menu.products}</NavigationItem>
                    <NavigationItem exact={false} icon="blog" href="/posts">{menu.posts}</NavigationItem>
                    <NavigationItem icon="envelope" href="#footer">{menu.contact}</NavigationItem>
                </Nav>
            </Collapse>
        );
    }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(NavigationItems);
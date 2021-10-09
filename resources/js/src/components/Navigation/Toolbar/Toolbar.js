import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navbar, NavbarToggler, Container } from 'reactstrap';

import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../UI/Logo/Logo';
import Languages from './Languages';

import './Toolbar.css';

class Toolbar extends Component {
    state = {
        isOpen: false,
        language: null,
    }



    // Component methods
    toggle = () => this.setState(prevState => ({ isOpen: !prevState.isOpen }))

    setLanguage = id => this.props.set(id)



    // Lifecycle methods
    componentDidMount() {
        this.setState({ language: this.props.content.languages.find(l => l.abbr === localStorage.getItem('lang')) });
    }

    componentDidUpdate(prevProps) {
        if (JSON.stringify(prevProps.content.cms) !== JSON.stringify(this.props.content.cms)) this.setState({ language: this.props.content.languages.find(l => l.abbr === localStorage.getItem('lang')) });
    }

    render() {
        const { isOpen, language } = this.state;
        const {
            content: {
                languages
            },
        } = this.props;

        return (
            <div className="Toolbar fixed-top dark">
                <Container >
                    <Navbar color="transparent" dark expand="lg">
                        <Link className="text-decoration-none navbar-brand" to="/"><Logo /></Link>

                        <div className="d-flex align-items-center d-lg-none">
                            <div>
                                <NavbarToggler onClick={this.toggle} />
                            </div>

                            <div className="pl-3">
                                <Languages languages={languages} set={this.setLanguage} language={language} />
                            </div>
                        </div>

                        <NavigationItems isOpen={isOpen} />

                        <div className="d-none d-lg-block pl-3">
                            <Languages languages={languages} set={this.setLanguage} language={language} />
                        </div>
                    </Navbar>
                </Container>
            </div>
        )
    }
};

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    set: id => dispatch(setLanguage(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
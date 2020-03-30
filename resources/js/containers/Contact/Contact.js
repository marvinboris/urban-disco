import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row, Input } from 'reactstrap';
import $ from 'jquery';

import Title from '../../components/UI/Titles/Title/Title';
import PresentationalContainer from '../../components/UI/PresentationalContainer/PresentationalContainer';
import Banner from '../../components/UI/Banner/Banner';
import ContactInfo from './ContactInfo/ContactInfo';
import BetweenButton from '../../components/UI/Button/BetweenButton/BetweenButton';
import Spinner from '../../components/UI/Spinner/Spinner';

import * as actions from '../../store/actions';

class Contact extends Component {
    state = {
        iframe: false
    }

    componentDidMount() {
        if (this.props.auth.authPage) this.props.onAuthPageOff();
        if (this.props.auth.userPage) this.props.onUserPageOff();
    }

    render() {
        const content = <iframe width="100%" height="350" src="https://maps.google.com/maps?width=700&amp;height=150&amp;hl=en&amp;q=La%20maison%20du%20bitcoin+(Auto-%C3%A9cole%20Universit%C3%A9)&amp;ie=UTF8&amp;t=&amp;z=17&amp;iwloc=B&amp;output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" />;

        return (
            <Col xs={12} className="Contact p-0">
                <Banner title="Contact" />

                <PresentationalContainer>
                    <div className="py-5">
                        {content}
                    </div>
                </PresentationalContainer>

                <PresentationalContainer bg="transparent">
                    <div className="text-center py-5">
                        <Title>Contact Us</Title>

                        <p className="mb-4 text-300">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

                        <Row>
                            <ContactInfo icon="search-location" title="Address">
                                Douala - Cameroun<br />
                                Akwa, Mobile Bonakouamoung<br />
                                Sis en face Beneficial Life
                            </ContactInfo>

                            <ContactInfo icon="phone" title="Phone">
                                (+237) 123 345 545<br />
                                (+237) 123 345 545
                            </ContactInfo>

                            <ContactInfo icon="envelope" title="E-mail">
                                <div><a href="mailto:contact@themasterofarts.com" className="text-reset text-decoration-none">contact@themasterofarts.com</a></div>
                                <div><a href="mailto:themasterofarts64@gmail.com" className="text-reset text-decoration-none">themasterofarts64@gmail.com</a></div>
                            </ContactInfo>
                        </Row>

                        <form className="text-left mt-5">
                            <div className="form-group">
                                <Input type="text" placeholder="Your name" />
                            </div>
                            <div className="form-group">
                                <Input type="email" placeholder="Your e-mail address" />
                            </div>
                            <div className="form-group">
                                <Input type="text" placeholder="Message subject" />
                            </div>
                            <div className="form-group">
                                <Input type="textarea" placeholder="Your message" />
                            </div>
                            <div className="form-group">
                                <BetweenButton pill icon="arrow-alt-circle-right" color="dark">Submit</BetweenButton>
                            </div>
                        </form>
                    </div>
                </PresentationalContainer>
            </Col>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onAuthPageOff: () => dispatch(actions.authPageOff()),
    onUserPageOff: () => dispatch(actions.userPageOff()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import FooterBlock from './FooterBlock/FooterBlock';
import Logo from '../UI/Logo/Logo';
import CenterButton from '../UI/Button/CenterButton/CenterButton';

import Facebook from '../../../../public/images/change-Facebook-page-name1@2x.png';
import Background from "../../../../public/images/Layer_5.png";
import TekZone from "../../../../public/images/cropped-cropped-TekZone-Logo-Transparent.png";

const footer = () => (
    <div className="position-relative" style={{ background: 'linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .45)), url("' + Background + '") no-repeat center', backgroundSize: 'cover' }}>
        <div className="position-absolute w-100 h-100 bg-dark-gradient" style={{ opacity: .7, top: 0, zIndex: 1 }} />
        <div className="position-relative" style={{ zIndex: 2 }}>
            <Container>
                <footer className="text-light py-5">
                    <Row>
                        <Col>
                            <Logo big />
                            <FooterBlock title="Address" className="mt-4">
                                <p className="text-300">
                                    Douala - Cameroun<br />Akwa, Mobile Bonakouamoung <br />Sis en face Beneficial Life
                        </p>
                            </FooterBlock>
                        </Col>
                        <Col lg={4}>
                            <FooterBlock title="Phone & Email">
                                <dl className="d-flex flex-wrap">
                                    <div className="flex-fill w-100 d-flex">
                                        <dl>
                                            <FontAwesomeIcon icon="phone-square" className="text-white mr-2" />
                                            <strong>Online</strong>:
                                </dl>
                                        <div />
                                        <dl className="flex-grow-1 pl-sm-4 text-300">
                                            <div><a href="tel:(+237) 123 345 545" className="text-white text-decoration-none">(+237) 123 345 545</a></div>
                                            <div><a href="tel:(+237) 123 345 545" className="text-white text-decoration-none">(+237) 123 345 545</a></div>
                                        </dl>
                                    </div>

                                    <div className="flex-fill w-100 d-flex">
                                        <dl>
                                            <FontAwesomeIcon icon="envelope" className="text-white mr-2" />
                                            <strong>Email</strong>:
                                </dl>
                                        <div />
                                        <dl className="flex-grow-1 pl-sm-4 text-300">
                                            <div><a href="mailto:contact@themasterofarts.com" className="text-white text-decoration-none">contact@themasterofarts.com</a></div>
                                            <div><a href="mailto:themasterofarts64@gmail.com" className="text-white text-decoration-none">themasterofarts64@gmail.com</a></div>
                                        </dl>
                                    </div>
                                </dl>
                            </FooterBlock>

                            <FooterBlock title="Signup to our Newsletter">
                                <form>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <input type="email" placeholder="Email Address" className="form-control rounded-pill bg-white-10 rounded-right-0 border-white-50" />
                                            <div className="input-group-append">
                                                <div className="input-group-btn">
                                                    <CenterButton color="light" className="rounded-left-0" pill>Send</CenterButton>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </FooterBlock>
                        </Col>
                        <Col>
                            <FooterBlock title="Our partners">
                                <div className="d-flex align-items-center">
                                    <div className="pr-2"><Logo /></div>
                                    <div className="pr-2">
                                        <img src={TekZone} height={80} />
                                    </div>
                                </div>
                            </FooterBlock>

                            <FooterBlock title="Facebook Likes" className="mt-4">
                                <div className="w-100"><img src={Facebook} className="img-fluid" /></div>
                            </FooterBlock>
                        </Col>
                        <Col lg={3}>
                            <FooterBlock title="Find us on Maps">
                                <div className="rounded overflow-hidden">
                                    <iframe width="100%" height="150" src="https://maps.google.com/maps?width=700&amp;height=150&amp;hl=en&amp;q=La%20maison%20du%20bitcoin+(Auto-%C3%A9cole%20Universit%C3%A9)&amp;ie=UTF8&amp;t=&amp;z=17&amp;iwloc=B&amp;output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" />
                                </div>
                            </FooterBlock>
                        </Col>
                    </Row>
                </footer>
                <footer className="text-light pb-4">
                    <div className="border-top border-white-20 d-flex justify-content-between align-items-center pt-4">
                        <div>
                            © Copyrights 2020 <span className="text-white text-700">The Master of Arts 64</span>. All rights reserved.
                        </div>

                        <div className="d-flex">
                            <FontAwesomeIcon size="2x" icon={["fab", "facebook-square"]} className="mr-3" />
                            <FontAwesomeIcon size="2x" icon={["fab", "twitter-square"]} className="mr-3" />
                            <FontAwesomeIcon size="2x" icon={["fab", "linkedin"]} className="mr-3" />
                            <FontAwesomeIcon size="2x" icon={["fab", "instagram"]} className="mr-3" />
                            <FontAwesomeIcon size="2x" icon={["fab", "skype"]} className="mr-3" />
                            <FontAwesomeIcon size="2x" icon={["fab", "youtube"]} />
                        </div>
                    </div>
                </footer>
            </Container>
        </div>
    </div>
);

export default footer;

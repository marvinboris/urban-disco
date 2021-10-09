import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Col, Row } from 'reactstrap';

import FooterBlock from './FooterBlock/FooterBlock';
import Logo from '../UI/Logo/Logo';
import CenterButton from '../UI/Button/CenterButton/CenterButton';

import Facebook from '../../assets/images/change-Facebook-page-name1@2x.png';
import Background from "../../assets/images/Layer_5.png";

class Footer extends Component {
    render() {
        const {
            content: {
                cms: {
                    global: { app_name }, pages: { frontend: { footer: { top, bottom } } }
                }
            }
        } = this.props;

        return (
            <div className="position-relative" id="footer" style={{ background: 'linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .45)), url("' + Background + '") no-repeat center', backgroundSize: 'cover' }}>
                <div className="position-absolute w-100 h-100 bg-dark-gradient" style={{ opacity: .7, top: 0, zIndex: 1 }} />
                <div className="position-relative" style={{ zIndex: 2 }}>
                    <Container>
                        <footer className="text-light py-5">
                            <Row>
                                <Col>
                                    <Logo big />
                                    <FooterBlock title={top.address.title} className="mt-4">
                                        <p className="text-300">
                                            {top.address.cm}
                                        </p>

                                        <p className="text-300">
                                            {top.address.fr}
                                        </p>
                                    </FooterBlock>
                                </Col>
                                <Col lg={4}>
                                    <FooterBlock title={top.phone_email.title}>
                                        <dl className="d-flex flex-wrap">
                                            <div className="flex-fill w-100 d-flex">
                                                <dl>
                                                    <i className="fas fa-phone-square text-white mr-2" />
                                                    <strong>{top.phone_email.phone.label}</strong>:
                                                </dl>
                                                <div />
                                                <dl className="flex-grow-1 pl-sm-4 text-300">
                                                    {top.phone_email.phone.value.map(val => <div key={val + Math.random()}><a href={"tel:" + val} className="text-white text-decoration-none">{val}</a></div>)}
                                                </dl>
                                            </div>

                                            <div className="flex-fill w-100 d-flex">
                                                <dl>
                                                    <i className="fas fa-envelope text-white mr-2" />
                                                    <strong>{top.phone_email.email.label}</strong>:
                                                </dl>
                                                <div />
                                                <dl className="flex-grow-1 pl-sm-4 text-300">
                                                    {top.phone_email.email.value.map(val => <div key={val + Math.random()}><a href={"mailto:" + val} className="text-white text-decoration-none">{val}</a></div>)}
                                                </dl>
                                            </div>
                                        </dl>
                                    </FooterBlock>

                                    <FooterBlock title={top.newsletter.title}>
                                        <form>
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <input type="email" placeholder={top.newsletter.form.email} className="form-control rounded-pill bg-white-10 rounded-right-0 border-white-50" />
                                                    <div className="input-group-append">
                                                        <div className="input-group-btn">
                                                            <CenterButton color="light" className="rounded-left-0" pill>{top.newsletter.form.submit}</CenterButton>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </FooterBlock>
                                </Col>
                                <Col>
                                    <FooterBlock title={top.partners.title}>
                                        <div className="d-flex align-items-center">
                                            {top.partners.body.map(val => <div key={val + Math.random()} className="pr-2">
                                                <img src={val} height={80} />
                                            </div>)}
                                        </div>
                                    </FooterBlock>

                                    <FooterBlock title={top.facebook_likes.title} className="mt-4">
                                        <a className="w-100 text-decoration-none text-reset d-block" href={bottom.social_networks.facebook}><img src={Facebook} className="img-fluid" /></a>
                                    </FooterBlock>
                                </Col>
                                {/* <Col lg={3}>
                            <FooterBlock title="Nous retrouver sur Maps">
                                <div className="rounded overflow-hidden mb-3">
                                    <iframe width="100%" height="150" src="//maps.google.com/maps?width=700&amp;height=150&amp;hl=en&amp;q=La%20maison%20du%20bitcoin+(Auto-%C3%A9cole%20Universit%C3%A9)&amp;ie=UTF8&amp;t=&amp;z=17&amp;iwloc=B&amp;output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" />
                                </div>
                                
                                <div className="rounded overflow-hidden">
                                    <iframe width="100%" height="150" src="//maps.google.com/maps?width=700&amp;height=150&amp;hl=en&amp;q=78+Rte+du+Rhin,+67400+Illkirch-Graffenstaden&amp;ie=UTF8&amp;t=&amp;z=17&amp;iwloc=B&amp;output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" />
                                </div>
                            </FooterBlock>
                        </Col> */}
                            </Row>
                        </footer>
                        <footer className="text-light pb-4">
                            <div className="border-top border-white-20 d-flex justify-content-between align-items-center pt-4">
                                <div>
                                    © Copyrights 2020 <span className="text-white text-700">{app_name}</span>. {bottom.all_rights_reserved}.
                                </div>

                                <div className="d-flex">
                                    <a href={bottom.social_networks.facebook} className="mr-3"><i className="fab fa-2x fa-facebook-square text-facebook" /></a>
                                    <a href={bottom.social_networks.linkedin} className="mr-3"><i className="fab fa-2x fa-linkedin text-linkedin" /></a>
                                    <a href={bottom.social_networks.youtube} className="mr-3"><i className="fab fa-2x fa-youtube-square text-youtube" /></a>
                                    <a href={bottom.social_networks.instagram} className="mr-3"><i className="fab fa-2x fa-instagram-square text-black" /></a>
                                    <a href={bottom.social_networks.whatsapp}><i className="fab fa-2x fa-whatsapp-square text-whatsapp" /></a>
                                </div>
                            </div>
                        </footer>
                    </Container>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(Footer);

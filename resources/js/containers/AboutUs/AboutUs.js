import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row, Container } from 'reactstrap';

import PresentationalContainer from '../../components/UI/PresentationalContainer/PresentationalContainer';
import TeamMemberCard from '../../components/UI/TeamMemberCard/TeamMemberCard';
import WithPoint from '../../components/UI/WithPoint/WithPoint';
import BetweenButton from '../../components/UI/Button/BetweenButton/BetweenButton';
import Banner from '../../components/UI/Banner/Banner';
import Title from "../../components/UI/Titles/Title/Title";
import ClientBlock from './ClientBlock/ClientBlock';
import InfoBlock from './InfoBlock/InfoBlock';
import * as actions from '../../store/actions';

// Who We Are Image
import WhoWeAre from '../../../../public/images/Tab01.jpg';

// Our Team Images
import JohnAlverosa from '../../../../public/images/men-images-png-1@2x.png';
import PaloAltonio from '../../../../public/images/product_111_11@2x.png';
import DoeBorison from '../../../../public/images/istockphoto-531547724-612x612@2x.png';

// Info Block Background
import InfoBlockBackground from '../../../../public/images/ABOUT1.jpg';

class AboutUs extends Component {
    componentDidMount() {
        if (this.props.auth.authPage) this.props.onAuthPageOff();
        if (this.props.auth.userPage) this.props.onUserPageOff();
    }

    render() {
        return (
            <Col xs={12} className="AboutUs p-0">
                <Banner title="About Us" />

                <PresentationalContainer innerClassName="py-5">
                    <Row className="align-items-center">
                        <Col lg={5}>
                            <img src={WhoWeAre} className="img-fluid" />
                        </Col>

                        <Col lg={7}>
                            <Title>Who We Are?</Title>

                            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies pretium nisi quis interdum. Duis elit purus, suscipit et quam sit amet, fringilla semper nisi. Ut sed pellentesque lectus. Nullam quis urna maximus, cursus arcu sit amet, sagittis elit.</p>

                            <p>Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.consequat vitae, eleifend ac, enim. Quisque rutrum. Aenean imperdiet.</p>
                        </Col>
                    </Row>
                </PresentationalContainer>

                <div className="position-relative" style={{ background: 'linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .45)), url("' + InfoBlockBackground + '") no-repeat center', backgroundSize: 'cover' }}>
                    <div className="position-absolute w-100 h-100 bg-dark-gradient" style={{ opacity: .7, top: 0, zIndex: 1 }} />
                    <div className="position-relative" style={{ zIndex: 2 }}>
                        <Container className="py-5">
                            <Row>
                                <InfoBlock icon="hourglass" number={164} title="Hours per week" />
                                <InfoBlock icon="code" number={20000} title="Lines of code" />
                                <InfoBlock icon="cogs" number={1000} title="Projects" />
                                <InfoBlock icon="file-image" number={2000} title="Dribble" />
                            </Row>
                        </Container>
                    </div>
                </div>

                <PresentationalContainer>
                    <div className="text-center py-5">
                        <Title>Our team</Title>

                        <p className="mb-4 text-300">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

                        <Row>
                            <TeamMemberCard name="John Alverosa" title="CEO" src={JohnAlverosa} />
                            <TeamMemberCard name="Palo Altonio" title="SEO Marketing" src={PaloAltonio} />
                            <TeamMemberCard name="Doe Borison" title="Technician" src={DoeBorison} />
                            <TeamMemberCard name="John Alverosa" title="Counselor" src={JohnAlverosa} />
                        </Row>
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

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);

import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Container, Row, Button } from "reactstrap";

import Feedback from '../../../components/Feedback/Feedback';
import Error from '../../../components/Error/Error';
import PresentationalContainer from "../../../components/UI/PresentationalContainer/PresentationalContainer";
import HomeCarousel from "./Carousel/Carousel";
import BetweenButton from "../../../components/UI/Button/BetweenButton/BetweenButton";
import CenterButton from "../../../components/UI/Button/CenterButton/CenterButton";
import Title from "../../../components/UI/Titles/Title/Title";
import ArticleCard from "../../../components/UI/ArticleCard/ArticleCard";
import Post from "../../../components/UI/Post";
import UnderCarouselBlock from "./UnderCarouselBlock/UnderCarouselBlock";
import Characteristic from "./Characteristic/Characteristic";
import Spinner from "../../../components/UI/Spinner";

import { updateObject } from "../../../shared/utility";
import { getHome } from '../../../store/actions/frontend/home';

import "./Home.css";

class Home extends Component {
    componentDidMount() {
        this.props.get();
    }

    render() {
        const {
            content: {
                cms: {
                    pages: { frontend: { footer: { bottom: { social_networks: { whatsapp } } }, pages: { home: { banner, features, qualification_assistance, products: products_cms, squares, blog } } } }
                }
            },
            frontend: { home: { loading, error, message, products = [], posts = [] } }
        } = this.props;
        let content;
        const lang = localStorage.getItem('lang');

        const feedback = <Feedback message={message} />
        const errors = <>
            <Error err={error} />
        </>;

        const articleCards = products.map(product => <ArticleCard key={Math.random() + JSON.stringify(product)} {...updateObject(product, { name: product.name[lang], description: product.description[lang] })} />);
        const newsCards = posts.map(post => <Post key={JSON.stringify(post)} {...updateObject(post, { title: post.title[lang], body: post.body[lang] })} />);
        const characteristicsItems = qualification_assistance.points.map((point, index) => <Characteristic key={point} number={index + 1}>{point}</Characteristic>)

        if (loading) content = <Spinner />;
        else content = <>
            <PresentationalContainer bg="transparent">
                <div className="text-center py-5" id="products">
                    <Title>{products_cms.title}</Title>

                    <p className="mb-4 text-300">{products_cms.description}</p>

                    <Row>
                        {articleCards}
                    </Row>
                </div>
            </PresentationalContainer>

            <div className="position-relative container-fluid bg-white" id="about">
                <div className="position-absolute h-100 w-100" style={{ top: 0, left: 0 }}>
                    <Container className="h-100">
                        <Row className="justify-content-end position-relative align-items-center" style={{ height: '50%' }}>
                            <Col lg={6} className="pl-4">
                                <Title>{squares.education_kits.title}</Title>

                                <p className="mb-4 text-300">
                                    {squares.education_kits.description}
                                </p>

                                <a href={whatsapp} className="text-decoration-none text-reset">
                                    <CenterButton pill color="dark">{squares.education_kits.ask_price}</CenterButton>
                                </a>
                            </Col>
                        </Row>

                        <Row className="position-relative align-items-center" style={{ height: '50%' }}>
                            <Col lg={6} className="pr-4">
                                <Title>{squares.online_workshops.title}</Title>

                                <p className="mb-4 text-300">
                                    {squares.online_workshops.description}
                                </p>

                                <a href={whatsapp} className="text-decoration-none text-reset">
                                    <CenterButton pill color="dark">{squares.online_workshops.ask_price}</CenterButton>
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Row className="align-items-center">
                    <Col lg={6} className="embed-responsive embed-responsive-4by3" style={{ background: 'url("' + squares.education_kits.img + '") no-repeat center', backgroundSize: 'cover' }}></Col>
                    <Col lg={6}></Col>
                    <Col lg={6}></Col>
                    <Col lg={6} className="embed-responsive embed-responsive-4by3" style={{ background: 'url("' + squares.online_workshops.img + '") no-repeat center', backgroundSize: 'cover' }}></Col>
                </Row>
            </div>

            <PresentationalContainer bg="transparent">
                <div className="text-center py-5">
                    <Title>{blog.title}</Title>

                    <p className="mb-4 text-300">{blog.description}</p>

                    <Row>
                        {newsCards}
                    </Row>
                </div>
            </PresentationalContainer>
        </>;

        return (
            <Col xs={12} className="Home p-0">
                <div className="position-relative min-vh-100">
                    <div className="position-absolute h-100 w-100">
                        <Col sm={9} xl={6} lg={7} md={8} id="banner" className="text-white mx-auto text-center" >
                            <h1 className="display-4 text-700">{banner.body.title}</h1>

                            <p className="text-300 text-large">
                                {banner.body.description}
                            </p>

                            <div className="text-large mt-5">
                                <a href={whatsapp} className="text-decoration-none text-reset">
                                    <BetweenButton size="lg" color="light" pill icon="dollar-sign" className="mr-3">
                                        {banner.body.ask_price}
                                    </BetweenButton>
                                </a>

                                <a href="//tutoriels.themasterofarts.com" className="text-decoration-none text-reset">
                                    <BetweenButton size="lg" color="outline-light" pill icon="dollar-sign">
                                        {banner.body.crowdfunding}
                                    </BetweenButton>
                                </a>
                            </div>
                        </Col>
                        <HomeCarousel items={banner.carousel} />
                    </div>
                </div>

                <PresentationalContainer user bg="transparent">
                    <Container className="position-relative py-5" style={{ transform: "translateY(0%) scale(1)", transformOrigin: 'center', zIndex: 11 }}>
                        <div className="flex">
                            <Row className="m-0">
                                <UnderCarouselBlock
                                    border
                                    icon="plane"
                                    title={features.from_air}
                                >
                                    {/* Pellentesque eget nunc sit amet urna ullamcorper fermentum et eu leo. */}
                                </UnderCarouselBlock>
                                <UnderCarouselBlock
                                    border
                                    icon="fighter-jet"
                                    title={features.best_drones}
                                >
                                    {/* Pellentesque eget nunc sit amet urna ullamcorper fermentum et eu leo. */}
                                </UnderCarouselBlock>
                                <UnderCarouselBlock
                                    border
                                    icon="tachometer-alt"
                                    title={features.speed}
                                >
                                    {/* Pellentesque eget nunc sit amet urna ullamcorper fermentum et eu leo. */}
                                </UnderCarouselBlock>
                                <UnderCarouselBlock
                                    icon="robot"
                                    title={features.long_range}
                                >
                                    {/* Pellentesque eget nunc sit amet urna ullamcorper fermentum et eu leo. */}
                                </UnderCarouselBlock>
                            </Row>
                        </div>

                        <div className="text-center mt-5">
                            <a href={whatsapp} className="text-decoration-none text-reset">
                                <CenterButton pill color="dark">{features.ask_price}</CenterButton>
                            </a>
                        </div>
                    </Container>
                </PresentationalContainer>

                <div className="position-relative bg-white">
                    <div className="position-absolute w-50 h-100" style={{ top: 0, right: 0, background: 'url("' + qualification_assistance.img + '") no-repeat top right', backgroundSize: 'contain' }}></div>
                    <Container style={{ zIndex: 2 }} className="py-5">
                        <Row className="py-5">
                            <Col lg={8}>
                                <Title>{qualification_assistance.title}</Title>

                                <p className="text-300 w-75 mb-4">
                                    {qualification_assistance.description}
                                </p>

                                <Row className="text-300">
                                    {characteristicsItems}
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>

                {feedback}
                {errors}
                {content}
            </Col>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: () => dispatch(getHome()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);

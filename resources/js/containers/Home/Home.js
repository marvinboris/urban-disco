import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Container, Row, Button } from "reactstrap";

import "./Home.css";
import PresentationalContainer from "../../components/UI/PresentationalContainer/PresentationalContainer";
import HomeCarousel from "./Carousel/Carousel";
import BetweenButton from "../../components/UI/Button/BetweenButton/BetweenButton";
import CenterButton from "../../components/UI/Button/CenterButton/CenterButton";
import Title from "../../components/UI/Titles/Title/Title";
import ArticleCard from "../../components/UI/ArticleCard/ArticleCard";
import NewsCard from "../../components/UI/NewsCard/NewsCard";
import UnderCarouselBlock from "./UnderCarouselBlock/UnderCarouselBlock";
import Characteristic from "./Characteristic/Characteristic";
import Spinner from "../../components/UI/Spinner/Spinner";

import * as actions from "../../store/actions";

import Drone from "../../../../public/images/Drone.png";
import FotoTop from "../../../../public/images/foto_top.png";
import FotoBottom from "../../../../public/images/foto_bottom.png";

// Products Images
import DroneBlh9180 from "../../../../public/images/blh9180-11.png";
import HubsanH501S from "../../../../public/images/Hubsan-H501S-X4-21.png";
import CheersonCX10c from "../../../../public/images/pf726003ba-6.png";
import EachineRacer250ARF from "../../../../public/images/6259381_R_SET.png";
import DroneXiroXplorer from "../../../../public/images/xiro-xplorer-g-idealni.png";
import HubsanX4Plus from "../../../../public/images/hubsan-x4-plus-mini-quadcopter.png";

// Blog Images
import Blog1 from "../../../../public/images/ada9a09acea936d776a6f55c82778c43_L.jpg";
import Blog2 from "../../../../public/images/ffee2447b152494b43d9816faaea83c8_L.jpg";
import Blog3 from "../../../../public/images/2ff2ba0051687eef5ca0459cf942940c_L.jpg";

const productsInfo = [
    {
        title: "Drone blh9180",
        src: DroneBlh9180,
        link: "drone-blh9180"
    },
    {
        title: "Hubsan-H501S",
        src: HubsanH501S,
        link: "hubsan-h501s"
    },
    {
        title: "Cheerson CX-10c",
        src: CheersonCX10c,
        link: "cheerson-cx-10c"
    },
    {
        title: "Eachine Racer 250 ARF",
        src: EachineRacer250ARF,
        link: "eachine-racer-250-arf"
    },
    {
        title: "Drone Xiro-Xplorer",
        src: DroneXiroXplorer,
        link: "drone-xiro-xplorer"
    },
    {
        title: "Hubsan-x4-plus",
        src: HubsanX4Plus,
        link: "hubsan-x4-plus"
    },
];

const blogInfo = [
    {
        src: Blog1,
        link: 'drones-successfully-tested-to-inspect',
        title: "Drones succesfully tested to inspect",
        children: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."
    },
    {
        src: Blog2,
        link: 'drone-journey-to-center',
        title: "Drone journey to the center",
        children: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."
    },
    {
        src: Blog3,
        link: 'best-drones-2019',
        title: "The best drones of 2019",
        children: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."
    },
];

class Home extends Component {
    state = {
        productsInfo: null,
        blogInfo: null
    }

    componentDidMount() {
        if (this.props.auth.authPage) this.props.onAuthPageOff();
        if (this.props.auth.userPage) this.props.onUserPageOff();

        setTimeout(() => {
            this.setState({ productsInfo, blogInfo });
        }, 3000);
    }

    render() {
        const { productsInfo, blogInfo } = this.state;
        let content = <Spinner />

        if (productsInfo && blogInfo) {
            const articleCards = productsInfo.map(({ title, src }) => <ArticleCard key={src} title={title} src={src} subtitle="" />);
            const newsCards = blogInfo.map(({ src, link, title, children }) => <NewsCard key={link} src={src} link={link} title={title}>{children}</NewsCard>);

            content = <>
                <PresentationalContainer bg="transparent">
                    <div className="text-center py-5">
                        <Title>Our products</Title>

                        <p className="mb-4 text-300">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

                        <Row>
                            {articleCards}
                        </Row>
                    </div>
                </PresentationalContainer>

                <div className="position-relative container-fluid bg-white">
                    <div className="position-absolute h-100 w-100" style={{ top: 0, left: 0 }}>
                        <Container className="h-100">
                            <Row className="justify-content-end position-relative align-items-center" style={{ height: '50%' }}>
                                <Col lg={6} className="pl-4">
                                    <Title>Nature from the air</Title>

                                    <p className="mb-4 text-300">
                                        Pellentesque eget nunc sit amet urna ullamcorper fermentum et eu leo. Nunc vel nibh tempor, pharetra lectus congue, luctus orci nec ultricies sem efficitur quis. Integer bibendum eget metus ac accumsan.
                                            </p>

                                    <CenterButton pill color="dark">Ask for price</CenterButton>
                                </Col>
                            </Row>

                            <Row className="position-relative align-items-center" style={{ height: '50%' }}>
                                <Col lg={6} className="pr-4">
                                    <Title>City from the air</Title>

                                    <p className="mb-4 text-300">
                                        Pellentesque eget nunc sit amet urna ullamcorper fermentum et eu leo. Nunc vel nibh tempor, pharetra lectus congue, luctus orci nec ultricies sem efficitur quis. Integer bibendum eget metus ac accumsan.
                                    </p>

                                    <CenterButton pill color="dark">Ask for price</CenterButton>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <Row className="align-items-center">
                        <Col lg={6} className="embed-responsive embed-responsive-4by3" style={{ background: 'url("' + FotoTop + '") no-repeat center', backgroundSize: 'cover' }}></Col>
                        <Col lg={6}></Col>
                        <Col lg={6}></Col>
                        <Col lg={6} className="embed-responsive embed-responsive-4by3" style={{ background: 'url("' + FotoBottom + '") no-repeat center', backgroundSize: 'cover' }}></Col>
                    </Row>
                </div>

                <PresentationalContainer bg="transparent">
                    <div className="text-center py-5">
                        <Title>Our blog</Title>

                        <p className="mb-4 text-300">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

                        <Row>
                            {newsCards}
                        </Row>
                    </div>
                </PresentationalContainer>
            </>;
        }

        return (
            <Col xs={12} className="Home p-0">
                <div className="position-relative min-vh-100">
                    <div className="position-absolute h-100 w-100">
                        <Col sm={9} xl={6} lg={7} md={8} id="banner" className="text-white mx-auto text-center" >
                            <h1 className="display-4 text-700">Get the best drones here</h1>

                            <p className="text-300 text-large">
                                Pellentesque eget nunc sit amet urna ullamcorper fermentum et eu leo.
                                Nunc vel nibh tempor, pharetra lectus congue, luctus orci.
                            </p>

                            <div className="text-large mt-5">
                                <BetweenButton size="lg" color="light" pill icon="dollar-sign" className="mr-3">
                                    Ask for price
                                </BetweenButton>
                                <BetweenButton size="lg" color="outline-light" pill icon="play">
                                    Watch video
                                </BetweenButton>
                            </div>
                        </Col>
                        <HomeCarousel />
                    </div>
                </div>

                <PresentationalContainer user bg="transparent">
                    <Container className="position-relative py-5" style={{ transform: "translateY(0%) scale(1)", transformOrigin: 'center', zIndex: 11 }}>
                        <div className="flex">
                            <Row className="m-0">
                                <UnderCarouselBlock
                                    border
                                    icon="plane"
                                    title="From air"
                                >
                                    Pellentesque eget nunc sit amet urna ullamcorper fermentum et eu leo.
                                    </UnderCarouselBlock>
                                <UnderCarouselBlock
                                    border
                                    icon="fighter-jet"
                                    title="Best drones"
                                >
                                    Pellentesque eget nunc sit amet urna ullamcorper fermentum et eu leo.
                                    </UnderCarouselBlock>
                                <UnderCarouselBlock
                                    border
                                    icon="tachometer-alt"
                                    title="Speed"
                                >
                                    Pellentesque eget nunc sit amet urna ullamcorper fermentum et eu leo.
                                    </UnderCarouselBlock>
                                <UnderCarouselBlock
                                    icon="robot"
                                    title="Long range"
                                >
                                    Pellentesque eget nunc sit amet urna ullamcorper fermentum et eu leo.
                                    </UnderCarouselBlock>
                            </Row>
                        </div>

                        <div className="text-center mt-5">
                            <CenterButton color="dark" pill>Ask for price</CenterButton>
                        </div>
                    </Container>
                </PresentationalContainer>

                <div className="position-relative bg-white">
                    <div className="position-absolute w-75 h-100" style={{ top: 0, right: 0, background: 'url("' + Drone + '") no-repeat top right', backgroundSize: 'contain' }}></div>
                    <Container style={{ zIndex: 2 }} className="py-5">
                        <Row className="py-5">
                            <Col lg={8}>
                                <Title>Nature from the air</Title>

                                <p className="text-300 w-75 mb-4">
                                    Mauris consequat libero metus, nec ultricies sem efficitur quis. Integer bibendum eget metus ac accumsan. Integer sit amet lacus egestas, semper est quis, viverra ex.
                                </p>

                                <Row className="text-300">
                                    <Characteristic number="1">Pellentesque eget nunc sit amet urna ullamcorper fermentum et eu leo. Nunc vel nibh tempor, pharetra lectus congue, luctus orci.</Characteristic>
                                    <Characteristic number="2">Mauris consequat libero metus, nec ultricies sem efficitur quis. Integer bibendum eget metus ac accumsan.</Characteristic>
                                    <Characteristic number="3">Integer sit amet lacus egestas, semper est quis, viverra ex. Mauris consequat libero metus, nec ultricies sem efficitur quis.</Characteristic>
                                    <Characteristic number="4">Pellentesque eget nunc sit amet urna ullamcorper fermentum et eu leo. Nunc vel nibh tempor, pharetra lectus congue, luctus orci.</Characteristic>
                                    <Characteristic number="5">Mauris consequat libero metus, nec ultricies sem efficitur quis. Integer bibendum eget metus ac accumsan.</Characteristic>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>

                {content}
            </Col>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onAuthPageOff: () => dispatch(actions.authPageOff()),
    onUserPageOff: () => dispatch(actions.userPageOff())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

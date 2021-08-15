import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Container, Row, Button } from "reactstrap";

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

import "./Home.css";

import Drone from "../../../../public/images/computer.png";
import FotoTop from "../../../../public/images/photo_2021-08-07_21-08-43.jpg";
import FotoBottom from "../../../../public/images/photo_2021-08-07_21-06-47.jpg";

// Products Images
import DroneBlh9180 from "../../../../public/images/photo_2021-08-07_20-22-16.jpg";
import HubsanH501S from "../../../../public/images/photo_2021-08-07_20-23-17.jpg";
import CheersonCX10c from "../../../../public/images/image_2021-08-07_21-22-27.png";

// Blog Images
import Blog1 from "../../../../public/images/ada9a09acea936d776a6f55c82778c43_L.jpg";
import Blog2 from "../../../../public/images/ffee2447b152494b43d9816faaea83c8_L.jpg";
import Blog3 from "../../../../public/images/2ff2ba0051687eef5ca0459cf942940c_L.jpg";

const productsInfo = [
    {
        title: "DJI TELLO",
        src: DroneBlh9180,
        link: "//api.whatsapp.com/send?phone=+237%20656395217",
        price: 80000
    },
    {
        title: "Parrot ARDRONE 2.0 + GPS",
        src: HubsanH501S,
        link: "//api.whatsapp.com/send?phone=+237%20656395217",
        price: 120000
    },
    {
        title: "Atelier drones programmables avec Python",
        src: CheersonCX10c,
        link: "//api.whatsapp.com/send?phone=+237%20656395217",
        price: 10000
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
            const articleCards = productsInfo.map(product => <ArticleCard key={Math.random() + JSON.stringify(product)} {...product} />);
            const newsCards = blogInfo.map(({ src, link, title, children }) => <NewsCard key={link} src={src} link={link} title={title}>{children}</NewsCard>);

            content = <>
                <PresentationalContainer bg="transparent">
                    <div className="text-center py-5" id="products">
                        <Title>Nos produits</Title>

                        <p className="mb-4 text-300">Sélectionnez le produit qui vous intéresse et vous recevrez les instructions de paiement et livraison sur WhatsApp.</p>

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
                                    <Title>Des kits d'éducation</Title>

                                    <p className="mb-4 text-300">
                                        Fournissez vous en matériel d'éducation pour vos projets, Nos kits d'education adaptés pour des prototypages de drones modulaires (aériens, sous-marins, mobiles)
                                    </p>

                                    <a href="//api.whatsapp.com/send?phone=+237%20656395217" className="text-decoration-none text-reset">
                                        <CenterButton pill color="dark">Demander le prix</CenterButton>
                                    </a>
                                </Col>
                            </Row>

                            <Row className="position-relative align-items-center" style={{ height: '50%' }}>
                                <Col lg={6} className="pr-4">
                                    <Title>Ateliers en ligne</Title>

                                    <p className="mb-4 text-300">
                                        Formez vous depuis chez vous chaque weekend de manière accélerée avec vos kits de manière personnalisée et a la demande
                                    </p>

                                    <a href="//api.whatsapp.com/send?phone=+237%20656395217" className="text-decoration-none text-reset">
                                        <CenterButton pill color="dark">Demander le prix</CenterButton>
                                    </a>
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

                {/* <PresentationalContainer bg="transparent">
                    <div className="text-center py-5">
                        <Title>Notre blog</Title>

                        <p className="mb-4 text-300">Retrouvez les dernières nouvelles et actualités du domaine qui est le nôtre.</p>

                        <Row>
                            {newsCards}
                        </Row>
                    </div>
                </PresentationalContainer> */}
            </>;
        }

        return (
            <Col xs={12} className="Home p-0">
                <div className="position-relative min-vh-100">
                    <div className="position-absolute h-100 w-100">
                        <Col sm={9} xl={6} lg={7} md={8} id="banner" className="text-white mx-auto text-center" >
                            <h1 className="display-4 text-700">Obtenir vos kits et accessoires High Tech</h1>

                            <p className="text-300 text-large">
                                Des kits d'education, l'électronique pour vos projets , des formations certifiantes et du financement participatif.
                            </p>

                            <div className="text-large mt-5">
                                <a href="//api.whatsapp.com/send?phone=+237%20656395217" className="text-decoration-none text-reset">
                                    <BetweenButton size="lg" color="light" pill icon="dollar-sign" className="mr-3">
                                        Demander le prix
                                    </BetweenButton>
                                </a>

                                <a href="//ma64industry.themasterofarts.com" className="text-decoration-none text-reset">
                                    <BetweenButton size="lg" color="outline-light" pill icon="dollar-sign">
                                        Crowdfunding
                                    </BetweenButton>
                                </a>
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
                                    {/* Pellentesque eget nunc sit amet urna ullamcorper fermentum et eu leo. */}
                                </UnderCarouselBlock>
                                <UnderCarouselBlock
                                    border
                                    icon="fighter-jet"
                                    title="Best drones"
                                >
                                    {/* Pellentesque eget nunc sit amet urna ullamcorper fermentum et eu leo. */}
                                </UnderCarouselBlock>
                                <UnderCarouselBlock
                                    border
                                    icon="tachometer-alt"
                                    title="Speed"
                                >
                                    {/* Pellentesque eget nunc sit amet urna ullamcorper fermentum et eu leo. */}
                                </UnderCarouselBlock>
                                <UnderCarouselBlock
                                    icon="robot"
                                    title="Long range"
                                >
                                    {/* Pellentesque eget nunc sit amet urna ullamcorper fermentum et eu leo. */}
                                </UnderCarouselBlock>
                            </Row>
                        </div>

                        <div className="text-center mt-5">
                            <a href="//api.whatsapp.com/send?phone=+237%20656395217" className="text-decoration-none text-reset">
                                <CenterButton pill color="dark">Demander le prix</CenterButton>
                            </a>
                        </div>
                    </Container>
                </PresentationalContainer>

                <div className="position-relative bg-white">
                    <div className="position-absolute w-50 h-100" style={{ top: 0, right: 0, background: 'url("' + Drone + '") no-repeat top right', backgroundSize: 'contain' }}></div>
                    <Container style={{ zIndex: 2 }} className="py-5">
                        <Row className="py-5">
                            <Col lg={8}>
                                <Title>Assistance à la Qualification</Title>

                                <p className="text-300 w-75 mb-4">
                                    Réussissez votre projet d'études en IA, Robotique, Data Science grâce à des programmes en ligne.
                                </p>

                                <Row className="text-300">
                                    <Characteristic number="1">La jeunesse de la francophonie vise les hautes ingénieries.</Characteristic>
                                    <Characteristic number="2">Un intérêt croissant pour les métiers informatiques depuis la crise du Covid.</Characteristic>
                                    <Characteristic number="3">En cycle Licence, beaucoup aspirent à des spécialisations.</Characteristic>
                                    <Characteristic number="4">Themasterofarts offre des tutoriels, du matériel, expertise et télé-expertise pour l'innovation.</Characteristic>
                                    <Characteristic number="5">Nous offrons des programmes garantissant des bourses, l'accès à des Master d'élite.</Characteristic>
                                    <Characteristic number="6">Nos partenariats rendent l'innovation possible aux jeunes entrepreneurs.</Characteristic>
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

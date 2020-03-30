import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Container, Row, Input, Button, Form, CustomInput, FormGroup } from 'reactstrap';

import Spinner from '../../components/UI/Spinner/Spinner';
import Banner from '../../components/UI/Banner/Banner';
import ArticleCard from '../../components/UI/ArticleCard/ArticleCard';
import PresentationalContainer from '../../components/UI/PresentationalContainer/PresentationalContainer';

// Products Images
import DroneBlh9180 from "../../../../public/images/blh9180-11.png";
import HubsanH501S from "../../../../public/images/Hubsan-H501S-X4-21.png";
import CheersonCX10c from "../../../../public/images/pf726003ba-6.png";
import EachineRacer250ARF from "../../../../public/images/6259381_R_SET.png";
import DroneXiroXplorer from "../../../../public/images/xiro-xplorer-g-idealni.png";
import HubsanX4Plus from "../../../../public/images/hubsan-x4-plus-mini-quadcopter.png";

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

class Products extends Component {
    state = {
        productsInfo: null
    }

    componentDidMount() {
        if (this.props.auth.authPage) this.props.onAuthPageOff();
        if (this.props.auth.userPage) this.props.onUserPageOff();

        setTimeout(() => {
            this.setState({ productsInfo });
        }, 3000);
    }

    render() {
        const productsInfo = this.state.productsInfo;
        let content = <Spinner />;

        if (productsInfo) {
            const articleCards = productsInfo.map(({ title, src, link }) => <ArticleCard key={src} title={title} src={src} link={link} subtitle="" />);

            content = <Row>
                <Col lg={9}>
                    <Form inline className="mb-5">
                        <Input type="search" className="mb-2 mr-sm-2" id="search" />
                        <Button type="submit" className="mb-2 mr-sm-2" color="dark">Go</Button>
                        <Button type="reset" className="mb-2 mr-sm-2" color="light">Reset</Button>
                        <Input type="select" className="mb-2" name="sort" id="sort">
                            <option>Sort Product by</option>
                        </Input>
                    </Form>

                    <Row>
                        {articleCards}
                    </Row>
                </Col>

                <Col>
                    <div className="mb-4">
                        <h3>Filter by Price</h3>
                        <CustomInput type="range" min={0} max={1000} />
                    </div>

                    <div className="mb-4">
                        <h3>Filter by Brands</h3>
                        <FormGroup>
                            <CustomInput type="switch" id="category_1" name="category[]" label="DJI" />
                            <CustomInput type="switch" id="category_2" name="category[]" label="Blade" />
                            <CustomInput type="switch" id="category_3" name="category[]" label="Eachine" />
                            <CustomInput type="switch" id="category_4" name="category[]" label="Denver" />
                            <CustomInput type="switch" id="category_5" name="category[]" label="Hubsan" />
                            <CustomInput type="switch" id="category_6" name="category[]" label="ImmersionRC" />
                        </FormGroup>
                    </div>
                </Col>
            </Row>;
        }

        return <Col xs={12} className="Products p-0">
            <Banner title="Products" />

            <PresentationalContainer>
                <div className="py-5">
                    <Container>
                        {content}
                    </Container>
                </div>
            </PresentationalContainer>
        </Col>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onAuthPageOff: () => dispatch(actions.authPageOff()),
    onUserPageOff: () => dispatch(actions.userPageOff()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
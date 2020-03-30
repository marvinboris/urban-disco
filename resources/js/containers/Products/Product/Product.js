import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Col, Row, Container } from 'reactstrap';

import Spinner from '../../../components/UI/Spinner/Spinner';
import Banner from '../../../components/UI/Banner/Banner';
import PresentationalContainer from '../../../components/UI/PresentationalContainer/PresentationalContainer';

// Products Images
import DroneBlh9180 from "../../../../../public/images/blh9180-11.png";
import HubsanH501S from "../../../../../public/images/Hubsan-H501S-X4-21.png";
import CheersonCX10c from "../../../../../public/images/pf726003ba-6.png";
import EachineRacer250ARF from "../../../../../public/images/6259381_R_SET.png";
import DroneXiroXplorer from "../../../../../public/images/xiro-xplorer-g-idealni.png";
import HubsanX4Plus from "../../../../../public/images/hubsan-x4-plus-mini-quadcopter.png";

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

class Product extends Component {
    state = {
        productInfo: null
    }

    componentDidMount() {
        if (this.props.auth.authPage) this.props.onAuthPageOff();
        if (this.props.auth.userPage) this.props.onUserPageOff();

        setTimeout(() => {
            const productInfo = productsInfo.find(({ link }) => link === this.props.match.params.slug);
            this.setState({ productInfo });
        }, 3000);
    }

    render() {
        const productInfo = this.state.productInfo;
        let content =
            <>
                <Banner items={[{ to: '/products', content: 'Products' }]} title="Loading..." />

                <Spinner />
            </>;

        if (productInfo) {
            const { title, src, price } = productInfo;

            content =
                <>
                    <Banner items={[{ to: '/products', content: 'Products' }]} title={title} />

                    <PresentationalContainer>
                        <div className="py-5">
                            <Container>
                                <Row>
                                    <Col md={6}>
                                        <div className="embed-responsive embed-responsive-16by9 w-100" style={{ background: 'url("' + src + '") no-repeat center', backgroundSize: 'contain' }} />
                                    </Col>

                                    <Col md={6}>
                                        <h1 className="bg-dark-gradient bg-text texet-700">{title}</h1>

                                        <hr />

                                        <h4>{price || 0} FCFA</h4>

                                        <hr />

                                        <Button color="dark">Add to cart</Button>
                                    </Col>

                                    <Col xs={12}>
                                        <h5 className="mb-4">Description</h5>

                                        <div className="text-300">
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                                            <br />
                                            <br />
                                            Lorem ipsum doloar sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </PresentationalContainer>
                </>;
        }

        return <Col xs={12} className="Products p-0">
            {content}
        </Col>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onAuthPageOff: () => dispatch(actions.authPageOff()),
    onUserPageOff: () => dispatch(actions.userPageOff()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
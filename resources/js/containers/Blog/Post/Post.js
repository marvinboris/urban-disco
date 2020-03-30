import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row, Container } from 'reactstrap';

import PresentationalContainer from '../../../components/UI/PresentationalContainer/PresentationalContainer';
import Banner from '../../../components/UI/Banner/Banner';
import Stars from '../../../components/UI/Stars/Stars';
import Sidebar from '../Sidebar/Sidebar';
import Spinner from '../../../components/UI/Spinner/Spinner';

import Blog1 from '../../../../../public/images/ada9a09acea936d776a6f55c82778c43_L.jpg';
import Blog2 from '../../../../../public/images/ffee2447b152494b43d9816faaea83c8_L.jpg';
import Blog3 from '../../../../../public/images/2ff2ba0051687eef5ca0459cf942940c_L.jpg';
import Blog4 from '../../../../../public/images/94d43e327d9303539cb1e2aac7032668_L.jpg';
import Blog5 from '../../../../../public/images/e0a70f72bdae9885bfc32d7cd19a26a1_L.jpg';
import Blog6 from '../../../../../public/images/2fa67f482133f1c934235b73c2a03954_L.jpg';

const postsBlockInfo = [
    {
        title: 'Drones successfully tested to inspect',
        author: 'Super User',
        src: Blog1,
        children: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
        link: 'drones-successfully-tested-to-inspect'
    },
    {
        title: 'Drone journey to the center',
        author: 'Super User',
        src: Blog2,
        children: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
        link: 'drone-journey-to-center'
    },
    {
        title: 'The best drones of 2019',
        author: 'Super User',
        src: Blog3,
        children: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
        link: 'best-drones-2019'
    },
    {
        title: 'The drones of CES 2019',
        author: 'Super User',
        src: Blog4,
        children: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
        link: 'drones-ces-2019'
    },
    {
        title: 'The 8 best drones to buy in 2019',
        author: 'Super User',
        src: Blog5,
        children: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
        link: '8-best-drones-buy-2019'
    },
    {
        title: 'A young woman in Photostream',
        author: 'Super User',
        src: Blog6,
        children: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
        link: 'young-woman-photostream'
    },
];

class Post extends Component {
    state = {
        postBlockInfo: null
    }

    componentDidMount() {
        if (this.props.auth.authPage) this.props.onAuthPageOff();
        if (this.props.auth.userPage) this.props.onUserPageOff();

        setTimeout(() => {
            const postBlockInfo = postsBlockInfo.find(({ link }) => link === this.props.match.params.slug);
            this.setState({ postBlockInfo });
        }, 3000);
    }

    render() {
        const postBlockInfo = this.state.postBlockInfo;
        let content =
            <>
                <Banner items={[{ to: '/blog', content: 'Blog' }]} title="Loading..." />

                <Spinner />
            </>;

        if (postBlockInfo) {
            let { author, title, src, children } = this.state.postBlockInfo;

            content = <>
                <Banner items={[{ to: '/blog', content: 'Blog' }]} title={title} />

                <PresentationalContainer>
                    <div className="py-5">
                        <Container>
                            <Row>
                                <Col lg={9}>
                                    <span className="text-decoration-none text-700 h3">{title}</span>
                                    <p>Written by <span className="text-700">{author}</span></p>

                                    <p className="d-flex align-items-center">
                                        Rate this item
                                            <Stars />
                                    </p>

                                    <div className="embed-responsive embed-responsive-16by9 my-4" style={{ background: 'url("' + src + '") no-repeat center', backgroundSize: 'cover' }} />

                                    <div className="mb-4">{children}</div>
                                </Col>

                                <Sidebar />
                            </Row>
                        </Container>
                    </div>
                </PresentationalContainer>
            </>;
        }

        return <Col xs={12} className="Blog p-0">
            {content}
        </Col>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onAuthPageOff: () => dispatch(actions.authPageOff()),
    onUserPageOff: () => dispatch(actions.userPageOff()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
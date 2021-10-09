import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Container, Input, Row } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import Feedback from '../../../components/Feedback/Feedback';
import Error from '../../../components/Error/Error';
import Banner from '../../../components/UI/Banner/Banner';
import PresentationalContainer from '../../../components/UI/PresentationalContainer/PresentationalContainer';
import Spinner from '../../../components/UI/Spinner';
import PostBlock from './PostBlock/PostBlock';
import Sidebar from './Sidebar/Sidebar';

import { updateObject } from '../../../shared/utility';
import { getPosts } from '../../../store/actions/frontend/posts';

class Blog extends Component {
    componentDidMount() {
        this.props.get(this.props.match.params.postCategorySlug);
    }

    render() {
        const {
            content: {
                cms: {
                    pages: { frontend: { pages: { posts: { banner } } } }
                }
            },
            frontend: { posts: { loading, message, error, posts = [] } }
        } = this.props;
        let content;
        const lang = localStorage.getItem('lang');

        const feedback = <Feedback message={message} />;
        const errors = <>
            <Error err={error} />
        </>;

        if (loading) content = <Spinner />;
        else {
            const postBlocks = posts.map(post => <PostBlock key={JSON.stringify(post)} {...updateObject(post, { title: post.title[lang], body: post.body[lang] })} />);

            content = <Row>
                <Col lg={9}>
                    {postBlocks}
                </Col>

                <Sidebar posts={posts.map(post => updateObject(post, { title: post.title[lang] }))} />
            </Row>;
        }


        return (
            <Col xs={12} className="Blog p-0">
                <Banner title={banner.title} />

                <PresentationalContainer>
                    <div className="py-5">
                        <Container>
                            {feedback}
                            {errors}
                            {content}
                        </Container>
                    </div>
                </PresentationalContainer>
            </Col>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: () => dispatch(getPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
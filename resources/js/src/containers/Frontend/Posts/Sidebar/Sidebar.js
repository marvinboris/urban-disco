import React, { Component } from 'react';
import { Col, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Sidebar extends Component {
    render() {
        const {
            content: {
                cms: {
                    pages: { frontend: { pages: { posts: { body: { sidebar } } } } }
                }
            },
            posts
        } = this.props;

        const popularPosts = posts.filter((p, index) => index < 3).map(({ link, photo, title }) => <div className="mb-3" key={photo}>
            <div className="mb-2"><NavLink to={link} className="text-dark">{title}</NavLink></div>
            <div className="embed-responsive embed-responsive-16by9" style={{ background: 'url("' + photo + '") no-repeat center', backgroundSize: 'cover' }} />
        </div>);

        return <Col>
            <div className="mb-4">
                <h5 className="text-500">{sidebar.search.title}</h5>
                <Input type="search" placeholder={sidebar.search.form.search + " ..."} />
            </div>

            <div className="mb-4">
                <h5 className="text-500">{sidebar.popular_posts.title}</h5>
                {popularPosts}
            </div>
        </Col>;
    };
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(Sidebar);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { htmlEntities } from '../../../../shared/utility';

class PostBlock extends Component {
    render() {
        const {
            content: {
                cms: {
                    pages: { frontend: { pages: { posts: { body: { main } } } } }
                }
            },
            author, link, photo, title, body
        } = this.props;

        return <div className="PostBlock mb-5">
            <Link to={link} className="text-decoration-none text-700 h3">{title}</Link>

            <p>{main.written_by} <span className="text-700">{author}</span></p>

            <div className="embed-responsive embed-responsive-16by9 my-4" style={{ background: 'url("' + photo + '") no-repeat center', backgroundSize: 'cover' }} />

            <div className="mb-4">{htmlEntities(body).substr(0, 100) + '...'}</div>

            <Link to={link}>{main.read_more}...</Link>
        </div>;
    }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(PostBlock);
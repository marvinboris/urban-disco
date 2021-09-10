import React from 'react';
import { Col, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default ({ posts }) => {
    const popularPosts = posts.filter((p, index) => index < 3).map(({ link, photo, title }) => <div className="mb-3" key={photo}>
        <div className="mb-2"><NavLink to={link} className="text-dark">{title}</NavLink></div>
        <div className="embed-responsive embed-responsive-16by9" style={{ background: 'url("' + photo + '") no-repeat center', backgroundSize: 'cover' }} />
    </div>);

    return <Col>
        <div className="mb-4">
            <h5 className="text-500">SEARCH</h5>
            <Input type="search" placeholder="Search ..." />
        </div>

        <div className="mb-4">
            <h5 className="text-500">POPULAR POSTS</h5>
            {popularPosts}
        </div>
    </Col>;
};
import React from 'react';
import { Link } from 'react-router-dom';

import { htmlEntities } from '../../../../shared/utility';

export default ({ author, link, photo, title, body }) => <div className="PostBlock mb-5">
    <Link to={link} className="text-decoration-none text-700 h3">{title}</Link>
    
    <p>Written by <span className="text-700">{author}</span></p>

    <div className="embed-responsive embed-responsive-16by9 my-4" style={{ background: 'url("' + photo + '") no-repeat center', backgroundSize: 'cover' }} />

    <div className="mb-4">{htmlEntities(body).substr(0, 100) + '...'}</div>

    <Link to={link}>Read more...</Link>
</div>;
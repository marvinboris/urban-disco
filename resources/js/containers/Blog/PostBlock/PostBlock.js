import React from 'react';
import { NavLink } from 'react-router-dom';

const postBlock = ({ author, link, src, title, children }) => 
<div className="PostBlock mb-5">
    <NavLink to={'/blog/' + link} className="text-decoration-none text-700 h3">{title}</NavLink>
    <p>Written by <span className="text-700">{author}</span></p>

    <div className="embed-responsive embed-responsive-16by9 my-4" style={{ background: 'url("'+ src +'") no-repeat center', backgroundSize: 'cover' }} />

    <div className="mb-4">{children.substr(0, 100) + '...'}</div>

    <NavLink to={'/blog/' + link}>Read more...</NavLink>
</div>;

export default postBlock;
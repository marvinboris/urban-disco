import React from 'react';
import { Col, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';

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

const sidebar = () => {
    const popularPosts = postsBlockInfo.filter((p, index) => index < 3).map(({ link, src, title }) => <div className="mb-3" key={src}>
        <div className="mb-2"><NavLink to={'/blog/' + link} className="text-dark">{title}</NavLink></div>
        <div className="embed-responsive embed-responsive-16by9" style={{ background: 'url("' + src + '") no-repeat center', backgroundSize: 'cover' }} />
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

export default sidebar;
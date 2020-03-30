import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { Col } from 'reactstrap';

import './AppBlock.css';

const appBlock = ({ children, icon, title = '', link = '/' }) =>
    <Col md={6} lg={3} className="AppBlock">
        <div className="shadow-sm bg-white rounded-4 p-4">
            <div className="d-flex justify-content-center align-items-center embed-responsive embed-responsive-1by1 mx-auto rounded-circle border border-orange border-3 position-relative p-3" style={{ width: 130 }}>
                <div className="position-absolute w-80 embed-responsive embed-responsive-1by1 rounded-circle shadow d-flex justify-content-center align-items-center" style={{ top: '50%', transform: 'translateY(-50%)' }}>
                    <FontAwesomeIcon icon={icon} className="text-orange fa-3x" />
                </div>
            </div>

            <div className="my-4 py-2 px-4 bg-gradient rounded-2 position-relative overflow-hidden text-white text-center">
                {title}

                <FontAwesomeIcon icon="circle" className="text-xx-small position-absolute" style={{ top: '50%', left: 0, transform: 'translate(-50%, -50%)' }} />
                <FontAwesomeIcon icon="circle" className="text-xx-small position-absolute" style={{ top: '50%', right: 0, transform: 'translate(50%, -50%)' }} />
            </div>

            <p className="mb-3 pb-3 border-bottom border-black-20">{children}</p>

            <NavLink to={link} className="text-orange text-decoration-none">
                Read More
                <FontAwesomeIcon icon="angle-double-right" className="ml-2" />
            </NavLink>
        </div>
    </Col>;

export default appBlock;
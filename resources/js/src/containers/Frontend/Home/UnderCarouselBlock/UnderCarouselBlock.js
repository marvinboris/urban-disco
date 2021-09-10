import React from 'react';
import { Col } from 'reactstrap';

const underCarouselBlock = ({ children, title, icon, className }) =>
    <Col sm={6} lg={3} className={'text-center text-dark py-3 small px-4 m-0 ' + className}>
        <div>
            <div className="mb-3">
                <i className={"fas fa-" + icon + " fa-3x bg-text bg-dark-gradient"} />
            </div>
            <h4 className="text-700 mb-3 bg-text bg-dark-gradient" style={{ textShadow: '0 0 4px 2px black' }}>{title}</h4>
        </div>
        <div className="text-300">
            {children}
        </div>
    </Col>;

export default underCarouselBlock;

import React from 'react';
import { Col } from 'reactstrap';

const workBlock = ({ children, color = 'dark', bgColor = 'white', src, title, className = '', top = 0, left = 0 }) =>
    <Col md={6} className={"embed-responsive embed-responsive-1by1 position-relative"} style={{ overflow: 'visible' }}>
        <div className={"embed-responsive embed-responsive-1by1 w-100 position-absolute shadow rounded-16 text-" + color + " bg-" + bgColor + " " + className} style={{ top, left, transform: "scale(.8)" }}>
            <div className="position-absolute p-5 w-100" style={{ top: 0, left: 0 }}>
                <div className="text-center">
                    <div className="mb-3">
                        <img src={src} height={94} />
                    </div>
                    <h4 className="text-700 mb-3">{title}</h4>
                </div>
                <div className="text-300 text-justify">
                    {children}
                </div>
            </div>
        </div>
    </Col>;

export default workBlock;
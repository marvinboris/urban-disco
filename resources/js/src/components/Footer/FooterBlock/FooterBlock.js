import React from 'react';

const footerBlock = ({ children, title, className }) => (
    <div className={className}>
        <h4 className="text-700 position-relative pb-2 mb-3">
            {title}
            <div className="border-bottom border-white-20 position-absolute" style={{ width: 87, bottom: 0, left: 0 }}>
                <i className="fas fa-circle text-white text-xx-small position-absolute" style={{ top: 0, left: '50%', transform: 'translate(-50%, -50%)' }} />
            </div>
        </h4>
        <div>
            {children}
        </div>
    </div>
);

export default footerBlock;

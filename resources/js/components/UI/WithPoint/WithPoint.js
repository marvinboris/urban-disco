import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const withPoint = ({ children, color, size, className }) =>
    <div className={'position-relative ' + className}>
        <FontAwesomeIcon icon="circle" size={size} className={"position-absolute text-" + color} style={{ top: 8, left: -2, transform: 'translate(-100%, -100%)' }} />
        <div>
            {children}
        </div>
    </div>;

export default withPoint;
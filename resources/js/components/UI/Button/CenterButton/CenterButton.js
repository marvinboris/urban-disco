import React from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const centerButton = ({ children, color, icon, className, size, pill }) =>
    <Button color={color} size={size} className={"d-inline-flex align-items-center " + (pill ? ' rounded-pill px-4 ' : '') + className}>
        <FontAwesomeIcon icon={icon} className="mr-2" />
        <span className="text-300">{children}</span>
    </Button>;

export default centerButton;
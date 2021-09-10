import React from 'react';
import { Button } from 'reactstrap';

const centerButton = ({ children, color, icon, className, size, pill }) =>
    <Button color={color} size={size} className={"d-inline-flex align-items-center " + (pill ? ' rounded-pill px-4 ' : '') + className}>
        <i className={"mr-2 fas fa-" + icon} />
        <span className="text-300">{children}</span>
    </Button>;

export default centerButton;
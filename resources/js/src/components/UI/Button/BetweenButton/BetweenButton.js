import React from 'react';
import { Button } from 'reactstrap';

const betweenButton = ({ children, color, icon, iconColor = 'reset', className, size, pill }) =>
    <Button color={color} size={size} className={"d-inline-flex align-items-center " + (pill ? ' rounded-pill ' : '') + className}>
        <span className="text-300">{children}</span>
        <i className={"ml-3 fas fa-lg fa-" + icon + " text-" + iconColor} />
    </Button>;

export default betweenButton;

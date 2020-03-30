import React from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const betweenButton = ({ children, color, icon, iconColor = 'reset', className, size, pill }) =>
    <Button color={color} size={size} className={"d-inline-flex align-items-center " + (pill ? ' rounded-pill ' : '') + className}>
        <span className="text-300">{children}</span>
        <FontAwesomeIcon size="lg" icon={icon} className={"ml-3 text-" + iconColor} />
    </Button>;

export default betweenButton;

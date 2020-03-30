import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const specialTitle = ({ icon, children, className, user }) => <h2 className={(user ? "h4 " : "") + "mb-2 " + className}><FontAwesomeIcon icon={icon} className="mr-2" fixedWidth />{children}</h2>;

export default specialTitle;
import React from 'react';

export default ({ icon, children, className, user }) => <h2 className={(user ? "h4 " : "") + "mb-2 " + className}>{<i className={"mr-2 fas fa-fw fa-" + icon} />}{children}</h2>;
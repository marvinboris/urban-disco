import React from 'react';

const subtitle = ({ children, className }) => (
    <>
        <div className={"text-muted lead small " + className}>{children}</div>
        <hr />
    </>
);

export default subtitle;
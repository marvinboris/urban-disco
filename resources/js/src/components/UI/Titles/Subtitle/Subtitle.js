import React from 'react';

export default ({ children, className, dark = false }) => <div>
    <div className={`text-${dark ? "light" : "secondary"} text-14 text-md-16 text-xxl-18 text-300 ${className}`}>
        {children}
    </div>
</div>;
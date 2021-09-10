import React from 'react';

const error = ({ err }) => (err ? <div className="alert alert-danger text-10 text-md-12 text-xxl-14">{err.message ? err.message : err}</div> : null);

export default error;
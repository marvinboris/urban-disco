import React from 'react';

const error = ({ err }) => (err ? <div className="alert alert-danger">{err.message ? err.message : err}</div> : null);

export default error;
import React from 'react';
import { Spinner } from 'reactstrap';

const spinner = () => <div className="text-center py-5">
    <Spinner type="grow" color="dark" style={{ width: '5rem', height: '5rem' }} />
</div>;

export default spinner;
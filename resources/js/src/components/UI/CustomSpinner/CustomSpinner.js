import React from 'react';
import { Spinner } from 'reactstrap';

import Preloader from './Preloader/Preloader';

export default () => <div className="py-5 my-3 text-center">
    {/* <Spinner color="darkblue" style={{ width: '15rem', height: '15rem' }} type="grow" className="my-2" /> */}
    <Preloader />
</div>;
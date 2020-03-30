import React from 'react';

import PresentationalContainer from '../PresentationalContainer/PresentationalContainer';
import Breadcrumb from '../Breadcrumb/Breadcrumb';

import Background from '../../../../../public/images/Drone.png';

const banner = ({ title, items }) =>
    <PresentationalContainer bg="" className="position-relative" style={{ background: 'linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .45)), url("' + Background + '") no-repeat center', backgroundSize: 'cover', backgroundAttachment: 'fixed' }} innerStyle={{ marginTop: 50 }}>
        <div className="position-absolute w-100 h-100 bg-dark-gradient" style={{ opacity: .9, top: 0, left: 0, zIndex: 1 }} />
        <div className="position-relative" style={{ zIndex: 2 }}>
            <Breadcrumb items={items} main={title} />
            <div className="text-center text-white py-5">
                <h1 className="text-700 pt-5">
                    {title}
                </h1>
            </div>
        </div>
    </PresentationalContainer>;

export default banner;
import React from 'react';
import { NavLink } from 'react-router-dom';

import Image from '../../../../../public/images/20200217_014932-removebg-preview.png';
import Black from '../../../../../public/images/20200217_014932-removebg-preview-black.png';

import './Logo.css';

const logo = ({ big, dark }) => (
    <div className="Logo mb-0 text-white" >
        <img src={!dark ? Image : Black} style={big ? { height: 120 } : { height: 80 }} />
    </div>
);

export default logo;
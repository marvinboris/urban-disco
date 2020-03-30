import React from 'react';

import '../../../../../public/css/star-rating-svg.css';

const stars = ({ mark, readOnly }) =>
    <div className={readOnly ? "read-only-stars" : "ranking-stars"} data-rating={mark} />;

export default stars;
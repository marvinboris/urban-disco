import React, { useState } from 'react';

const twoDigits = number => number < 10 ? '0' + number : number;

export default ({ start }) => {
    const [time, setTime] = useState('00 : 00 : 00');
    setInterval(() => {
        const counterStart = new Date(start).getTime();
        const counterEnd = counterStart + 72 * 3600 * 1000;
        const now = new Date().getTime();

        const totalSeconds = Math.round((counterEnd - now) / 1000);

        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds - hours * 3600) / 60);
        const seconds = totalSeconds - hours * 3600 - minutes * 60;

        setTime(`${twoDigits(hours)} : ${twoDigits(minutes)} : ${twoDigits(seconds)}`)
    }, 1000);

    return time;
};
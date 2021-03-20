import React, { useState, useEffect } from 'react';

export const Clock = ({ onTicking }) => {
    const [tick, setTick] = useState(1);
    useEffect(() => {
        const timer = setInterval(() => {
           setTick(tick + 1);
           onTicking();
        }, 1000);

        // clear the interval
        return () => clearInterval(timer);
    });

    return null;
}
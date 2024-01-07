import React, {useEffect, useState} from 'react';

const START_DAY = "2022-02-24";
const START_DAY_DATE = new Date(START_DAY);

function formatSeconds(seconds) {
    // Check if the input is a valid number
    if (isNaN(seconds)) {
        return "Invalid input";
    }
    // Convert the number to a formatted string
    return seconds.toLocaleString();
}

function TimeContainer() {
    const [time, setTime] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const difference = Math.floor(
                (now.getTime() - START_DAY_DATE.getTime()) / 1000
            );
            setTime(formatSeconds(difference));
        }, 1000);

        // Clean up function
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div>
            {time}
        </div>
    );
}

export default TimeContainer;
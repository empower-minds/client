import React, { useState } from 'react';

const TimeInput = ({ label, id, value, onChange }) => {
    const [time, setTime] = useState(value);

    const handleTimeChange = (event) => {
        const newTime = event.target.value;
        setTime(newTime);
        onChange(newTime);
    };

    return (
        <div className="flex flex-col w-full mb-4 mr-4 gap-2">
            <div className="flex justify-between">
                <label
                    htmlFor={id}
                    className="mb-2 text-sm font-medium text-[#5182CC] dark:text-[#5182CC] ml-1"
                >
                    {label}
                </label>
            </div>
            <input
                type="time"
                id={label}
                value={time}
                onChange={handleTimeChange}
                className="shadow appearance-none border border-gray-300 rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
        </div>
    );
};

export default TimeInput;
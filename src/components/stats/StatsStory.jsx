import React from 'react';

function StatsStory({ title, value, link }) {
    return (
        <div className="bg-white w-64 shadow-md rounded-xl flex items-center">
            <div className="border-l-4 border-blue-500 h-full"></div>
            <div className="p-6">
                <p className="mb-2 poppins-regular text-blue-500">{title}</p>
                <p className="text-lg poppins-semibold text-gray-700">{value}</p>
            </div>
        </div>
    );
}

export default StatsStory;

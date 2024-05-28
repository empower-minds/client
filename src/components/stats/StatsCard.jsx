import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

function StatsCard({ title, value, link }) {
    return (
        <div className="bg-white w-64 shadow-md rounded-xl items-center">
            <div className='p-6'>
                <p className="mb-2 poppins-regular text-gray-500">{title}</p>
                <p className="text-lg poppins-semibold text-gray-700">{value}</p>
            </div>
            <div className='bg-blue-500 p-2 rounded-b-xl flex items-center justify-start text-white'>
                <a href={link} className='pl-4'>View More</a>
                <HiArrowNarrowRight className="ml-2" />
            </div>
        </div>
    );
}

export default StatsCard;

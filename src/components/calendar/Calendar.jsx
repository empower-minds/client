import React, { useState, useEffect } from 'react';

export default function SidebarCalendar() {
    const [currentDate, setCurrentDate] = useState(new Date());

    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    useEffect(() => {
        const now = new Date();
        setCurrentDate(now);
    }, []);

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const daysInMonth = [];

    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    const firstDayOfWeek = firstDayOfMonth.getDay();

    for (let i = 1 - firstDayOfWeek; i <= lastDayOfMonth.getDate(); i++) {
        daysInMonth.push(i > 0 ? i : '');
    }

    const currentDate_month = currentDate.getMonth();
    const currentDate_year = currentDate.getFullYear();

    return (
        <div className="mt-5 flex flex-grow flex-col">
            <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-medium text-gray-900">
                    {months[currentDate_month]} {currentDate_year}
                </div>
            </div>
            <div className="grid grid-cols-7 gap-1">
                {daysOfWeek.map((day) => (
                    <div
                        key={day}
                        className="text-xs uppercase text-[#39A7FF] font-medium px-1 py-2 text-center border-b border-gray-200"
                    >
                        {day}
                    </div>
                ))}
                {daysInMonth.map((day, index) => {
                    const date = new Date(
                        currentDate.getFullYear(),
                        currentDate.getMonth(),
                        day
                    );
                    const isToday =
                        date.toDateString() === new Date().toDateString();
                    const isFirstDayOfMonth = index === 0 && day !== '';
                    const isLastDayOfMonth =
                        index === daysInMonth.length - 1 && day !== '';
                    const isSunday = date.getDay() === 0;

                    let classNames = 'flex items-center justify-center px-1 py-2';
                    if (isToday) {
                        classNames += ' bg-blue-500 text-white rounded-full';
                    } else if (isFirstDayOfMonth) {
                        classNames += ' border-l border-gray-200';
                    } else if (isLastDayOfMonth) {
                        classNames += ' border-r border-gray-200';
                    } else if (day === '') {
                        classNames += ' text-gray-300';
                    } else if (isSunday) {
                        classNames += ' text-red-500 bg-gray-100';
                    } else {
                        classNames += ' bg-gray-100 text-gray-600';
                    }

                    return (
                        <div key={index} className={classNames}>
                            <div className="w-6 h-6 rounded-full flex items-center justify-center">
                                {day}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
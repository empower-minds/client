import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { sidebarPenulis } from '../../../data'
import Logo from '../../../assets/logo/logo.png'
import { Cog8ToothIcon, ArrowLeftEndOnRectangleIcon, Bars3BottomLeftIcon } from '@heroicons/react/24/outline'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

// Sidebar component
export default function SidebarPenulis() {
    const location = useLocation();
    const currentPath = location.pathname;
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className={`bg-white shadow-lg min-h-screen ${isOpen ? 'w-64' : 'w-16 shadow-xl'} duration-500 pt-2`}>
                {/* Toggle button */}
                <button
                    type="button"
                    className={`relative md:fixed top-4 left-4 z-50 inline-flex items-center p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${isOpen ? 'xl:fixed' : 'xl:relative'}`}
                    onClick={toggleSidebar}
                >
                    <span className="sr-only">Open sidebar</span>
                    <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                {/* Static sidebar for desktop */}
                <div className={`md:fixed md:inset-y-0 px-5 xl:py-0 md:py-10 md:flex md:w-64 md:flex-col ${isOpen ? 'md:block' : 'md:hidden'}`}>
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex flex-grow flex-col overflow-y-auto bg-white pt-5">
                        <div className="flex flex-shrink-0 items-center px-4 xl:pt-10">
                            <img
                                className="h-16 w-auto"
                                src={Logo}
                                alt="Your Company"
                            />
                        </div>
                        <div className="mt-5 flex flex-grow flex-col">
                            <nav className="flex-1 space-y-1 px-2 pb-4">
                                {sidebarPenulis.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className={classNames(
                                            currentPath === item.href ? 'bg-[#5182CC] text-white rounded-[10px]' : 'text-gray-600 hover:bg-[#F3F8FE] hover:text-[#5182CC]',
                                            'group flex items-center px-4 py-3 text-sm font-medium rounded-md'
                                        )}
                                    >
                                        <item.icon
                                            className={classNames(
                                                currentPath === item.href ? 'text-white' : 'text-gray-400 group-hover:text-[#5182CC]',
                                                'mr-3 flex-shrink-0 h-6 w-6'
                                            )}
                                            aria-hidden="true"
                                        />
                                        {item.name}
                                    </a>
                                ))}
                            </nav>
                        </div>
                        <div className="mt-5 flex flex-shrink-0 flex-col px-4 pb-8">
                            <a
                                href="#"
                                className="group flex items-center rounded-md px-4 py-3 text-sm font-medium text-gray-600 hover:bg-[#F3F8FE] hover:text-[#5182CC]"
                            >
                                <Cog8ToothIcon
                                    className="mr-3 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-[#5182CC]"
                                    aria-hidden="true"
                                />
                                Settings
                            </a>
                            <a
                                href="/"
                                className="group flex items-center rounded-md px-4 py-3 text-sm font-medium text-gray-600 hover:bg-[#F3F8FE] hover:text-[#5182CC]"
                            >
                                <ArrowLeftEndOnRectangleIcon
                                    className="mr-3 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-[#5182CC]"
                                    aria-hidden="true"
                                />
                                Sign Out
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
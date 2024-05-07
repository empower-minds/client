import { useLocation } from 'react-router-dom';
import { sidebar } from '../../../data'
import Logo from '../../../assets/logo/logo.png'
import { Cog8ToothIcon, ArrowLeftEndOnRectangleIcon } from '@heroicons/react/24/outline'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

// Sidebar component
export default function Sidebar() {
    const location = useLocation();
    const currentPath = location.pathname;
    
    return (
        <>
            <div>
                {/* Static sidebar for desktop */}
                <div className="md:fixed md:inset-y-0 px-5 md:flex md:w-64 md:flex-col">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex flex-grow flex-col overflow-y-auto bg-white pt-5">
                        <div className="flex flex-shrink-0 items-center px-4 py-4">
                            <img
                                className="h-16 w-auto"
                                src={Logo}
                                alt="Your Company"
                            />
                        </div>
                        <div className="mt-5 flex flex-grow flex-col">
                            <nav className="flex-1 space-y-1 px-2 pb-4">
                                {sidebar.map((item) => (
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
                                href="#"
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

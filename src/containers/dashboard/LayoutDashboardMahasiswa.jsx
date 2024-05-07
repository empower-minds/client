import { Outlet } from 'react-router-dom';
import RightSidebar from '../../components/navigation/sidebar/RightSidebarMahasiswa';
import SidebarMahasiswa from '../../components/navigation/sidebar/SidebarMahasiswa';

export function LayoutDashboardMahasiswa() {
    return (
        <>
            <div className="flex h-full">
                <div className='flex'>
                    <SidebarMahasiswa />
                </div>
                {/* Main Content Area */}
                <div className="flex-grow flex flex-col">
                    <main className="flex-grow">
                        <div className="py-6">
                            <div className="px-4 sm:px-6">
                                {/* content */}
                                <div className="py-4">
                                    <div className="flex flex-col lg:flex-row">
                                        <div className="min-h-screen max-w-screen rounded-[40px] bg-[#F3F8FE] flex-grow">
                                            <div className="px-10 py-10 sm:px-6 md:px-6">
                                                <h1 className="text-2xl poppins-semibold text-gray-800">Hello, Tiara Putri</h1>
                                                <Outlet />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* /End content */}
                            </div>
                        </div>
                    </main>
                </div>
                <div className='flex'>
                    <RightSidebar />
                </div>
            </div>
        </>
    );
}

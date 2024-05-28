import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { DashboardNavbar } from '../../components/navigation/navbar/DashboardNavbar';
import SidebarAdmin from '../../components/navigation/sidebar/SidebarAdmin';
import SidebarPenulis from '../../components/navigation/sidebar/SidebarPenulis';

export default function LayoutDashboard() {
    const { auth } = useContext(AuthContext);
    
    return (
        <div className='flex bg-[#F9FAFB]'>
            <div className="flex">
                {auth?.user.role === 'Admin' ? (
                    <SidebarAdmin />
                ) : auth?.user.role === 'Penulis' ? (
                    <SidebarPenulis />
                ) : null}
            </div>

            <div className="flex flex-grow flex-col">
                <DashboardNavbar />

                <main className="flex-grow min-h-screen">
                    <div className="py-6">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
}

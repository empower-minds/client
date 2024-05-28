import { Outlet } from 'react-router-dom'
import { DashboardNavbar } from '../../components/navigation/navbar/DashboardNavbar'
import SidebarAdmin from '../../components/navigation/sidebar/SidebarAdmin'

export default function LayoutDashboard() {

    return (
        <>
            <div className='flex bg-[#F9FAFB]'>
                <div className="flex">
                    <SidebarAdmin />
                </div>

                <div className="flex flex-grow flex-col">
                    <DashboardNavbar />

                    <main className="flex-grow min-h-screen">
                        <div className="py-6">
                            <Outlet/>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

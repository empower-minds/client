import { FaPlus } from "react-icons/fa6";
import Schedule from "../../../components/schedules/Schedule";

export function DashboardMahasiswaSchedule() {
    return (
        <>
            <section>
                <p className='raleway-semibold text-gray-400 py-4'>What's on the schedule today?</p>
                <div className='flex justify-between items-center pb-5'>
                    <p className='raleway-semibold text-2xl text-gray-800 pt-6 pb-2'>My Schedule</p>
                    <a href="/dashboard/create-schedule" className="flex items-center py-2 px-5 mr-8 bg-[#1486E1] text-white text-center rounded-md raleway-semibold">
                        <FaPlus className="mr-1" />
                        Create Schedule
                    </a>
                </div>
                <div className='flex'>
                    <div className='bg-white rounded-[20px] w-full h-fit shadow-md mr-4 p-6'>
                        <Schedule/>
                    </div>
                </div>
            </section>
        </>
    );
}
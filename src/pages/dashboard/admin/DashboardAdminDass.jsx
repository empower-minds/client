import StatsCard from "../../../components/stats/StatsCard";
import DassQuestionTable from "../../../components/tables/DassQuestionTable";
import ScoreDassTable from "../../../components/tables/ScoreDassTable";
import { dassStats } from "../../../data";
import { FaPlus } from 'react-icons/fa';

export function DashboardAdminDass() {
    return (
        <>
            <section>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                    <h1 className="text-2xl font-semibold text-gray-900">Dass Assesment</h1>
                </div>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                    {/* Content */}
                    <div className="py-4">
                        <div className="flex space-x-4 py-4">
                            {dassStats.map((stat, index) => (
                                <StatsCard key={index} title={stat.title} value={stat.value} link='/dashboard/admin/schedule' />
                            ))}
                        </div>
                        <div className="gap-8 mr-8 p-6 mt-10 bg-white rounded-xl shadow-md">
                            <div className='flex justify-between items-center'>
                                <div className="">
                                    <h1 className="poppins-semibold text-xl text-[#0B497B]">DASS Question</h1>
                                    <div className="border-b-2 w-12 border-[#0B497B] pt-4" />
                                </div>
                                <a href="#" className="flex items-center py-2 px-5 bg-[#5182CC] text-white text-center rounded-md poppins-regular">
                                    <FaPlus className="mr-1" />
                                    Add New
                                </a>
                            </div>
                            <div>
                                <DassQuestionTable />
                            </div>
                        </div>
                        <div className="gap-8 mr-8 p-6 mt-10 bg-white rounded-xl shadow-md">
                            <div className="">
                                <h1 className="poppins-semibold text-xl text-[#0B497B]">User Completed DASS</h1>
                                <div className="border-b-2 w-12 border-[#0B497B] pt-4" />
                            </div>
                            <div>
                                <ScoreDassTable />
                            </div>
                        </div>
                    </div>
                    {/* /End content */}
                </div>
            </section>
        </>
    );
}
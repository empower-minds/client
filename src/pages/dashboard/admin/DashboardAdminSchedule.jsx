import StatsCard from "../../../components/stats/StatsCard";
import AllScheduleTable from "../../../components/tables/AllScheduleTable";
import { scheduleStats } from "../../../data";

export function DashboardAdminSchedule() {
    return (
        <>
            <section>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                    <h1 className="text-2xl font-semibold text-gray-900">Schedule Counselling</h1>
                </div>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                    {/* Content */}
                    <div className="py-4">
                        <div className="flex space-x-4 py-4">
                            {scheduleStats.map((stat, index) => (
                                <StatsCard key={index} title={stat.title} value={stat.value} link='/dashboard/admin/schedule' />
                            ))}
                        </div>
                        <div>
                            <AllScheduleTable/>
                        </div>
                    </div>
                    {/* /End content */}
                </div>
            </section>
        </>
    );
}
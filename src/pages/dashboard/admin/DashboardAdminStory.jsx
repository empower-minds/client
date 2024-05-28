import TabWithTable from "../../../components/navigation/tabs/TabWithTable";
import StatsStory from "../../../components/stats/StatsStory";
import { storyStats } from "../../../data";

export function DashboardAdminStory() {
    return (
        <>
            <section>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                    <h1 className="text-2xl font-semibold text-gray-900">All Stories</h1>
                </div>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                    {/* Content */}
                    <div className="py-4">
                        <div className="flex space-x-4 py-4">
                            {storyStats.map((stat, index) => (
                                <StatsStory key={index} title={stat.title} value={stat.value} link='/dashboard/admin/schedule' />
                            ))}
                        </div>
                        <div className="bg-white rounded-[20px] w-full shadow-md mr-4 p-6 my-4">
                            <TabWithTable />
                        </div>
                    </div>
                    {/* /End content */}
                </div>
            </section>
        </>
    );
}
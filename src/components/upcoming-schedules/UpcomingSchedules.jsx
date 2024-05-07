import { upcoming_schedules } from "../../data";

export function UpcomingSchedules() {
    return (
        <>
            <div>
                <h2 className="text-md poppins-medium pb-2">Upcoming Schedules</h2>
                {upcoming_schedules.map((schedule, index) => (
                    <div
                        key={index}
                        className="flex items-center bg-white shadow-md rounded-[10px] p-2 my-2"
                    >
                        <img src={schedule.icon} alt={schedule.title} className="mr-4" />
                        <div>
                            <h3 className="text-sm font-medium mb-1">{schedule.title}</h3>
                            <p className="text-sm text-gray-500">{schedule.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
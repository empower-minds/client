import { activities } from "../../data";

export function Activity() {
    return (
        <>
            <div>
                <h2 className="text-md poppins-medium pb-2">Today’s Activities</h2>
                {activities.map((activity, index) => (
                    <div
                        key={index}
                        className="flex items-center bg-white shadow-md rounded-[10px] p-2 my-2"
                    >
                        <img src={activity.icon} alt={activity.title} className="mr-4" />
                        <div>
                            <h3 className="text-sm font-medium mb-1">{activity.title}</h3>
                            <p className="text-sm text-gray-500">{activity.createdAt}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
import Profile from '../../profile/Profile';
import SidebarCalendar from '../../calendar/Calendar';
import { Activity } from '../../activities/Activity';
import { UpcomingSchedules } from '../../upcoming-schedules/UpcomingSchedules';

export default function RightSidebar() {
  return (
    <div>
      {/* Static sidebar for desktop */}
      <div className="md:fixed md:flex md:w-64 md:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex flex-grow flex-col overflow-y-auto pt-5 sidebar">
          <div className="border-b border-gray-200 pt-5 pb-5">
            <Profile />
          </div>
          <div className="flex flex-grow flex-col">
            <SidebarCalendar />
          </div>
          <div className="flex flex-grow flex-col py-8">
            <Activity />
          </div>
          <div className="flex flex-grow flex-col mb-8">
            <UpcomingSchedules />
          </div>
        </div>
      </div>
    </div>
  );
}
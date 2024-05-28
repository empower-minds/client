import { useState } from 'react';
import { AllStoriesTable } from '../../tables/AllStoriesTable';
import { DayInLifeStoriesTable } from '../../tables/DayInLifeStoriesTable';
import { FuturePlanStoriesTable } from '../../tables/FuturePlanStoriesTable';
import { DiaryStoriesTable } from '../../tables/DiaryStoriesTable';

const tabs = [
  { name: 'All', href: 'all', current: true },
  { name: 'Diary', href: 'diary', current: false },
  { name: 'Future Plan', href: 'future-plan', current: false },
  { name: 'Day in Life', href: 'day-in-life', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function TabWithTable() {
  const [activeTab, setActiveTab] = useState('all');

  const handleTabClick = (tab) => {
    setActiveTab(tab.href);
  };

  return (
    <div>
      <div className="sm:hidden">
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          defaultValue={tabs.find((tab) => tab.current).name}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href="#"
                onClick={() => handleTabClick(tab)}
                className={classNames(
                  activeTab === tab.href
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                  'whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm'
                )}
                aria-current={activeTab === tab.href ? 'page' : undefined}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Render the component based on the active tab */}
      {activeTab === 'all' && <AllStoriesTable/>}
      {activeTab === 'diary' && <DiaryStoriesTable />}
      {activeTab === 'future-plan' && <FuturePlanStoriesTable />}
      {activeTab === 'day-in-life' && <DayInLifeStoriesTable />}
    </div>
  );
}
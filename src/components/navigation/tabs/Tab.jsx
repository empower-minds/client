import { useState } from 'react';
import { AllStories } from '../../stories/AllStories';
import { DiaryStories } from '../../stories/DiaryStories';
import { FuturePlanStories } from '../../stories/FuturePlanStories';
import { DayInLifeStories } from '../../stories/DayInLifeStories';

const tabs = [
  { name: 'All', href: 'all', current: true },
  { name: 'Diary', href: 'diary', current: false },
  { name: 'Future Plan', href: 'future-plan', current: false },
  { name: 'Day in Life', href: 'day-in-life', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Tab() {
  const [activeTab, setActiveTab] = useState('all');

  const handleTabClick = (tab) => {
    setActiveTab(tab.href);
  };

  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
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
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                  'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
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
      {activeTab === 'all' && <AllStories/>}
      {activeTab === 'diary' && <DiaryStories />}
      {activeTab === 'future-plan' && <FuturePlanStories />}
      {activeTab === 'day-in-life' && <DayInLifeStories />}
    </div>
  );
}
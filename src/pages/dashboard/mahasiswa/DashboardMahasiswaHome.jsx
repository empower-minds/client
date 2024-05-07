import { categoryStory } from '../../../data';
import StoryCard from "../../../components/stories/StoryCatagory";
import { FaPlus } from 'react-icons/fa';
import { RecentStory } from '../../../components/stories/ListRecentStory';
import { CurrentScore } from '../../../components/dass/CurrentScore';

export function DashboardMahasiswaHome() {
    return (
        <>
            <section>
                <p className='raleway-semibold text-gray-400 py-4'>How it’s going on?</p>
                <div className='flex justify-between items-center'>
                    <p className='raleway-semibold text-2xl text-gray-800 pt-6 pb-2'>My Story</p>
                    <a href="#" className="flex items-center py-2 px-5 mr-8 bg-[#5182CC] text-white text-center rounded-md raleway-semibold">
                        <FaPlus className="mr-1" />
                        Add New
                    </a>
                </div>
                <div className="flex pb-5 gap-8">
                    {categoryStory.map((story, index) => (
                        <StoryCard
                            key={index}
                            image={story.image}
                            icon={story.icon}
                            title={story.title}
                        />
                    ))}
                </div>
                <div className='flex'>
                    <div className='bg-white rounded-[20px] w-full h-fit shadow-md mr-4 p-6'>
                        <h2 className="text-2xl raleway-semibold text-gray-600 pb-4">Recent Stories</h2>
                        <RecentStory />
                    </div>
                    <div className="flex px-5 bg-white rounded-[20px] h-fit shadow-md raleway-semibold mr-6">
                        <CurrentScore />
                    </div>
                </div>
            </section>
        </>
    );
}

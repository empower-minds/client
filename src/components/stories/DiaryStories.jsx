import { stories } from "../../data";
import { IoIosArrowRoundForward } from "react-icons/io";

export function DiaryStories() {
    // Filter the stories to only include those with the "Diary" category
    const diaryStories = stories.filter(story => story.category === 'Diary');

    // Sort the diary stories by createdAt in descending order
    const sortedDiaryStories = diaryStories.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return (
        <>
            <div className="py-2">
                {sortedDiaryStories.map((story, index) => (
                    <div
                        key={index}
                        className="flex items-center py-3"
                    >
                        <img src={story.icon} alt={story.title} className="mr-4" />
                        <div>
                            <h3 className="text-sm raleway-medium mb-1">{story.title}</h3>
                            <p className="text-sm poppins-regular text-gray-400">{story.createdAt}</p>
                        </div>
                        <div className="bg-[#D9F1FF] rounded-full p-2 ml-auto">
                            <IoIosArrowRoundForward className="color-[#5182CC]" />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
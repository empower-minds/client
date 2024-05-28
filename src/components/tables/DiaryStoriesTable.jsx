import { Link } from 'react-router-dom';
import { stories } from "../../data";

export function DiaryStoriesTable() {
    // Filter the stories to only include those with the "Day in Life" category
    const diaryStories = stories.filter(story => story.category === 'Diary');

    // Sort the diary stories by createdAt in descending order
    const sortedDiaryStories = diaryStories.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return (
        <div className="mt-10 ring-1 ring-gray-300 sm:-mx-6 md:mx-0 md:rounded-lg">
            <table className="w-full divide-y divide-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-blue-500">
                    <tr>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                            Title
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                            Created At
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {sortedDiaryStories.length ? (
                        sortedDiaryStories.map((story, index) => (
                            <tr key={index} className="border-b border-gray-300">
                                <td className="px-3 py-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                                    <h3 className="text-sm raleway-medium mb-1">{story.title}</h3>
                                </td>
                                <td className="px-3 py-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                                    <p className="text-sm poppins-regular text-gray-400">{story.createdAt}</p>
                                </td>
                                <td className="flex px-3 py-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                                    <Link className="text-blue-600" to="/dashboard/admin/schedule">
                                        Edit
                                    </Link>
                                    <p className='px-3 text-gray-400'>|</p>
                                    <Link className="text-blue-600" to="/dashboard/admin/schedule">
                                        Delete
                                    </Link>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="px-6 py-4 text-center w-full text-gray-600">
                                No stories available
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

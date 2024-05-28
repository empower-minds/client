import { Link } from 'react-router-dom';
import { feedback } from "../../data"; 

// Fungsi untuk memotong teks hingga 10 kata
const truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
};

export function FeedbackTable() {
    return (
        <div className="mt-10 ring-1 ring-gray-300 sm:-mx-6 md:mx-0 md:rounded-lg">
            <table className="w-full divide-y divide-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-blue-500">
                    <tr>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                            Tingkat
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                            Kategori
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                            Saran
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                            Sumber Saran
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {feedback.length ? (
                        feedback.map((item, index) => (
                            <tr key={index} className="border-b border-gray-300">
                                <td className="px-3 py-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                                    <p className="text-sm">{item.Tingkat}</p>
                                </td>
                                <td className="px-3 py-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                                    <p className="text-sm">{item.Kategori}</p>
                                </td>
                                <td className="px-3 py-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                                    <p className="text-sm">{truncateText(item.Saran, 10)}</p>
                                </td>
                                <td className="px-3 py-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                                    <a href={item.Sumber_Saran} className="text-blue-600" target="_blank" rel="noopener noreferrer">
                                        Link
                                    </a>
                                </td>
                                <td className="flex px-3 py-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                                <Link className="text-blue-600" to={`/edit/${item.ID_Feedback}`}>
                                        Detail
                                    </Link>
                                    <p className='px-3 text-gray-400'>|</p>
                                    <Link className="text-blue-600" to={`/edit/${item.ID_Feedback}`}>
                                        Edit
                                    </Link>
                                    <p className='px-3 text-gray-400'>|</p>
                                    <Link className="text-blue-600" to={`/delete/${item.ID_Feedback}`}>
                                        Delete
                                    </Link>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="px-6 py-4 text-center w-full text-gray-600">
                                No feedback available
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

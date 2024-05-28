import { Link } from 'react-router-dom';
import { articles } from "../../data";  // Pastikan path sesuai dengan lokasi data artikel

export function ArticleTable() {
    return (
        <div className="mt-10 ring-1 ring-gray-300 sm:-mx-6 md:mx-0 md:rounded-lg">
            <table className="w-full divide-y divide-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-blue-500">
                    <tr>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                            Judul
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                            Dibuat Oleh
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                            Tanggal
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {articles.length ? (
                        articles.map((article, index) => (
                            <tr key={index} className="border-b border-gray-300">
                                <td className="px-3 py-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                                    <p className="text-sm">{article.judul}</p>
                                </td>
                                <td className="px-3 py-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                                    <p className="text-sm">{article.penulis}</p>
                                </td>
                                <td className="px-3 py-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                                    <p className="text-sm">{article.tanggal}</p>
                                </td>
                                <td className="flex px-3 py-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                                <Link className="text-blue-600" to={`/edit/${article.id_artikel}`}>
                                        Detail
                                    </Link>
                                    <p className='px-3 text-gray-400'>|</p>
                                    <Link className="text-blue-600" to={`/edit/${article.id_artikel}`}>
                                        Edit
                                    </Link>
                                    <p className='px-3 text-gray-400'>|</p>
                                    <Link className="text-blue-600" to={`/delete/${article.id_artikel}`}>
                                        Delete
                                    </Link>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="px-6 py-4 text-center w-full text-gray-600">
                                No articles available
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

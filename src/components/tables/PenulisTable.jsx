import { Link } from 'react-router-dom';
import { penulis } from "../../data";

export function PenulisTable() {
    return (
        <div className="mt-10 ring-1 ring-gray-300 sm:-mx-6 md:mx-0 md:rounded-lg">
            <table className="w-full divide-y divide-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-blue-500">
                    <tr>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                            Nama
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                            Email
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {penulis.length ? (
                        penulis.map((item, index) => (
                            <tr key={index} className="border-b border-gray-300">
                                <td className="px-3 py-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                                    <p className="text-sm">{item.nama}</p>
                                </td>
                                <td className="px-3 py-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                                    <p className="text-sm">{item.email}</p>
                                </td>
                                <td className="flex px-3 py-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                                    <Link className="text-blue-600" to={`/edit/${item.id_penulis}`}>
                                        Edit
                                    </Link>
                                    <p className='px-3 text-gray-400'>|</p>
                                    <Link className="text-blue-600" to={`/delete/${item.id_penulis}`}>
                                        Delete
                                    </Link>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" className="px-6 py-4 text-center w-full text-gray-600">
                                No mahasiswa available
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

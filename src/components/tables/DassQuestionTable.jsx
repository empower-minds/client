import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { dass } from '../../data';

export default function DassQuestionTable() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = dass.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <section>
            <div className="mt-10 ring-1 ring-gray-300 sm:-mx-6 md:mx-0 md:rounded-lg">
                <table className="w-full divide-y divide-gray-200 rounded-lg overflow-hidden">
                    <thead className="bg-blue-500">
                        <tr>
                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6 w-2/3">
                                Pertanyaan
                            </th>
                            <th scope="col" className="hidden px-3 py-3.5 text-left text-sm font-semibold text-white lg:table-cell w-1/6">
                                Kategori
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm text-white font-semibold w-1/6">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {currentItems.length ? (
                            currentItems.map((item, index) => (
                                <tr key={index} className="border-b border-gray-300">
                                    <td className="px-6 py-4 w-2/3 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap text-left text-blueGray-700">
                                        {item.pertanyaan}
                                    </td>
                                    <td className="px-3 py-4 w-1/6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                                        {item.kategori}
                                    </td>
                                    <td className="px-3 py-4 w-1/6 flex align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                                        <Link className="text-blue-600" to={`/edit/${item.id}`}>
                                            Edit
                                        </Link>
                                        <p className='px-3 text-gray-400'>|</p>
                                        <Link className="text-blue-600" to={`/delete/${item.id}`}>
                                            Delete
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" className="px-6 py-4 text-center w-full text-gray-600">
                                    Tidak ada data
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div className="mt-4 flex justify-end">
                <nav className="block">
                    <ul className="flex pl-0 list-none rounded my-2">
                        {Array.from({ length: Math.ceil(dass.length / itemsPerPage) }, (_, i) => (
                            <li key={i}>
                                <button
                                    onClick={() => paginate(i + 1)}
                                    className={`px-3 py-1 rounded-md mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'text-blue-500'
                                        }`}
                                >
                                    {i + 1}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </section>
    );
}

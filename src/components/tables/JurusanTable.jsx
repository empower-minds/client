import React from 'react';
import { Link } from 'react-router-dom';
import { jurusan } from "../../data";

export function JurusanTable() {
    return (
        <div className="mt-10 ring-1 ring-gray-300 sm:-mx-6 md:mx-0 md:rounded-lg">
            <table className="w-full divide-y divide-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-blue-500">
                    <tr>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                            Kode Jurusan
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                            Nama Jurusan
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {jurusan.length ? (
                        jurusan.map((jur, index) => (
                            <tr key={index} className="border-b border-gray-300">
                                <td className="px-3 py-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                                    <p className="text-sm">{jur.kode_jurusan}</p>
                                </td>
                                <td className="px-3 py-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                                    <p className="text-sm">{jur.nama_jurusan}</p>
                                </td>
                                <td className="px-3 py-4 w-1/6 flex align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                                    <Link className="text-blue-600" to={`/edit/${jur.kode_jurusan}`}>
                                        Edit
                                    </Link>
                                    <p className='px-3 text-gray-400'>|</p>
                                    <Link className="text-blue-600" to={`/delete/${jur.kode_jurusan}`}>
                                        Delete
                                    </Link>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="2" className="px-6 py-4 text-center w-full text-gray-600">
                                No jurusan available
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

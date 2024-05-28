import React from 'react';
import { jenjang, kelas } from "../../data";

export function JenjangTable() {
    return (
        <div className="mt-10 ring-1 ring-gray-300 sm:-mx-6 md:mx-0 md:rounded-lg">
            <table className="w-full divide-y divide-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-blue-500">
                    <tr>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                            ID Jenjang
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                            Nama Jenjang
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {jenjang.length ? (
                        jenjang.map((item, index) => (
                            <tr key={index} className="border-b border-gray-300">
                                <td className="px-3 py-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                                    <p className="text-sm">{item.id_jenjang}</p>
                                </td>
                                <td className="px-3 py-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                                    <p className="text-sm">{item.nama_jenjang}</p>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="px-6 py-4 text-center w-full text-gray-600">
                                No jenjang available
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

import { skorDassData } from "../../data";

export default function ScoreDassTable() {
    return (
        <div className="mt-10 ring-1 ring-gray-300 sm:-mx-6 md:mx-0 md:rounded-lg">
            <table className="w-full divide-y divide-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-blue-500">
                    <tr>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                            NRP
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                            Total Skor Depresi
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                            Total Skor Kecemasan
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                            Total Skor Stress
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {skorDassData.map((data) => (
                        <tr key={data.ID_skor} className="border-b border-gray-300">
                            <td className="px-3 py-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                                {data.namaPengguna}
                            </td>
                            <td className="px-3 py-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                                {data.Total_Skor_Depresi}
                            </td>
                            <td className="px-3 py-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                                {data.Total_Skor_Kecemasan}
                            </td>
                            <td className="px-3 py-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                                {data.Total_Skor_Stress}
                            </td>
                            <td className="flex px-3 py-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                                <button className="text-blue-600 mr-2">Edit</button>
                                <p className='px-3 text-gray-400'>|</p>
                                <button className="text-blue-600">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
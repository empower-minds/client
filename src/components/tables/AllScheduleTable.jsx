import { Link } from 'react-router-dom';
import { allSchedule } from '../../data';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function getStatusClass(status) {
  switch (status) {
    case 'Waiting List':
      return 'bg-blue-100 text-blue-600';
    case 'Accepted':
      return 'bg-blue-500 text-white';
    case 'Cancelled':
      return 'bg-red-500 text-white';
    case 'Completed':
      return 'bg-green-500 text-white';
    default:
      return 'bg-gray-200';
  }
}

export default function AllScheduleTable() {
  return (
    <div className="mt-10 ring-1 ring-gray-300 sm:-mx-6 md:mx-0 md:rounded-lg">
      <table className="w-full divide-y divide-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-blue-500">
          <tr>
            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">
              Nama
            </th>
            <th scope="col" className="hidden px-3 py-3.5 text-left text-sm font-semibold text-white lg:table-cell">
              NRP
            </th>
            <th scope="col" className="hidden px-3 py-3.5 text-left text-sm font-semibold text-white lg:table-cell">
              Tanggal
            </th>
            <th scope="col" className="hidden px-3 py-3.5 text-left text-sm font-semibold text-white lg:table-cell">
              Jam Mulai
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
              Jam Selesai
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
              Status
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm text-white font-semibold">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {allSchedule.length ? (
            allSchedule.map((schedule) => (
              <tr key={schedule.kode_konsultasi} className="border-b border-gray-300">
                <td className="px-6 py-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap text-left text-blueGray-700">
                  {schedule.nama}
                </td>
                <td className="px-3 py-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                  {schedule.nrp}
                </td>
                <td className="px-3 py-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                  {schedule.tanggal}
                </td>
                <td className="px-3 py-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                  {schedule.jam_mulai}
                </td>
                <td className="px-3 py-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                  {schedule.jam_selesai}
                </td>
                <td className="px-3 py-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                  <p className={classNames("px-4 py-2 rounded-full w-fit", getStatusClass(schedule.status))}>
                    {schedule.status}
                  </p>
                </td>
                <td className="px-3 py-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                  <Link className="text-blue-600" to="/dashboard/admin/schedule">
                    Detail
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="px-6 py-4 text-center w-full text-gray-600">
                Tidak ada data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

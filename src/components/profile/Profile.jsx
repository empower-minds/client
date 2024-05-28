import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { HiOutlineUserCircle, HiChevronDown } from 'react-icons/hi';

export default function ProfileMenu() {

    function handleSignOut() {
        setAuth(null);
    }

    return (
        <Menu as="div" className="relative">
            <div>
                <Menu.Button className="flex w-full max-w-sm items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <span className="sr-only">Open user menu</span>
                    <HiOutlineUserCircle className="h-10 w-10 mr-2 rounded-full stroke-1" />
                    <div className='mr-2'>
                        <h5 className='text-left font-semibold'>Tiara Putri</h5>
                        <p className="text-gray-500 font-light">Mahasiswa</p>
                    </div>
                    <HiChevronDown className='ml-auto' />
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute z-10 mt-2 w-48 origin-top-left rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                        <button
                            className="block px-4 py-2 text-sm text-gray-700"
                            type="button"
                            onClick={handleSignOut}
                        >
                            Sign out
                        </button>
                    </Menu.Item>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}

import { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Logo from './../../../assets/logo/logo.png';
import { navigation } from "../../../data";

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeNavItem, setActiveNavItem] = useState(''); // State for active navigation item

    useEffect(() => {
        function handleScroll() {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 0); // Update isScrolled based on scroll position

            const sections = document.querySelectorAll('section'); // Mendapatkan semua elemen section
            const scrollPosition = window.scrollY + 100; // Menambahkan margin atas agar lebih akurat
    
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
    
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    const href = `/#${section.id}`;
                    setActiveNavItem(href);
                }
            });
        }
    
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const currentHash = window.location.hash; // Get current hash
        const activeItem = navigation.find((item) => item.href === currentHash); // Find active item
        setActiveNavItem(activeItem?.href || ''); // Update activeNavItem based on hash
    }, []); // Run on component mount    

    return (
        <>
            <nav
                className={`flex items-center justify-between p-6 lg:px-8 ${isScrolled ? 'bg-white shadow-md fixed top-0 left-0 w-full z-50' : ''
                    }`}
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <img className="h-16 w-auto" src={Logo} alt="Empower Minds" />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex justify-center space-x-8 items-center">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={`text-md font-semibold leading-6  inter-regular ${activeNavItem === item.href ? 'text-blue-500' : 'text-gray-700'}`}
                            onClick={() => setActiveNavItem(item.href)} // Update activeNavItem when clicked
                        >
                            {item.name}
                        </a>
                    ))}
                    <a href="/login" className="py-2 px-5 bg-[#5182CC] text-white text-center rounded-md inter-regular">
                        Sign In
                    </a>
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <img className="h-14 w-auto" src={Logo} alt="" />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        onClick={() => { setActiveNavItem(item.href); setMobileMenuOpen(false); }} // Update activeNavItem when clicked and close mobile menu
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="py-6">
                                <a href="/login" className="block w-full py-3 px-4 bg-[#5182CC] text-white text-center rounded-md">
                                    Sign In
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </>
    )
}

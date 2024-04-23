import { HiOutlineHome, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import Logo from './../../assets/logo/logo.png';
import { empowerMinds, contact } from "../../data";

export default function ContactUs() {
  return (
    <section className="pb-10 px-4 bg-[#F4F8FF]" id="contactus">
      <div className="px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-2">
        <div className="max-w-2xl py-6 lg:px-10">
          <a href="/" className="-m-1.5 p-1.5">
            <img
              className="h-16 w-auto"
              src={Logo}
              alt="Empower Minds"
            />
          </a>
          {empowerMinds.map((item, index) => (
            <p key={index} className="mb-4 text-gray-700">
              {item.desc}
            </p>
          ))}
        </div>
        <div className="max-w-2xl lg:pr-10 lg:pl-20 md:pt-10">
          <h2 className="text-xl font-semibold mb-3 text-gray-900">Hubungi Kami</h2>
          <p className="mb-2 pb-2 max-w-xl text-gray-700">
            Hubungi kami lebih lanjut jika Anda membutuhkan bantuan kami, hubungi kontak berikut:
          </p>
          {contact.map((contactus, index) => (
            <div key={index} className="flex items-center mb-2">
              <div className="flex items-center space-x-3">
                {contactus.type === 'kantor' && (
                  <HiOutlineHome className="h-5 w-5 mr-2 text-[#5182CC]" />
                )}
                {contactus.type === 'email' && (
                  <HiOutlineMail className="h-5 w-5 mr-2 text-[#5182CC]" />
                )}
                {contactus.type === 'telp' && (
                  <HiOutlinePhone className="h-5 w-5 mr-2 text-[#5182CC]" />
                )}
                <div className="space-y-2 py-1">
                  <p className="text-gray-900 font-semibold">{contactus.title}</p>
                  <p className="text-gray-700">{contactus.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

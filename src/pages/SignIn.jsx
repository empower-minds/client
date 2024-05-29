import { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';
import Quote from './../assets/illustrations/Image with Quote.png';
import Quote2 from './../assets/illustrations/Image with Quote without radius.png';
import { FaArrowLeftLong } from "react-icons/fa6";
import { Navigate, useNavigate } from 'react-router-dom';

export function SignIn() {
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState(null); // State untuk menyimpan pesan kesalahan

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/auth/signin', formData);
      const { token, role, nama } = response.data;

      localStorage.setItem('token', token);

      setAuth({ token, user: { nama, role } });
      
      if (role === 'Mahasiswa') {
        navigate(`/dashboard`);
      } else if (role === 'Admin') {
        navigate(`/dashboard/admin`);
      } else if (role === 'Penulis') {
        navigate(`/dashboard/penulis`);
      } else {
        console.log('Unknown role:', role);
      }
    } catch (error) {
      setError(error.response ? error.response.data.message : 'Sign-in failed'); // Set pesan kesalahan
      console.error('Sign-in failed:', error.message);
    }
  };

  if (auth !== null) {
    const { role } = auth.user;
    if (role === 'Mahasiswa') {
      return <Navigate to="/dashboard" replace />;
    } else if (role === 'Admin') {
      return <Navigate to="/dashboard/admin" replace />;
    } else if (role === 'Penulis') {
      return <Navigate to="/dashboard/penulis" replace />;
    } else {
      console.log('Unknown role:', role);
    }
  }

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="hidden xl:block relative lg:w-1/2 my-10 mx-auto text-center order-last">
        <img className="mx-auto h-full" src={Quote} alt="Quote" />
      </div>
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-xl lg:max-w-lg">
          <div className="py-10">
            <h2 className="text-3xl lg:text-5xl md:text-3xl sm:text-md nunito-bold tracking-tight text-gray-700 text-center lg:text-left md:text-left">Welcome Back!</h2>
            <p className="mt-2 text-sm nunito-regular text-gray-600 text-center lg:text-left md:text-left">
              Please enter your details to proceed with the platform
            </p>
          </div>
          <div className="mt-4">
            <div className="mt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && <div className="bg-red-100 text-red-700 p-2 rounded">{error}</div>} {/* Alert pesan kesalahan */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#5182CC] focus:outline-none focus:ring-[#5182CC] sm:text-sm"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#5182CC] focus:outline-none focus:ring-[#5182CC] sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="mt-10 flex w-full justify-center rounded-md border border-transparent bg-[#5182CC] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#0A86CC] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Sign in
                  </button>
                  <a href='/' className="text-[#5182CC] block mt-4 pb-10 flex items-center justify-center lg:justify-start">
                    <FaArrowLeftLong className="mr-2 text-[#5182CC]" aria-hidden="true" />
                    Back to homepage
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:hidden lg:w-1/2 relative w-full mx-auto my-auto text-center order-first object-cover">
        <img className="mx-auto h-full lg:h-fit" src={Quote2} alt="Quote without radius" />
      </div>
    </div>
  );
}

import React from 'react'

import { IoMdHome } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import {Link} from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
function Contactus(){
  return (
    <div className="bg-gray-400">
    {/* Header Section */}
    <div className="w-full bg-gradient-to-r from-gray-900 to-blue-700 h-20 text-white flex justify-start items-center">
      <div className="px-4 sm:px-8 md:px-16 lg:px-32">
        <h1 className="text-xl sm:text-2xl font-bold">Contact Us</h1>
      </div>
    </div>
  

    {/* Breadcrumb Section */}
    <div className="px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="h-8 px-4 bg-slate-300 rounded-b flex justify-start items-center space-x-2 sm:space-x-5">
        <Link >
          <IoMdHome className="cursor-pointer" style={{ width: '20px', height: '20px' }} />
        </Link>
        <IoIosArrowForward />
        <span className="cursor-pointer hover:underline text-sm sm:text-md">page</span>
        <IoIosArrowForward />
        <span className="cursor-pointer hover:underline text-sm sm:text-md">contact</span>
      </div>
    </div>

    {/* Main Content Section */}
   

   
    <div className=' bg-gray-100 flex items-center justify-center p-4 sm:p-6 md:p-8"'>
      
    <div className="bg-white px-4 space-y-3 py-2 rounded-lg shadow-lg w-full max-w-6xl transform transition-all duration-500 overflow-hidden">

          <h1 className='text-2xl font-bold'>Contact</h1>
    
          <div className='bg-gray-100 py-2   rounded-md'>
          <div className="bg-gray-100 min-h-screen p-2 ">
      {/* Corporate & H.O Section */}
    
      <div className="bg-white rounded-lg shadow-md   px-4  sm:py-3 sm:px-3 mb-4 transition-all duration-200 ease-in-out hover:scale-105 cursor-pointer">
        <h2 className="text-xl  sm:text-md md:text-lg font-bold text-blue-700 ">
          Corporate & H.O
        </h2>
        <p className="text-gray-700 text-sm  mb-4">
          2nd Floor, E 29, Sector-3, Noida, 201301 (UP)
        </p>
        <p className="text-gray-700  mb-4">
          Need Assistance? Please Complete The Contact Form
        </p>
      </div>

      {/* Zonal Office and Branch Office Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        {/* Zonal Office */}
        <div className="bg-white rounded-lg shadow-md p-6 sm:p-8  md:p-10 lg:p-12 transition-all duration-200 ease-in-out hover:scale-105 cursor-pointer">
          <h3 className="text-sm sm:text-md md:text-lg font-semibold text-blue-700 mb-4">
            Zonal Office
          </h3>
          <p className="text-gray-700 text-sm  md:text-md mb-4">
            3rd Floor, Kamla Complex
          </p>
          <p className="text-gray-700 text-sm md:text-md mb-4">
            Near DAY, Saguna More, Bailey Road Patna - 801503
          </p>
        </div>

        {/* Branch Office */}
        <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 md:p-10 lg:p-12 transition-all duration-200 ease-in-out hover:scale-105 cursor-pointer">
          <h3 className="text-sm font-semibold text-blue-700 mb-4">
            Branch Office
          </h3>
          <p className="text-gray-700 text-sm  mb-4">
            2nd Floor, Chandra Tower, Chowk, Sewia Kalan, Majra, Dehradun,
            Uttarakhand - 248171
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 md:p-10 lg:p-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700 mb-6">
          Contact Us
        </h2>
        <form>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 text-sm sm:text-md font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 sm:px-5 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm sm:text-md font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 sm:px-5 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 text-sm sm:text-md font-medium mb-2">
                Your Phone
              </label>
              <input
                type="text"
                placeholder="Your Phone"
                className="w-full px-4 py-3 sm:px-5 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm sm:text-md font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 sm:px-5 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm sm:text-md font-medium mb-2">
              Your Message
            </label>
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-3 sm:px-5 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
              rows="4"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Info Section */}
      <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 md:p-10 lg:p-12 mt-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700 mb-6">
          Contact Information
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <p className="text-gray-700 text-sm sm:text-md md:text-lg mb-4">
              Email:{" "}
              <a
                href="mailto:info@dmealror.in"
                className="text-blue-700 hover:underline"
              >
                info@dmealror.in
              </a>
            </p>
            <p className="text-gray-700 text-sm sm:text-md md:text-lg mb-4">
              Phone Number:{" "}
              <Link
                 to='/'
                className="text-blue-700 hover:underline"
              >
                +91-8347912409
              </Link>
            </p>
            <div className='space-x-3 flex'>
            <span className='cursor-pointer'><FaFacebook/></span>
            <span className='cursor-pointer'><FaInstagram/></span>
            <span className='cursor-pointer'><FaLinkedin/></span>
            <span className='cursor-pointer'><FaTwitter/></span>
            </div>
           

          </div>
          <div>
           
            {/* Add social media icons/links here */}
          </div>
        </div>
      </div>
    </div>
          </div>


    </div>


    </div>
  </div>
  )
}

export default Contactus
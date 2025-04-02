import React from 'react'

import { IoMdHome } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import {Link} from 'react-router-dom'
function Gallery(){
  return (
    <div className="bg-gray-400">
    {/* Header Section */}
    <div className="w-full bg-gradient-to-r from-gray-900 to-blue-700 h-20 text-white flex justify-start items-center">
      <div className="px-4 sm:px-8 md:px-16 lg:px-32">
        <h1 className="text-xl sm:text-2xl font-bold">Gallery</h1>
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
        <span className="cursor-pointer hover:underline text-sm sm:text-md">gallery</span>
      </div>
    </div>

    {/* Main Content Section */}
   

   
    <div className=' bg-gray-100 flex items-center justify-center p-4 sm:p-6 md:p-8"'>
      
    <div className="bg-white px-4 space-y-3 py-2 rounded-lg shadow-lg w-full max-w-6xl transform transition-all duration-500 overflow-hidden">

          <h1 className=' text-sm    md:text-2xl'><span className='text-blue-500 font-bold'>Our</span><span className='text-orange-400 font-bold'>Gallery</span></h1>
    
          <div className='bg-gray-100 py-5   rounded-md'>
                  <h1 className='text-sm  md:text-2xl lg:text-3xl  text-center text-blue-600 font-bold'>Up Comming!</h1>
          </div>


    </div>


    </div>
  </div>
  )
}

export default Gallery
import React from 'react'
import { IoMdHome } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import {Link} from 'react-router-dom'


import home2 from './../../assert/Images/home2.jpg'


function Aboutus({setactiveState}) {
  
    

  return (
    <div className="bg-gray-400">
    {/* Header Section */}
    <div className="w-full bg-gradient-to-r from-gray-900 to-blue-700 h-20 text-white flex justify-start items-center">
      <div className="px-4 sm:px-8 md:px-16 lg:px-32">
        <h1 className="text-xl sm:text-2xl font-bold">About Us</h1>
      </div>
    </div>

    {/* Breadcrumb Section */}
    <div className="px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="h-8 px-4 bg-slate-300 rounded-b flex justify-start items-center space-x-2 sm:space-x-5">
        <Link onClick={() => setactiveState('home')}>
          <IoMdHome className="cursor-pointer" style={{ width: '20px', height: '20px' }} />
        </Link>
        <IoIosArrowForward />
        <span className="cursor-pointer hover:underline text-sm sm:text-md">page</span>
        <IoIosArrowForward />
        <span className="cursor-pointer hover:underline text-sm sm:text-md">About Us</span>
      </div>
    </div>

    {/* Main Content Section */}
    <div className="w-full bg-gray-100 flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-6xl transform transition-all duration-500 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6">
          {/* Text Section (Left Side) */}
          <div className="flex flex-col justify-center p-2 sm:p-4">
           
            <h1 className="text-xl sm:text-2xl font-normal text-green-600 mb-4 sm:mb-6">
              About Us
            </h1>

            <div className="text-gray-700 text-sm sm:text-md leading-relaxed space-y-3 sm:space-y-4">
              <p>
                Welcome to <span className="font-semibold text-blue-600">Dr Realtor</span>, your premier destination for all your plot needs in Patna, Bihta, and the surrounding areas. As a trusted and experienced real estate marketing and sales team, we specialize in connecting buyers and sellers in the ever-growing real estate market.
              </p>
              <p>
                At <span className="font-semibold text-blue-600">Dr Realtor</span>, we understand that buying or selling a plot is a significant decision, both financially and emotionally. That's why we have assembled a team of dedicated professionals who possess an in-depth understanding of the local market dynamics, trends, and regulations. With our expertise and personalized approach, we aim to make your plot sale experience smooth, efficient, and rewarding.
              </p>
            </div>
          </div>

          {/* Image Section (Right Side) */}
          <div className="flex justify-center items-center p-2 sm:p-4">
            <img
              src={home2} // Replace with your image path
              alt="Dr Realtor"
              className="rounded-lg shadow-lg object-cover"
              style={{ width: '100%', maxWidth: '500px', height: 'auto' }}
            />
          </div>
        </div>
      </div>

        
    </div> 

   
    <div className=' bg-gray-100 flex items-center justify-center p-4 sm:p-6 md:p-8"'>
      
    <div className="bg-white rounded-lg shadow-lg w-full max-w-6xl transform transition-all duration-500 overflow-hidden">


        <div className='px-4 md:px-16 lg:px-20'>
        

        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">About Us</h1>
      <p className="text-gray-700 text-sm sm:text-md leading-relaxed space-y-3 sm:space-y-4">
        Welcome to <strong>Dr Realtor</strong>, your premier destination for all your plot needs in Patna, Bihta, and the surrounding areas.
        As a trusted and experienced real estate marketing and sales team, we specialize in connecting buyers and sellers in the ever-growing real estate market.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6">Location Of Dr Realtor Properties</h2>
      <p className="text-gray-700 text-sm sm:text-md leading-relaxed space-y-3 sm:space-y-4">
        With a focus on Patna, Bihta, and nearby areas, we have developed an extensive network and comprehensive knowledge of the local real estate landscape.
        We stay up-to-date with the latest developments, infrastructure projects, and investment opportunities in these regions.
        Whether you are looking for residential, commercial, or agricultural plots, our team is well-equipped to assist you in finding the perfect property that aligns with your requirements and investment goals.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6">Transparency</h2>
      <p className="text-gray-700 text-sm sm:text-md leading-relaxed space-y-3 sm:space-y-4">
        At Dr Realtor, we believe in transparency, integrity, and professionalism. We prioritize open and honest communication with our clients,
        ensuring that you are fully informed at every stage of the plot sale process. Our dedicated team will provide you with accurate and reliable information,
        assist in property valuation, guide you through legal procedures, and negotiate on your behalf, all with the utmost dedication and commitment.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6">Property Potential</h2>
      <p className="text-gray-700 text-sm sm:text-md leading-relaxed space-y-3 sm:space-y-4">
        To maximize the visibility and reach of your property, we employ cutting-edge marketing strategies and tools.
        Our comprehensive approach includes professional photography, virtual tours, targeted online advertising, and leveraging our extensive network of potential buyers.
        Through our proactive marketing efforts, we ensure that your plot receives the attention it deserves, leading to a faster and more successful sale.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6">Expert Team</h2>
      <p className="text-gray-700 text-sm sm:text-md leading-relaxed space-y-3 sm:space-y-4">
        At Dr Realtor, we pride ourselves on offering personalized services that cater to your unique needs.
        Our team takes the time to understand your specific requirements, preferences, and budget constraints.
        Whether you are a first-time buyer, an experienced investor, or a property owner looking to sell, we are here to provide expert guidance and support throughout the entire process.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6  sm:text-md leading-relaxed space-y-3 sm:space-y-4">Development</h2>
      <p className="text-gray-700 text-sm sm:text-md leading-relaxed space-y-3 sm:space-y-4">
        We are deeply committed to building long-term relationships with our clients. Your satisfaction is our ultimate goal,
        and we go the extra mile to exceed your expectations. Our team is always accessible, ready to address your concerns, answer your questions,
        and provide timely assistance even after the plot sale is completed.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 sm:text-md leading-relaxed space-y-3 sm:space-y-4">Support</h2>
      <p className="text-gray-700 text-sm sm:text-md leading-relaxed space-y-3 sm:space-y-4">
        Thank you for considering Dr Realtor for your plot needs. Contact us today to experience our exceptional services, personalized approach,
        and expertise in Patna, Bihta, and the surrounding areas. Let us be your trusted partner in achieving your real estate goals and turning your plot ownership dreams into reality.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6  sm:text-md leading-relaxed space-y-3 sm:space-y-4">About Dr Realtor</h2>
      <p className="text-gray-700 text-sm sm:text-md leading-relaxed space-y-3 sm:space-y-4">
        At Dr Realtor, our services ensure that every transaction is smooth, transparent, and efficient. Our team remains committed to providing the best opportunities
        for buyers and sellers, leveraging our extensive experience and market knowledge to deliver top-notch real estate solutions.
      </p>

        </div>
     
    </div>


    </div>
  </div>
  )
}

export default Aboutus
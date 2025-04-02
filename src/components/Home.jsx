import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import first from './../assert/Images/first.jpg';
import second from './../assert/Images/second.jpg';
import third from './../assert/Images/third.jpg';
import home2 from './../assert/Images/home2.jpg';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
  };

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Slider Section */}
      <div className="w-full mt-16 md:mt-20 mx-auto">
        <Slider {...settings}>
          <div className="relative">
            <img 
              src={first} 
              alt="Slide 1" 
              className="w-full h-[300px] md:h-[500px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 md:p-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-white text-xl md:text-3xl font-bold">Realtor</h2>
                <p className="text-white text-lg md:text-2xl">Realize Your Dream</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={second} 
              alt="Slide 2" 
              className="w-full h-[300px] md:h-[500px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 md:p-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-white text-xl md:text-3xl font-bold">Premium Properties</h2>
                <p className="text-white text-lg md:text-2xl">Find Your Perfect Plot</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={third} 
              alt="Slide 3" 
              className="w-full h-[300px] md:h-[500px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 md:p-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-white text-xl md:text-3xl font-bold">Trusted Realtor</h2>
                <p className="text-white text-lg md:text-2xl">Serving Patna & Beyond</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      {/* Welcome Section */}
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
              <img
                src={home2}
                alt="Dr Realtor"
                className="w-full h-auto max-h-[300px] md:max-h-[400px] object-cover rounded-lg"
              />
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 p-6">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Welcome To Dr Realtor
              </h1>

              <div className="text-gray-700">
                <p className="mb-4">
                  Welcome to Dr Realtor, your premier destination for all your plot needs in Patna, Blhta, and the
                  surrounding areas. Dr Realtor is dedicated to delivering exceptional service, professionalism,
                  and integrity in every aspect of our operations.
                </p>

                {/* Collapsible Content */}
                <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[500px]' : 'max-h-0'}`}>
                  <p className="mb-4">
                    We are committed to being your trusted partner in plot sales, providing the knowledge, expertise, 
                    and personalized attention you need to achieve your real estate goals in Patna, Blhta, and the 
                    wider Bihar region.
                  </p>
                  <p>
                    At Dr Realtor, we understand that buying or selling a plot is a significant decision, both
                    financially and emotionally. That's why we have assembled a team of dedicated professionals
                    who possess an in-depth understanding of the local market dynamics, trends, and regulations.
                    With our expertise and personalized approach, we aim to make your plot sale experience
                    smooth, efficient, and rewarding.
                  </p>
                </div>
              </div>

              {/* Read More Button */}
              <div className="mt-6">
                <button
                  onClick={toggleReadMore}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-300"
                >
                  {isExpanded ? 'Read Less' : 'Read More...'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;





























import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';
import { FiMapPin, FiHome, FiDollarSign, FiShare2 } from 'react-icons/fi';
import ReactPlayer from 'react-player';

// Images
import first from './../assert/Images/first.jpg';
import second from './../assert/Images/second.jpg';
import third from './../assert/Images/third.jpg';
import home2 from './../assert/Images/home2.jpg';
import neighborhood from './../assert/Images/home2.jpg';

import video2 from './../assert/Images/video2.mp4'
import logo from './../assert/Images/Logo.png'
import agent1 from './../assert/Images/agent1.avif'
import agent2 from './../assert/Images/agent2.avif'
import agent3 from './../assert/Images/agent3.avif'

const Home = () => {
  // Slider settings
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  // State
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Sample data
  const agents = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Senior Realtor",
      experience: "12 years",
      properties: 245,
      image: agent1
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Luxury Specialist",
      experience: "8 years",
      properties: 178,
      image: agent2
    },
    {
      id: 3,
      name: "David Wilson",
      title: "Commercial Expert",
      experience: "15 years",
      properties: 320,
      image: agent3
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Emily & James Peterson",
      role: "Home Buyers",
      quote: "Big Bull Real Estate made our dream home a reality. Their team was professional, knowledgeable, and truly cared about finding us the perfect property.",
      image: "testimonial1.jpg"
    },
    {
      id: 2,
      name: "Robert Kim",
      role: "Investor",
      quote: "As an out-of-state investor, I needed a realtor I could trust. Dr Realtor exceeded all expectations with their market expertise and attention to detail.",
      image: "testimonial2.jpg"
    },
    {
      id: 3,
      name: "Lisa Rodriguez",
      role: "Seller",
      quote: "Our home sold for 15% above asking price in just 9 days. The marketing strategy and negotiation skills of Dr Realtor are unmatched.",
      image: "testimonial3.jpg"
    }
  ];

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleVideo = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  return (
    <div className="min-h-screen bg-gray-100 overflow-x-hidden">
      <div className="w-full max-w-[100vw] mx-auto">
        <div className="w-full mt-16 md:mt-20 mx-auto">
          <Slider {...settings}>
            {/* Slide 1 */}
            <div className="relative">
              <img 
                src={first} 
                alt="Slide 1" 
                className="w-full h-[300px] md:h-[500px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 md:p-6">
                <div className="max-w-6xl mx-auto">
                  <h2 className="text-white text-xl md:text-3xl font-bold">Big Bull Real Estate</h2>
                  <p className="text-white text-lg md:text-2xl">Realize Your Dream</p>
                </div>
              </div>
            </div>

            {/* Slide 2 - Video */}
            <div className="relative">
              <div className="w-full h-[300px] md:h-[500px]">
                <ReactPlayer 
                  url={video2}
                  width="100%"
                  height="100%"
                  playing={currentSlide === 1}
                  muted={false}
                  loop={true}
                  controls={false}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 md:p-6">
                <div className="max-w-6xl mx-auto">
                  <h2 className="text-white text-xl md:text-3xl font-bold">Premium Properties</h2>
                  <p className="text-white text-lg md:text-2xl">Find Your Perfect Plot</p>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
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
      </div>

      {/* Welcome Section */}
      <div className="w-full max-w-[100vw] mx-auto px-4 py-8 md:py-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
              <img
                src={home2}
                alt="The Big Bull"
                className="w-full h-auto max-h-[300px] md:max-h-[400px] object-cover rounded-lg"
              />
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 p-6">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Welcome To Big Bull Real Estate
              </h1>

              <div className="text-gray-700">
                <p className="mb-4">
                  <strong>Welcome To Big Bull Real Estate,</strong> your premier destination for all your plot needs in Patna, Blhta, and the
                  surrounding areas. Big Bull is dedicated to delivering exceptional service, professionalism,
                  and integrity in every aspect of our operations.
                </p>

                {isExpanded && (
                  <>
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
                  </>
                )}
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

      {/* Our Agents Section */}
      <section id="agents" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Agents</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our team of experienced professionals is ready to guide you through every step of your real estate journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {agents.map((agent) => (
              <motion.div 
                key={agent.id}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300"
              >
               <div className="relative flex justify-center items-center">
  <div
    className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-cover bg-center bg-no-repeat rounded-md"
    style={{ backgroundImage: `url(${agent.image})` }}
  >
    {/* Optional content here */}
  </div>




                  
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-white text-xl font-bold">{agent.name}</h3>
                    <p className="text-blue-300">{agent.title}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between mb-4">
                    <div>
                      <p className="text-gray-500 text-sm">Experience</p>
                      <p className="font-semibold">{agent.experience}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Properties Sold</p>
                      <p className="font-semibold">{agent.properties}</p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
                      Contact
                    </button>
                    <button className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-100 transition">
                      <FiShare2 />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhood Section */}
      <section id="neighborhoods" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Neighborhood Guides</h2>
                <p className="text-gray-600 mb-4">
                  Discover the unique character of each neighborhood with our comprehensive guides. From school districts 
                  to local amenities, we provide all the information you need to find your perfect location.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                      <FiMapPin className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">School Ratings</h4>
                      <p className="text-gray-600 text-sm">Detailed information on local schools and districts</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                      <FiHome className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Local Amenities</h4>
                      <p className="text-gray-600 text-sm">Parks, restaurants, shopping and more</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                      <FiDollarSign className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Market Trends</h4>
                      <p className="text-gray-600 text-sm">Up-to-date pricing and inventory data</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="md:w-1/2">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative rounded-xl overflow-hidden shadow-xl"
              >
                <img 
                  src={neighborhood} 
                  alt="Neighborhood" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Patna City Center</h3>
                  <p className="mb-4">Vibrant urban living with historic charm</p>
                  <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-lg font-semibold transition">
                    Explore Area
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white text-gray-800 rounded-xl p-8 shadow-lg">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
                  <img 
                    src={logo} 
                    alt={testimonials[currentTestimonial].name} 
                    className="w-24 h-24 rounded-full object-cover border-4 border-blue-200"
                  />
                </div>
                <div className="md:w-3/4 md:pl-8">
                  <div className="text-blue-600 mb-4 text-2xl">"</div>
                  <p className="text-lg mb-6">{testimonials[currentTestimonial].quote}</p>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-blue-600">{testimonials[currentTestimonial].role}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${currentTestimonial === index ? 'bg-white' : 'bg-blue-300'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Dream Home?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our team is standing by to help you navigate the real estate market and find the perfect property for your needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Contact an Agent
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Browse Listings
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;










// import React, { useState } from 'react';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import first from './../assert/Images/first.jpg';
// import second from './../assert/Images/second.jpg';
// import third from './../assert/Images/third.jpg';
// import home2 from './../assert/Images/home2.jpg';

// const Home = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     adaptiveHeight: true,
//   };

//   const [isExpanded, setIsExpanded] = useState(false);

//   const toggleReadMore = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Hero Slider Section */}
//       <div className="w-full mt-16 md:mt-20 mx-auto">
//         <Slider {...settings}>
//           <div className="relative">
//             <img 
//               src={first} 
//               alt="Slide 1" 
//               className="w-full h-[300px] md:h-[500px] object-cover"
//             />
//             <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 md:p-6">
//               <div className="max-w-6xl mx-auto">
//                 <h2 className="text-white text-xl md:text-3xl font-bold">Realtor</h2>
//                 <p className="text-white text-lg md:text-2xl">Realize Your Dream</p>
//               </div>
//             </div>
//           </div>
          
//           <div className="relative">
//             <img 
//               src={second} 
//               alt="Slide 2" 
//               className="w-full h-[300px] md:h-[500px] object-cover"
//             />
//             <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 md:p-6">
//               <div className="max-w-6xl mx-auto">
//                 <h2 className="text-white text-xl md:text-3xl font-bold">Premium Properties</h2>
//                 <p className="text-white text-lg md:text-2xl">Find Your Perfect Plot</p>
//               </div>
//             </div>
//           </div>
          
//           <div className="relative">
//             <img 
//               src={third} 
//               alt="Slide 3" 
//               className="w-full h-[300px] md:h-[500px] object-cover"
//             />
//             <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 md:p-6">
//               <div className="max-w-6xl mx-auto">
//                 <h2 className="text-white text-xl md:text-3xl font-bold">Trusted Realtor</h2>
//                 <p className="text-white text-lg md:text-2xl">Serving Patna & Beyond</p>
//               </div>
//             </div>
//           </div>
//         </Slider>
//        </div>
       

















//       {/* Welcome Section */}
//       <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
//         <div className="bg-white rounded-lg shadow-md overflow-hidden">
//           <div className="flex flex-col md:flex-row">
//             {/* Image Section */}
//             <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
//               <img
//                 src={home2}
//                 alt="Dr Realtor"
//                 className="w-full h-auto max-h-[300px] md:max-h-[400px] object-cover rounded-lg"
//               />
//             </div>

//             {/* Text Section */}
//             <div className="w-full md:w-1/2 p-6">
//               <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
//                 Welcome To Dr Realtor
//               </h1>

//               <div className="text-gray-700">
//                 <p className="mb-4">
//                   Welcome to Dr Realtor, your premier destination for all your plot needs in Patna, Blhta, and the
//                   surrounding areas. Dr Realtor is dedicated to delivering exceptional service, professionalism,
//                   and integrity in every aspect of our operations.
//                 </p>

//                 {/* Collapsible Content */}
//                 <div className={`overflow-hidden transition-all duration-500 ₹{isExpanded ? 'max-h-[500px]' : 'max-h-0'}`}>
//                   <p className="mb-4">
//                     We are committed to being your trusted partner in plot sales, providing the knowledge, expertise, 
//                     and personalized attention you need to achieve your real estate goals in Patna, Blhta, and the 
//                     wider Bihar region.
//                   </p>
//                   <p>
//                     At Dr Realtor, we understand that buying or selling a plot is a significant decision, both
//                     financially and emotionally. That's why we have assembled a team of dedicated professionals
//                     who possess an in-depth understanding of the local market dynamics, trends, and regulations.
//                     With our expertise and personalized approach, we aim to make your plot sale experience
//                     smooth, efficient, and rewarding.
//                   </p>
//                 </div>
//               </div>

//               {/* Read More Button */}
//               <div className="mt-6">
//                 <button
//                   onClick={toggleReadMore}
//                   className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-300"
//                 >
//                   {isExpanded ? 'Read Less' : 'Read More...'}
//                 </button>
//               </div>
//             </div>

            
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;










































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
import videoBg from './../assert/Images/Video.mp4';
import video2 from './../assert/Images/video2.mp4'
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
    // dots: true,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
    // adaptiveHeight: true,
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
      image: "agent1.jpg"
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Luxury Specialist",
      experience: "8 years",
      properties: 178,
      image: "agent2.jpg"
    },
    {
      id: 3,
      name: "David Wilson",
      title: "Commercial Expert",
      experience: "15 years",
      properties: 320,
      image: "agent3.jpg"
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
    <div className="min-h-screen bg-gray-100">
     
      <div className="w-full mt-16 md:mt-20 mx-auto">



        {/* <Slider {...settings}>
          <div className="relative">
            <img 
              src={first} 
              alt="Slide 1" 
              className="w-full h-[300px] md:h-[500px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 md:p-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-white text-xl md:text-3xl font-bold">Big Bull RealState</h2>
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
        </Slider> */}

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
        playing={currentSlide === 1}  // Only plays on active slide
        muted={false}                 // Sound ON
        loop={true}
        controls={false}             // Hide controls
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
                <div className="relative">
                  <img 
                    src={agent.image} 
                    alt={agent.name} 
                    className="w-full h-64 object-cover"
                  />
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

      {/* Video Tour Section */}
      {/* <section className="py-16 bg-gray-900 text-white relative">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={videoBg} 
            alt="Video background" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Virtual Property Tours</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience our properties from the comfort of your home with our immersive virtual tours
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="w-full max-w-4xl relative rounded-xl overflow-hidden shadow-2xl">
              {!isVideoPlaying ? (
                <div className="relative">
                  <img 
                    src={videoBg} 
                    alt="Video placeholder" 
                    className="w-full h-auto"
                  />
                  <button 
                    onClick={toggleVideo}
                    className="absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-30 hover:bg-opacity-40 transition"
                  >
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </button>
                </div>
              ) : (
                <div className="aspect-w-16 aspect-h-9">
                  <ReactPlayer 
                    url={videoBg} 
                    width="100%"
                    height="100%"
                    controls={true}
                    playing={isVideoPlaying}
                    onEnded={toggleVideo}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>   */}


  {/*Virtual Tour */}
 {/* <section className="py-8 md:py-16 bg-gray-900 text-white relative">
  <div className="absolute inset-0 overflow-hidden">
    <img 
      src={videoBg} 
      alt="Video background" 
      className="w-full h-full object-cover opacity-30"
    />
  </div>
  
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="text-center mb-8 md:mb-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">Virtual Property Tours</h2>
      <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto">
        Experience our properties from the comfort of your home with our immersive virtual tours
      </p>
    </div>
    
    <div className="flex justify-center">
      <div className="w-full max-w-6xl relative rounded-lg md:rounded-xl overflow-hidden shadow-xl md:shadow-2xl">
        {!isVideoPlaying ? (
          <div className="relative">
            <img 
              src={videoBg} 
              alt="Video placeholder" 
              className="w-full h-auto min-h-[200px] md:min-h-[300px] object-cover"
            />
            <button 
              onClick={toggleVideo}
              className="absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-30 hover:bg-opacity-40 transition"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
            </button>
          </div>
        ) : (
          <div className="relative w-full h-0 pb-[56.25%]"> 
            <ReactPlayer 
              url={videoBg} 
              width="100%"
              height="100%"
              className="absolute top-0 left-0"
              controls={true}
              playing={isVideoPlaying}
              onEnded={toggleVideo}
              config={{
                file: {
                  attributes: {
                    controlsList: 'nodownload',
                    playsInline: true
                  }
                }
              }}
            />
          </div>
        )}
      </div>
    </div>
    
    
    {isVideoPlaying && (
      <button 
        onClick={() => document.querySelector('.react-player')?.requestFullscreen()}
        className="mt-4 mx-auto flex items-center text-sm md:text-base text-blue-400 hover:text-blue-300 transition"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
        </svg>
        View Fullscreen
      </button>
    )}
  </div>
</section>  */}

      {/* Neighborhood Guide Section */}
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
                    src={testimonials[currentTestimonial].image} 
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
                  className={`w-3 h-3 rounded-full ₹{currentTestimonial === index ? 'bg-white' : 'bg-blue-300'}`}
                  aria-label={`Go to testimonial ₹{index + 1}`}
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







































// import React, { useState } from 'react';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import { motion } from 'framer-motion';
// import { FiMapPin, FiHome, FiDollarSign, FiShare2 } from 'react-icons/fi';

// // Images (make sure to import these or replace with your paths)
// import first from './../assert/Images/first.jpg';
// import second from './../assert/Images/second.jpg';
// import third from './../assert/Images/third.jpg';
// import home2 from './../assert/Images/home2.jpg';
// import neighborhood from './../assert/Images/home2.jpg';
// import ReactPlayer from 'react-player';
// import videoBg from './../assert/Images/Video.mp4'
// const Home = () => {
//   // Slider settings
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     adaptiveHeight: true,
//   };

//   // State
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [currentTestimonial, setCurrentTestimonial] = useState(0);
//   const [isVideoPlaying, setIsVideoPlaying] = useState(false);

//   // Sample data
//   const agents = [
//     {
//       id: 1,
//       name: "Sarah Johnson",
//       title: "Senior Realtor",
//       experience: "12 years",
//       properties: 245,
//       image: "agent1.jpg" // Replace with actual import
//     },
//     {
//       id: 2,
//       name: "Michael Chen",
//       title: "Luxury Specialist",
//       experience: "8 years",
//       properties: 178,
//       image: "agent2.jpg" // Replace with actual import
//     },
//     {
//       id: 3,
//       name: "David Wilson",
//       title: "Commercial Expert",
//       experience: "15 years",
//       properties: 320,
//       image: "agent3.jpg" // Replace with actual import
//     }
//   ];

//   const testimonials = [
//     {
//       id: 1,
//       name: "Emily & James Peterson",
//       role: "Home Buyers",
//       quote: "Dr Realtor made our dream home a reality. Their team was professional, knowledgeable, and truly cared about finding us the perfect property.",
//       image: "testimonial1.jpg" // Replace with actual import
//     },
//     {
//       id: 2,
//       name: "Robert Kim",
//       role: "Investor",
//       quote: "As an out-of-state investor, I needed a realtor I could trust. Dr Realtor exceeded all expectations with their market expertise and attention to detail.",
//       image: "testimonial2.jpg" // Replace with actual import
//     },
//     {
//       id: 3,
//       name: "Lisa Rodriguez",
//       role: "Seller",
//       quote: "Our home sold for 15% above asking price in just 9 days. The marketing strategy and negotiation skills of Dr Realtor are unmatched.",
//       image: "testimonial3.jpg" // Replace with actual import
//     }
//   ];

//   const toggleReadMore = () => {
//     setIsExpanded(!isExpanded);
//   };

//     const toggleVideo = () => {
//     setIsVideoPlaying(!isVideoPlaying);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Hero Slider Section */}
//       <div className="w-full mt-16 md:mt-20 mx-auto">
//         <Slider {...settings}>
//           <div className="relative">
//             <img 
//               src={first} 
//               alt="Slide 1" 
//               className="w-full h-[300px] md:h-[500px] object-cover"
//             />
//             <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 md:p-6">
//               <div className="max-w-6xl mx-auto">
//                 <h2 className="text-white text-xl md:text-3xl font-bold">Realtor</h2>
//                 <p className="text-white text-lg md:text-2xl">Realize Your Dream</p>
//               </div>
//             </div>
//           </div>
          
//           <div className="relative">
//             <img 
//               src={second} 
//               alt="Slide 2" 
//               className="w-full h-[300px] md:h-[500px] object-cover"
//             />
//             <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 md:p-6">
//               <div className="max-w-6xl mx-auto">
//                 <h2 className="text-white text-xl md:text-3xl font-bold">Premium Properties</h2>
//                 <p className="text-white text-lg md:text-2xl">Find Your Perfect Plot</p>
//               </div>
//             </div>
//           </div>
          
//           <div className="relative">
//             <img 
//               src={third} 
//               alt="Slide 3" 
//               className="w-full h-[300px] md:h-[500px] object-cover"
//             />
//             <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 md:p-6">
//               <div className="max-w-6xl mx-auto">
//                 <h2 className="text-white text-xl md:text-3xl font-bold">Trusted Realtor</h2>
//                 <p className="text-white text-lg md:text-2xl">Serving Patna & Beyond</p>
//               </div>
//             </div>
//           </div>
//         </Slider>
//       </div>

//       {/* Welcome Section */}
//       <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
//         <div className="bg-white rounded-lg shadow-md overflow-hidden">
//           <div className="flex flex-col md:flex-row">
//             {/* Image Section */}
//             <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
//               <img
//                 src={home2}
//                 alt="Dr Realtor"
//                 className="w-full h-auto max-h-[300px] md:max-h-[400px] object-cover rounded-lg"
//               />
//             </div>

//             {/* Text Section */}
//             <div className="w-full md:w-1/2 p-6">
//               <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
//                 Welcome To Dr Realtor
//               </h1>

//               <div className="text-gray-700">
//                 <p className="mb-4">
//                   Welcome to Dr Realtor, your premier destination for all your plot needs in Patna, Blhta, and the
//                   surrounding areas. Dr Realtor is dedicated to delivering exceptional service, professionalism,
//                   and integrity in every aspect of our operations.
//                 </p>

//                 {isExpanded && (
//                   <>
//                     <p className="mb-4">
//                       We are committed to being your trusted partner in plot sales, providing the knowledge, expertise, 
//                       and personalized attention you need to achieve your real estate goals in Patna, Blhta, and the 
//                       wider Bihar region.
//                     </p>
//                     <p>
//                       At Dr Realtor, we understand that buying or selling a plot is a significant decision, both
//                       financially and emotionally. That's why we have assembled a team of dedicated professionals
//                       who possess an in-depth understanding of the local market dynamics, trends, and regulations.
//                       With our expertise and personalized approach, we aim to make your plot sale experience
//                       smooth, efficient, and rewarding.
//                     </p>
//                   </>
//                 )}
//               </div>

//               {/* Read More Button */}
//               <div className="mt-6">
//                 <button
//                   onClick={toggleReadMore}
//                   className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-300"
//                 >
//                   {isExpanded ? 'Read Less' : 'Read More...'}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Our Agents Section */}
//       <section id="agents" className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Agents</h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Our team of experienced professionals is ready to guide you through every step of your real estate journey
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {agents.map((agent) => (
//               <motion.div 
//                 key={agent.id}
//                 whileHover={{ y: -10 }}
//                 className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300"
//               >
//                 <div className="relative">
//                   <img 
//                     src={agent.image} 
//                     alt={agent.name} 
//                     className="w-full h-64 object-cover"
//                   />
//                   <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
//                     <h3 className="text-white text-xl font-bold">{agent.name}</h3>
//                     <p className="text-blue-300">{agent.title}</p>
//                   </div>
//                 </div>
                
//                 <div className="p-6">
//                   <div className="flex justify-between mb-4">
//                     <div>
//                       <p className="text-gray-500 text-sm">Experience</p>
//                       <p className="font-semibold">{agent.experience}</p>
//                     </div>
//                     <div>
//                       <p className="text-gray-500 text-sm">Properties Sold</p>
//                       <p className="font-semibold">{agent.properties}</p>
//                     </div>
//                   </div>
                  
//                   <div className="flex space-x-3">
//                     <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
//                       Contact
//                     </button>
//                     <button className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-100 transition">
//                       <FiShare2 />
//                     </button>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>




  
   
//       <section className="py-16 bg-gray-900 text-white relative">
//          <div className="absolute inset-0 overflow-hidden">
//            <img 
//             src={videoBg} 
//             alt="Video background" 
//             className="w-full h-full object-cover opacity-30"
//           />
//         </div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold mb-4">Virtual Property Tours</h2>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//               Experience our properties from the comfort of your home with our immersive virtual tours
//             </p>
//           </div>
          
//           <div className="flex justify-center">
//             <div className="w-full max-w-4xl relative rounded-xl overflow-hidden shadow-2xl">
//               {!isVideoPlaying && (
//                 <div className="relative">
//                   <img 
//                     src={videoBg} 
//                     alt="Video placeholder" 
//                     className="w-full h-auto"
//                   />
//                   <button 
//                     onClick={toggleVideo}
//                     className="absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-30 hover:bg-opacity-40 transition"
//                   >
//                     <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition">
//                       <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
//                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
//                       </svg>
//                     </div>
//                   </button>
//                 </div>
//               )}
              
//               {isVideoPlaying && (
//                 <div className="aspect-w-16 aspect-h-9">
//                   <ReactPlayer 
//                     url="https://www.youtube.com/watch?v=LXb3EKWsInQ" 
//                     width="100%"
//                     height="100%"
//                     controls={true}
//                     playing={isVideoPlaying}
//                     onEnded={toggleVideo}
//                   />
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>







//       {/* Neighborhood Guide Section */}
//       <section id="neighborhoods" className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col md:flex-row items-center">
//             <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
//               <motion.div 
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8 }}
//                 viewport={{ once: true }}
//               >
//                 <h2 className="text-3xl font-bold text-gray-800 mb-6">Neighborhood Guides</h2>
//                 <p className="text-gray-600 mb-4">
//                   Discover the unique character of each neighborhood with our comprehensive guides. From school districts 
//                   to local amenities, we provide all the information you need to find your perfect location.
//                 </p>
//                 <div className="space-y-4">
//                   <div className="flex items-start">
//                     <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
//                       <FiMapPin className="text-blue-600" />
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-800">School Ratings</h4>
//                       <p className="text-gray-600 text-sm">Detailed information on local schools and districts</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start">
//                     <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
//                       <FiHome className="text-blue-600" />
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-800">Local Amenities</h4>
//                       <p className="text-gray-600 text-sm">Parks, restaurants, shopping and more</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start">
//                     <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
//                       <FiDollarSign className="text-blue-600" />
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-800">Market Trends</h4>
//                       <p className="text-gray-600 text-sm">Up-to-date pricing and inventory data</p>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
            
//             <div className="md:w-1/2">
//               <motion.div 
//                 initial={{ opacity: 0, x: 20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8 }}
//                 viewport={{ once: true }}
//                 className="relative rounded-xl overflow-hidden shadow-xl"
//               >
//                 <img 
//                   src={neighborhood} 
//                   alt="Neighborhood" 
//                   className="w-full h-auto"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
//                 <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
//                   <h3 className="text-2xl font-bold mb-2">Patna City Center</h3>
//                   <p className="mb-4">Vibrant urban living with historic charm</p>
//                   <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-lg font-semibold transition">
//                     Explore Area
//                   </button>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-16 bg-blue-600 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
//             <p className="text-xl text-blue-100 max-w-3xl mx-auto">
//               Don't just take our word for it - hear from our satisfied clients
//             </p>
//           </div>
          
//           <div className="relative max-w-4xl mx-auto">
//             <div className="bg-white text-gray-800 rounded-xl p-8 shadow-lg">
//               <div className="flex flex-col md:flex-row items-center">
//                 <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
//                   <img 
//                     src={testimonials[currentTestimonial].image} 
//                     alt={testimonials[currentTestimonial].name} 
//                     className="w-24 h-24 rounded-full object-cover border-4 border-blue-200"
//                   />
//                 </div>
//                 <div className="md:w-3/4 md:pl-8">
//                   <div className="text-blue-600 mb-4 text-2xl">"</div>
//                   <p className="text-lg mb-6">{testimonials[currentTestimonial].quote}</p>
//                   <div>
//                     <h4 className="font-bold text-gray-800">{testimonials[currentTestimonial].name}</h4>
//                     <p className="text-blue-600">{testimonials[currentTestimonial].role}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             <div className="flex justify-center mt-8 space-x-2">
//               {testimonials.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentTestimonial(index)}
//                   className={`w-3 h-3 rounded-full ₹{currentTestimonial === index ? 'bg-white' : 'bg-blue-300'}`}
//                   aria-label={`Go to testimonial ₹{index + 1}`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action Section */}
//       <section className="py-16 bg-gray-800 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-bold mb-6">Ready to Find Your Dream Home?</h2>
//           <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
//             Our team is standing by to help you navigate the real estate market and find the perfect property for your needs.
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
//             <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
//               Contact an Agent
//             </button>
//             <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
//               Browse Listings
//             </button>
//           </div>
//         </div>
//       </section>






//     </div>
//   );
// };

// export default Home;




































// import React, { useState, useEffect } from 'react';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import { FiSearch, FiHome, FiMapPin, FiDollarSign, FiHeart, FiShare2, FiChevronRight } from 'react-icons/fi';
// import { FaBath, FaBed, FaRulerCombined, FaSwimmingPool, FaCar } from 'react-icons/fa';
// import { motion, AnimatePresence } from 'framer-motion';
// import ReactPlayer from 'react-player';

// // Import images (replace with your actual image paths)
// // import first from './../assert/Images/first.jpg';
// // import second from './../assert/Images/second.jpg';
// // import third from './../assert/Images/third.jpg';
// // import home2 from './../assert/Images/home2.jpg';
// // import property1 from './../assert/Images/property1.jpg';
// // import property2 from './../assert/Images/property2.jpg';
// // import property3 from './../assert/Images/property3.jpg';
// // import property4 from './../assert/Images/property4.jpg';
// // import agent1 from './../assert/Images/agent1.jpg';
// // import agent2 from './../assert/Images/agent2.jpg';
// // import agent3 from './../assert/Images/agent3.jpg';
// // import neighborhood from './../assert/Images/neighborhood.jpg';
// // import videoBg from './../assert/Images/video-bg.jpg';
// // import testimonial1 from './../assert/Images/testimonial1.jpg';
// // import testimonial2 from './../assert/Images/testimonial2.jpg';
// // import testimonial3 from './../assert/Images/testimonial3.jpg';




// import first from './../assert/Images/first.jpg';
// import second from './../assert/Images/second.jpg';
// import third from './../assert/Images/third.jpg';
// import home2 from './../assert/Images/home2.jpg';
// import property1 from './../assert/Images/first.jpg';
// import property2 from './../assert/Images/first.jpg';
// import property3 from './../assert/Images/first.jpg';
// import property4 from './../assert/Images/first.jpg';
// import agent1 from './../assert/Images/first.jpg';
// import agent2 from './../assert/Images/first.jpg'; 
// import agent3 from './../assert/Images/second.jpg';
// import neighborhood from './../assert/Images/second.jpg';
// import videoBg from './../assert/Images/first.jpg';
// import testimonial1 from './../assert/Images/first.jpg';
// import testimonial2 from './../assert/Images/first.jpg';
// import testimonial3 from './../assert/Images/first.jpg';




// const Home = () => {
//   // Hero slider settings
//   const heroSettings = {
//     dots: true,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     fade: true,
//     cssEase: 'linear',
//     pauseOnHover: false
//   };

//   // Property slider settings
//   const propertySettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         }
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   };

//   // State variables
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [activeTab, setActiveTab] = useState('buy');
//   const [priceRange, setPriceRange] = useState([0, 1000000]);
//   const [isVideoPlaying, setIsVideoPlaying] = useState(false);
//   const [currentTestimonial, setCurrentTestimonial] = useState(0);

//   // Sample property data
//   const properties = [
//     {
//       id: 1,
//       title: "Luxury Villa with Ocean View",
//       price: 850000,
//       beds: 4,
//       baths: 3,
//       sqft: 3200,
//       location: "Malibu, CA",
//       image: property1,
//       featured: true,
//       amenities: ['pool', 'garage']
//     },
//     {
//       id: 2,
//       title: "Modern Downtown Apartment",
//       price: 450000,
//       beds: 2,
//       baths: 2,
//       sqft: 1200,
//       location: "New York, NY",
//       image: property2,
//       featured: false,
//       amenities: ['gym']
//     },
//     {
//       id: 3,
//       title: "Cozy Suburban Family Home",
//       price: 325000,
//       beds: 3,
//       baths: 2,
//       sqft: 1800,
//       location: "Austin, TX",
//       image: property3,
//       featured: true,
//       amenities: ['garage']
//     },
//     {
//       id: 4,
//       title: "Historic Townhouse",
//       price: 675000,
//       beds: 3,
//       baths: 2.5,
//       sqft: 2200,
//       location: "Boston, MA",
//       image: property4,
//       featured: false,
//       amenities: []
//     }
//   ];

//   // Sample agent data
//   const agents = [
//     {
//       id: 1,
//       name: "Sarah Johnson",
//       title: "Senior Realtor",
//       experience: "12 years",
//       properties: 245,
//       image: agent1
//     },
//     {
//       id: 2,
//       name: "Michael Chen",
//       title: "Luxury Specialist",
//       experience: "8 years",
//       properties: 178,
//       image: agent2
//     },
//     {
//       id: 3,
//       name: "David Wilson",
//       title: "Commercial Expert",
//       experience: "15 years",
//       properties: 320,
//       image: agent3
//     }
//   ];

//   // Sample testimonials
//   const testimonials = [
//     {
//       id: 1,
//       name: "Emily & James Peterson",
//       role: "Home Buyers",
//       quote: "Dr Realtor made our dream home a reality. Their team was professional, knowledgeable, and truly cared about finding us the perfect property.",
//       image: testimonial1
//     },
//     {
//       id: 2,
//       name: "Robert Kim",
//       role: "Investor",
//       quote: "As an out-of-state investor, I needed a realtor I could trust. Dr Realtor exceeded all expectations with their market expertise and attention to detail.",
//       image: testimonial2
//     },
//     {
//       id: 3,
//       name: "Lisa Rodriguez",
//       role: "Seller",
//       quote: "Our home sold for 15% above asking price in just 9 days. The marketing strategy and negotiation skills of Dr Realtor are unmatched.",
//       image: testimonial3
//     }
//   ];

//   // Toggle read more
//   const toggleReadMore = () => {
//     setIsExpanded(!isExpanded);
//   };

//   // Handle price range change
//   const handlePriceChange = (e, index) => {
//     const newValue = parseInt(e.target.value);
//     const newRange = [...priceRange];
//     newRange[index] = newValue;
//     setPriceRange(newRange);
//   };

//   // Toggle video play state
//   const toggleVideo = () => {
//     setIsVideoPlaying(!isVideoPlaying);
//   };

//   // Auto-rotate testimonials
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [testimonials.length]);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Navigation */}
//       <nav className="fixed w-full bg-white shadow-md z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16 items-center">
//             <div className="flex items-center">
//               <span className="text-2xl font-bold text-blue-600">Dr Realtor</span>
//             </div>
//             <div className="hidden md:flex space-x-8">
//               <a href="#home" className="text-gray-800 hover:text-blue-600 transition">Home</a>
//               <a href="#properties" className="text-gray-800 hover:text-blue-600 transition">Properties</a>
//               <a href="#agents" className="text-gray-800 hover:text-blue-600 transition">Agents</a>
//               <a href="#neighborhoods" className="text-gray-800 hover:text-blue-600 transition">Neighborhoods</a>
//               <a href="#about" className="text-gray-800 hover:text-blue-600 transition">About</a>
//               <a href="#contact" className="text-gray-800 hover:text-blue-600 transition">Contact</a>
//             </div>
//             <button className="md:hidden text-gray-800">
//               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Slider Section */}
//       <section id="home" className="pt-16">
//         <Slider {...heroSettings} className="relative">
//           {/* Slide 1 */}
//           <div className="relative">
//             <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
//             <img 
//               src={first} 
//               alt="Luxury Home" 
//               className="w-full h-[70vh] object-cover"
//             />
//             <div className="absolute inset-0 flex items-center justify-center z-20 px-4">
//               <motion.div 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className="text-center max-w-4xl"
//               >
//                 <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Find Your Dream Home</h1>
//                 <p className="text-xl md:text-2xl text-white mb-8">Premium properties in the most desirable locations</p>
//                 <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
//                   Explore Properties
//                 </button>
//               </motion.div>
//             </div>
//           </div>
          
//           {/* Slide 2 */}
//           <div className="relative">
//             <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
//             <img 
//               src={second} 
//               alt="Modern Apartment" 
//               className="w-full h-[70vh] object-cover"
//             />
//             <div className="absolute inset-0 flex items-center justify-center z-20 px-4">
//               <motion.div 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className="text-center max-w-4xl"
//               >
//                 <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Premium Properties</h1>
//                 <p className="text-xl md:text-2xl text-white mb-8">Find your perfect home in our curated collection</p>
//                 <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
//                   View Listings
//                 </button>
//               </motion.div>
//             </div>
//           </div>
          
//           {/* Slide 3 */}
//           <div className="relative">
//             <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
//             <img 
//               src={third} 
//               alt="Trusted Realtor" 
//               className="w-full h-[70vh] object-cover"
//             />
//             <div className="absolute inset-0 flex items-center justify-center z-20 px-4">
//               <motion.div 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className="text-center max-w-4xl"
//               >
//                 <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Trusted Realtor</h1>
//                 <p className="text-xl md:text-2xl text-white mb-8">Serving clients with integrity since 2005</p>
//                 <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
//                   Meet Our Team
//                 </button>
//               </motion.div>
//             </div>
//           </div>
//         </Slider>
//       </section>

//       {/* Property Search Section */}
//       <section className="bg-white py-12 px-4 shadow-lg relative z-20 -mt-12 mx-4 rounded-lg">
//         <div className="max-w-6xl mx-auto">
//           <div className="flex flex-col md:flex-row justify-between items-center mb-8">
//             <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-0">Find Your Perfect Property</h2>
//             <div className="flex space-x-2">
//               <button 
//                 onClick={() => setActiveTab('buy')}
//                 className={`px-6 py-2 rounded-lg ₹{activeTab === 'buy' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
//               >
//                 Buy
//               </button>
//               <button 
//                 onClick={() => setActiveTab('rent')}
//                 className={`px-6 py-2 rounded-lg ₹{activeTab === 'rent' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
//               >
//                 Rent
//               </button>
//               <button 
//                 onClick={() => setActiveTab('sell')}
//                 className={`px-6 py-2 rounded-lg ₹{activeTab === 'sell' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
//               >
//                 Sell
//               </button>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//             <div className="relative">
//               <input 
//                 type="text" 
//                 placeholder="Location" 
//                 className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <FiMapPin className="absolute left-3 top-4 text-gray-400" />
//             </div>
            
//             <div className="relative">
//               <select className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
//                 <option value="">Property Type</option>
//                 <option value="house">House</option>
//                 <option value="apartment">Apartment</option>
//                 <option value="condo">Condo</option>
//                 <option value="land">Land</option>
//               </select>
//               <FiHome className="absolute left-3 top-4 text-gray-400" />
//             </div>
            
//             <div className="relative">
//               <select className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
//                 <option value="">Bedrooms</option>
//                 <option value="1">1+</option>
//                 <option value="2">2+</option>
//                 <option value="3">3+</option>
//                 <option value="4">4+</option>
//               </select>
//               <FaBed className="absolute left-3 top-4 text-gray-400" />
//             </div>
            
//             <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-105">
//               <FiSearch className="mr-2" />
//               Search
//             </button>
//           </div>

//           {/* Advanced Filters (collapsible) */}
//           <div className="mt-6">
//             <button className="text-blue-600 flex items-center" onClick={() => setIsExpanded(!isExpanded)}>
//               {isExpanded ? 'Hide Advanced Filters' : 'Show Advanced Filters'}
//               <FiChevronRight className={`ml-1 transition-transform duration-300 ₹{isExpanded ? 'rotate-90' : ''}`} />
//             </button>

//             <AnimatePresence>
//               {isExpanded && (
//                 <motion.div 
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: 'auto' }}
//                   exit={{ opacity: 0, height: 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="overflow-hidden"
//                 >
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 p-4 bg-gray-50 rounded-lg">
//                     <div>
//                       <h3 className="font-semibold mb-2">Price Range</h3>
//                       <div className="space-y-2">
//                         <div className="flex justify-between">
//                           <span>₹{priceRange[0].toLocaleString()}</span>
//                           <span>₹{priceRange[1].toLocaleString()}</span>
//                         </div>
//                         <div className="flex space-x-4">
//                           <input 
//                             type="range" 
//                             min="0" 
//                             max="1000000" 
//                             step="50000"
//                             value={priceRange[0]}
//                             onChange={(e) => handlePriceChange(e, 0)}
//                             className="w-full"
//                           />
//                           <input 
//                             type="range" 
//                             min="0" 
//                             max="1000000" 
//                             step="50000"
//                             value={priceRange[1]}
//                             onChange={(e) => handlePriceChange(e, 1)}
//                             className="w-full"
//                           />
//                         </div>
//                       </div>
//                     </div>
                    
//                     <div>
//                       <h3 className="font-semibold mb-2">Amenities</h3>
//                       <div className="grid grid-cols-2 gap-2">
//                         <label className="flex items-center">
//                           <input type="checkbox" className="mr-2" />
//                           <span>Pool</span>
//                         </label>
//                         <label className="flex items-center">
//                           <input type="checkbox" className="mr-2" />
//                           <span>Garage</span>
//                         </label>
//                         <label className="flex items-center">
//                           <input type="checkbox" className="mr-2" />
//                           <span>Garden</span>
//                         </label>
//                         <label className="flex items-center">
//                           <input type="checkbox" className="mr-2" />
//                           <span>Fireplace</span>
//                         </label>
//                       </div>
//                     </div>
                    
//                     <div>
//                       <h3 className="font-semibold mb-2">Square Footage</h3>
//                       <div className="space-y-2">
//                         <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
//                           <option value="">Any</option>
//                           <option value="1000">1000+ sqft</option>
//                           <option value="1500">1500+ sqft</option>
//                           <option value="2000">2000+ sqft</option>
//                           <option value="2500">2500+ sqft</option>
//                         </select>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         </div>
//       </section>

//       {/* Featured Properties Section */}




//       <section id="properties" className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Properties</h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover our handpicked selection of premium properties</p>
//           </div>

//           <Slider {...propertySettings} className="pb-12">
//             {properties.map((property) => (
//               <div key={property.id} className="px-2">
//                 <motion.div 
//                   whileHover={{ y: -10 }}
//                   className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300"
//                 >
//                   <div className="relative">
//                     <img 
//                       src={property.image} 
//                       alt={property.title} 
//                       className="w-full h-48 md:h-56 object-cover"
//                     />
//                     {property.featured && (
//                       <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
//                         Featured
//                       </div>
//                     )}
//                     <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md text-gray-700 hover:text-red-500 transition">
//                       <FiHeart />
//                     </button>
//                   </div>
                  
//                   <div className="p-4">
//                     <div className="flex justify-between items-start mb-2">
//                       <h3 className="text-lg font-semibold text-gray-800">{property.title}</h3>
//                       <span className="text-blue-600 font-bold">₹{property.price.toLocaleString()}</span>
//                     </div>
                    
//                     <p className="text-gray-600 mb-4 flex items-center">
//                       <FiMapPin className="mr-1" size={14} />
//                       {property.location}
//                     </p>
                    
//                     <div className="flex justify-between border-t border-gray-100 pt-3">
//                       <div className="flex items-center text-gray-600">
//                         <FaBed className="mr-1" />
//                         <span>{property.beds} beds</span>
//                       </div>
//                       <div className="flex items-center text-gray-600">
//                         <FaBath className="mr-1" />
//                         <span>{property.baths} baths</span>
//                       </div>
//                       <div className="flex items-center text-gray-600">
//                         <FaRulerCombined className="mr-1" />
//                         <span>{property.sqft} sqft</span>
//                       </div>
//                     </div>
                    
//                     {property.amenities.length > 0 && (
//                       <div className="mt-3 flex space-x-2">
//                         {property.amenities.includes('pool') && (
//                           <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded flex items-center">
//                             <FaSwimmingPool className="mr-1" size={10} />
//                             Pool
//                           </span>
//                         )}
//                         {property.amenities.includes('garage') && (
//                           <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded flex items-center">
//                             <FaCar className="mr-1" size={10} />
//                             Garage
//                           </span>
//                         )}
//                       </div>
//                     )}
                    
//                     <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-all duration-300 transform hover:scale-105">
//                       View Details
//                     </button>
//                   </div>
//                 </motion.div>
//               </div>
//             ))}
//           </Slider>
          
//           <div className="text-center mt-8">
//             <button className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
//               View All Properties
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Welcome Section */}
//       <section id="about" className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col md:flex-row items-center">
//             <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
//               <motion.div 
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8 }}
//                 viewport={{ once: true }}
//               >
//                 <h2 className="text-3xl font-bold text-gray-800 mb-6">Welcome To Dr Realtor</h2>
//                 <p className="text-gray-600 mb-4">
//                   Welcome to Dr Realtor, your premier destination for all your real estate needs in Patna, Blhta, and the
//                   surrounding areas. Dr Realtor is dedicated to delivering exceptional service, professionalism,
//                   and integrity in every aspect of our operations.
//                 </p>
//                 <p className="text-gray-600 mb-6">
//                   We are committed to being your trusted partner in real estate, providing the knowledge, expertise, 
//                   and personalized attention you need to achieve your property goals.
//                 </p>
//                 <div className="flex space-x-4">
//                   <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105">
//                     Learn More
//                   </button>
//                   <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105">
//                     Contact Us
//                   </button>
//                 </div>
//               </motion.div>
//             </div>
            
//             <div className="md:w-1/2 relative">
//               <motion.div 
//                 initial={{ opacity: 0, x: 20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8 }}
//                 viewport={{ once: true }}
//                 className="relative"
//               >
//                 <img 
//                   src={home2} 
//                   alt="Dr Realtor Office" 
//                   className="w-full rounded-lg shadow-xl"
//                 />
//                 <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg w-2/3">
//                   <div className="flex items-center">
//                     <div className="bg-blue-100 p-3 rounded-full mr-4">
//                       <FiHome className="text-blue-600 text-xl" />
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-gray-800">10+ Years Experience</h4>
//                       <p className="text-gray-600 text-sm">Serving our community</p>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Video Tour Section */}
//       <section className="py-16 bg-gray-900 text-white relative">
//         <div className="absolute inset-0 overflow-hidden">
//           <img 
//             src={videoBg} 
//             alt="Video background" 
//             className="w-full h-full object-cover opacity-30"
//           />
//         </div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold mb-4">Virtual Property Tours</h2>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//               Experience our properties from the comfort of your home with our immersive virtual tours
//             </p>
//           </div>
          
//           <div className="flex justify-center">
//             <div className="w-full max-w-4xl relative rounded-xl overflow-hidden shadow-2xl">
//               {!isVideoPlaying && (
//                 <div className="relative">
//                   <img 
//                     src={videoBg} 
//                     alt="Video placeholder" 
//                     className="w-full h-auto"
//                   />
//                   <button 
//                     onClick={toggleVideo}
//                     className="absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-30 hover:bg-opacity-40 transition"
//                   >
//                     <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition">
//                       <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
//                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
//                       </svg>
//                     </div>
//                   </button>
//                 </div>
//               )}
              
//               {isVideoPlaying && (
//                 <div className="aspect-w-16 aspect-h-9">
//                   <ReactPlayer 
//                     url="https://www.youtube.com/watch?v=LXb3EKWsInQ" 
//                     width="100%"
//                     height="100%"
//                     controls={true}
//                     playing={isVideoPlaying}
//                     onEnded={toggleVideo}
//                   />
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>

     

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white pt-16 pb-8">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
//             <div>
//               <h3 className="text-xl font-bold mb-4">Dr Realtor</h3>
//               <p className="text-gray-400 mb-4">
//                 Your trusted partner in real estate since 2005. We're committed to helping you find your perfect property.
//               </p>
//               <div className="flex space-x-4">
//                 <a href="#" className="text-gray-400 hover:text-white transition">
//                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
//                   </svg>
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-white transition">
//                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//                   </svg>
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-white transition">
//                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
//                   </svg>
//                 </a>
//               </div>
//             </div>
            
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//               <ul className="space-y-2">
//                 <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white transition">Properties</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white transition">Agents</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white transition">Neighborhoods</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
//               </ul>
//             </div>
            
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Services</h3>
//               <ul className="space-y-2">
//                 <li><a href="#" className="text-gray-400 hover:text-white transition">Buying</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white transition">Selling</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white transition">Renting</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white transition">Property Valuation</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white transition">Investment Advice</a></li>
//               </ul>
//             </div>
            
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
//               <ul className="space-y-2 text-gray-400">
//                 <li className="flex items-start">
//                   <svg className="w-5 h-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                   </svg>
//                   <span>123 Real Estate Ave, Patna, Bihar 800001</span>
//                 </li>
//                 <li className="flex items-center">
//                   <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                   </svg>
//                   <span>+91 123 456 7890</span>
//                 </li>
//                 <li className="flex items-center">
//                   <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                   </svg>
//                   <span>info@drrealtor.com</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
          
//           <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
//             <p>© {new Date().getFullYear()} Dr Realtor. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Home;
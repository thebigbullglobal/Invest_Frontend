// import { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import Logo from './../assert/Images/Logo.png'
// import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

// import Home from './Home'
// import Aboutus from './Pages/Aboutus';
// import Login from './Login';
// import Signup from './Signup';
// import Projects from './../components/Pages/Projects'
// import Career from './../components/Pages/Career'
// import Gallery from './../components/Pages/Gallery'
// import Contactus from './../components/Pages/Contactus'
// import Features from './../components/Pages/Features'
// import CreateParent from './Pages/CreateParent';

// function Header({ setIsAuthenticated }) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activestate, setactiveState] = useState('home');

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   useEffect(() => {
//     console.log("Current active state is ", activestate);
//   })

//   return (
//     <div className='relative'>
//       {/* Social Media Bar */}
//       <div className='fixed top-0 z-40 w-full'>
//         <div className='h-8 md:h-10 bg-green-800 flex justify-end items-center text-black'>
//           <ul className="flex space-x-3 md:space-x-4 pr-4 md:pr-14 text-blue-500">
//             <li>
//               <Link to='/' target="_blank" rel="noopener noreferrer">
//               <FaFacebook className="text-sm md:text-base"  />
//               </Link>
//             </li>
//             <li>
//               <Link to='/' target="_blank" rel="noopener noreferrer">
//                 <FaInstagram className="text-sm md:text-base" />
//               </Link>
//             </li>
           
//           </ul>
//         </div>

//         {/* Navbar */}
//         <nav className="bg-white  md:p-4 shadow-lg">
//           <div className="container mx-auto flex justify-between items-center py-2 px-2">
//             {/* Logo */}
           
//             <div className="bg-white rounded-full  flex items-center justify-center w-[48px] h-[48px] ">
//   <img src={Logo} className="w-[48px] h-[48px] md:w-[100px] md:h-[60px]" alt="Logo" />
// </div>  


//             {/* Toggle Button for Mobile */}
//             <button
//               className="text-white lg:hidden focus:outline-none"
//               onClick={toggleMenu}
//               aria-label="Toggle menu"
//             >
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
//                 ></path>
//               </svg>
//             </button>

//             {/* Nav Items */}
//             <div
//               className={`₹{isMenuOpen ? 'block' : 'hidden'} lg:flex lg:items-center w-full lg:w-auto absolute lg:static top-full left-0 bg-blue-600 lg:bg-transparent z-50`}
//             >
//               <ul className="flex flex-col lg:flex-row lg:space-x-6 space-y-2 lg:space-y-0 p-4 lg:p-0">
//                 <li>
//                   <button onClick={() => { setactiveState('home'); setIsMenuOpen(false); }} 
//                     className={`text-black transition duration-300 ease-in-out transform hover:text-green-400 hover:scale-105 ₹{activestate === 'home' ? 'text-green-400' : ''}`}>
//                     Home
//                   </button>
//                 </li>
//                 <li>
//                   <button onClick={() => { setactiveState("about-us"); setIsMenuOpen(false); }} 
//                     className={`text-black transition duration-300 ease-in-out transform hover:text-green-400 hover:scale-105 ₹{activestate === 'about-us' ? 'text-green-400' : ''}`}>
//                     About Us
//                   </button>
//                 </li>
//                 <li>
//                   <button onClick={() => { setactiveState('projects'); setIsMenuOpen(false); }} 
//                     className={`text-black transition duration-300 ease-in-out transform hover:text-green-400 hover:scale-105 ₹{activestate === 'projects' ? 'text-green-400' : ''}`}>
//                     Projects
//                   </button>
//                 </li>
//                 <li>
//                   <button onClick={() => { setactiveState('features'); setIsMenuOpen(false); }} 
//                     className={`text-black transition duration-300 ease-in-out transform hover:text-green-400 hover:scale-105 ₹{activestate === 'features' ? 'text-green-400' : ''}`}>
//                     Features
//                   </button>
//                 </li>
//                 <li>
//                   <button onClick={() => { setactiveState('gallery'); setIsMenuOpen(false); }} 
//                     className={`text-black transition duration-300 ease-in-out transform hover:text-green-400 hover:scale-105 ₹{activestate === 'gallery' ? 'text-green-400' : ''}`}>
//                     Gallery
//                   </button>
//                 </li>
//                 <li>
//                   <button onClick={() => { setactiveState('career'); setIsMenuOpen(false); }} 
//                     className={`text-black transition duration-300 ease-in-out transform hover:text-green-400 hover:scale-105 ₹{activestate === 'career' ? 'text-green-400' : ''}`}>
//                     Career
//                   </button>
//                 </li>
//                 <li>
//                   <button onClick={() => { setactiveState('contact'); setIsMenuOpen(false); }} 
//                     className={`text-black transition duration-300 ease-in-out transform hover:text-green-400 hover:scale-105 ₹{activestate === 'contact' ? 'text-green-400' : ''}`}>
//                     Contact Us
//                   </button>
//                 </li>
//                 <li>
//                   <Link to='/' className="text-white transition duration-300 ease-in-out transform hover:text-green-400 hover:scale-105">
//                     Site Visit
//                   </Link>
//                 </li>
//                 <li className="pt-2 lg:pt-0">
//                   <button onClick={() => { setactiveState('register'); setIsMenuOpen(false); }} 
//                     className='py-1 bg-green-700 text-white px-2 rounded-md hover:bg-red-500 transition-all duration-150 ease-in-out hover:scale-105 w-full lg:w-auto'>
//                     Register
//                   </button>
//                 </li>
//                 <li className="pt-2 lg:pt-0">
//                   <button onClick={() => { setactiveState('login'); setIsMenuOpen(false); }} 
//                     className='py-1 bg-green-700 text-white px-2 rounded-md transition-all duration-150 ease-in-out hover:scale-105 hover:bg-red-500 w-full lg:w-auto'>
//                     Login
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </div>

//       {/* Content Area */}
//       <div className='mt-32 md:mt-36 px-2 md:px-0 z-50'>
//         {activestate === 'home' && <Home />}


//         {activestate === 'about-us' && <Aboutus setactiveState={setactiveState} />}
//         {activestate === 'login' && <Login setIsAuthenticated={setIsAuthenticated} setactiveState={setactiveState} />}
//         {activestate === 'register' && <Signup setactiveState={setactiveState} />}
//         {activestate === 'projects' && <Projects setactiveState={setactiveState} />}
//         {activestate === 'gallery' && <Gallery setactiveState={setactiveState} />}
//         {activestate === 'contact' && <Contactus setactiveState={setactiveState} />}
//         {activestate === 'career' && <Career setactiveState={setactiveState} />}
//         {activestate === 'features' && <Features setactiveState={setactiveState} />}
//       </div>
//     </div>
//   )
// }

// export default Header




import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from './../assert/Images/Logo.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

import Home from './Home'
import Aboutus from './Pages/Aboutus';
import Login from './Login';
import Signup from './Signup';
import Projects from './../components/Pages/Projects'
import Career from './../components/Pages/Career'
import Gallery from './../components/Pages/Gallery'
import Contactus from './../components/Pages/Contactus'
import Features from './../components/Pages/Features'
import CreateParent from './Pages/CreateParent';

function Header({ setIsAuthenticated }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activestate, setactiveState] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    console.log("Current active state is ", activestate);
  })

  return (
    <div className='relative'>
      {/* Social Media Bar */}
      <div className='fixed top-0 z-40 w-full'>
        <div className='h-8 md:h-10 bg-green-800 flex justify-end items-center text-black'>
          <ul className="flex space-x-3 md:space-x-4 pr-4 md:pr-14 text-blue-500">
            <li>
              <Link to='/' target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-sm md:text-base" />
              </Link>
            </li>
            <li>
              <Link to='/' target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-sm md:text-base" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Navbar */}
        <nav className="bg-white md:p-4 shadow-lg">
          <div className="container mx-auto flex justify-between items-center py-2 px-4">
            {/* Logo */}
            <div className="bg-white rounded-full flex items-center justify-center w-12 h-12 md:w-[60px] md:h-[60px]">
              <img src={Logo} className="w-full h-full" alt="Logo" />
            </div>

            {/* Toggle Button for Mobile - Changed color to black */}
            <button
              className="text-black lg:hidden focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                ></path>
              </svg>
            </button>

            {/* Nav Items */}
            <div
              className={`${isMenuOpen ? 'block' : 'hidden'} lg:flex lg:items-center w-full lg:w-auto absolute lg:static top-full left-0 bg-white lg:bg-transparent z-50 shadow-lg lg:shadow-none`}
            >
              <ul className="flex flex-col lg:flex-row lg:space-x-6 space-y-2 lg:space-y-0 p-4 lg:p-0 w-full">
                <li>
                  <button 
                    onClick={() => { setactiveState('home'); setIsMenuOpen(false);  window.scrollTo({ top: 0, behavior: 'auto' }) }} 
                    className={`text-black transition duration-300 ease-in-out transform hover:text-green-400 hover:scale-105 ${activestate === 'home' ? 'text-green-400' : ''}`}
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => { setactiveState("about-us"); setIsMenuOpen(false);  window.scrollTo({ top: 0, behavior: 'auto' }); }} 
                    className={`text-black transition duration-300 ease-in-out transform hover:text-green-400 hover:scale-105 ${activestate === 'about-us' ? 'text-green-400' : ''}`}
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => { setactiveState('projects'); setIsMenuOpen(false);  window.scrollTo({ top: 0, behavior: 'auto' }); }} 
                    className={`text-black transition duration-300 ease-in-out transform hover:text-green-400 hover:scale-105 ${activestate === 'projects' ? 'text-green-400' : ''}`}
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => { setactiveState('features'); setIsMenuOpen(false);  window.scrollTo({ top: 0, behavior: 'auto' }); }} 
                    className={`text-black transition duration-300 ease-in-out transform hover:text-green-400 hover:scale-105 ${activestate === 'features' ? 'text-green-400' : ''}`}
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => { setactiveState('gallery'); setIsMenuOpen(false);  window.scrollTo({ top: 0, behavior: 'auto' });}} 
                    className={`text-black transition duration-300 ease-in-out transform hover:text-green-400 hover:scale-105 ${activestate === 'gallery' ? 'text-green-400' : ''}`}
                  >
                    Gallery
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => { setactiveState('career'); setIsMenuOpen(false);  window.scrollTo({ top: 0, behavior: 'auto' }); }} 
                    className={`text-black transition duration-300 ease-in-out transform hover:text-green-400 hover:scale-105 ${activestate === 'career' ? 'text-green-400' : ''}`}
                  >
                    Career
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => { setactiveState('contact'); setIsMenuOpen(false);  window.scrollTo({ top: 0, behavior: 'auto' }); }} 
                    className={`text-black transition duration-300 ease-in-out transform hover:text-green-400 hover:scale-105 ${activestate === 'contact' ? 'text-green-400' : ''}`}
                  >
                    Contact Us
                  </button>
                </li>
                <li>
                  <Link 
                    to='/' 
                    className="text-black transition duration-300 ease-in-out transform hover:text-green-400 hover:scale-105"
                  >
                    Site Visit
                  </Link>
                </li>
                <li className="pt-2 lg:pt-0">
                  <button 
                    onClick={() => { setactiveState('register'); setIsMenuOpen(false);  window.scrollTo({ top: 0, behavior: 'auto' }); }} 
                    className='py-1 bg-green-700 text-white px-4 rounded-md hover:bg-red-500 transition-all duration-150 ease-in-out hover:scale-105 w-full lg:w-auto'
                  >
                    Register
                  </button>
                </li>
                <li className="pt-2 lg:pt-0">
                  <button 
                    onClick={() => { setactiveState('login'); setIsMenuOpen(false);  window.scrollTo({ top: 0, behavior: 'auto' }); }} 
                    className='py-1 bg-green-700 text-white px-4 rounded-md transition-all duration-150 ease-in-out hover:scale-105 hover:bg-red-500 w-full lg:w-auto'
                  >
                    Login
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* Content Area */}
      <div className='mt-16 md:mt-32 px-4 md:px-0 z-50'>
        {activestate === 'home' && <Home />}
        {activestate === 'about-us' && <Aboutus setactiveState={setactiveState} />}
        {activestate === 'login' && <Login setIsAuthenticated={setIsAuthenticated} setactiveState={setactiveState} />}
        {activestate === 'register' && <Signup setactiveState={setactiveState} />}
        {activestate === 'projects' && <Projects setactiveState={setactiveState} />}
        {activestate === 'gallery' && <Gallery setactiveState={setactiveState} />}
        {activestate === 'contact' && <Contactus setactiveState={setactiveState} />}
        {activestate === 'career' && <Career setactiveState={setactiveState} />}
        {activestate === 'features' && <Features setactiveState={setactiveState} />}
      </div>
    </div>
  )
}

export default Header
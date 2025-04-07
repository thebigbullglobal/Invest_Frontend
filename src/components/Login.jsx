
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';
// import homeImage from './../assert/Images/home.jpg';

// const Login = ({ setIsAuthenticated }) => {
//   const navigate = useNavigate();
//   const [password, setPassword] = useState('');
//   const [username, setUserName] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!username || !password) {
//       toast.error('Please fill in all fields', {
//         position: "top-center",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//       });
//       return;
//     }

//     setIsLoading(true);

//     try {
//       const response = await axios.post(
//         'http://localhost:8000/users/login/user',
//         { username, password },
//         {
//           headers: {
//             'Content-Type': 'application/json'
//           }
//         }
//       );

//       localStorage.setItem('token', response.data.token);
//       setIsAuthenticated(true);
      
//       toast.success('Login successful! Redirecting...', {
//         position: "top-center",
//         autoClose: 2000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         onClose: () => navigate('/dashboard')
//       });

//     } catch (error) {
//       console.error("Login error:", error);
//       let errorMessage = 'Login failed. Please try again.';
      
//       if (error.response) {
//         if (error.response.status === 401) {
//           errorMessage = 'Invalid username or password';
//         } else if (error.response.status === 500) {
//           errorMessage = 'Server error. Please try again later.';
//         }
//       }

//       toast.error(errorMessage, {
//         position: "top-center",
//         autoClose: 4000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col lg:flex-row bg-gradient-to-br from-gray-600 to-gray-800 fixed w-full z-40">
//       <ToastContainer />
      
//       {/* Left Side - Image */}
//       <div className="hidden lg:block lg:w-1/2 relative">
//         <div 
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: `url(${homeImage})` }}
//         >
//           <div className="h-full flex flex-col items-center justify-center bg-black bg-opacity-50 p-8">
//             <h1 className="text-white text-4xl font-bold mb-4">Welcome Back!</h1>
//             <p className="text-gray-300 text-xl text-center max-w-md">
//               Sign in to access your dashboard and manage your properties.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Right Side - Login Form */}
//       <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-8 z-10">
//         <div className="bg-white p-6 sm:p-8 rounded-xl shadow-2xl w-full max-w-md transform transition-all duration-300 hover:shadow-xl">
//           <div className="text-center mb-8">
//             <h2 className="text-3xl font-bold text-gray-800">Admin Login</h2>
//             <p className="text-gray-600 mt-2">Please enter your credentials</p>
//           </div>
          
//           <form onSubmit={handleSubmit}>
//             <div className="mb-6">
//               <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="username">
//                 Username
//               </label>
//               <input
//                 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                 onChange={(e) => setUserName(e.target.value)}
//                 type="text"
//                 placeholder="Enter your username"
//                 value={username}
//               />
//             </div>
            
//             <div className="mb-6">
//               <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="password">
//                 Password
//               </label>
//               <input
//                 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                 onChange={(e) => setPassword(e.target.value)}
//                 type="password"
//                 placeholder="Enter your password"
//                 value={password}
//               />
//             </div>
            
//             <div className="mb-6 flex items-center justify-between">
//               <div className="flex items-center">
//                 <input
//                   id="remember-me"
//                   name="remember-me"
//                   type="checkbox"
//                   className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                 />
//                 <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
//                   Remember me
//                 </label>
//               </div>
              
//               <Link
//                 to="/forgot-password"
//                 className="text-sm text-blue-600 hover:text-blue-800"
//               >
//                 Forgot password?
//               </Link>
//             </div>
            
//             <button
//               type="submit"
//               disabled={isLoading}
//               className={`w-full py-3 px-4 rounded-lg text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all ${
//                 isLoading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
//               }`}
//             >
//               {isLoading ? (
//                 <span className="flex items-center justify-center">
//                   <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                   </svg>
//                   Signing in...
//                 </span>
//               ) : 'Sign In'}
//             </button>
            
//             <div className="mt-6 text-center">
//               <p className="text-gray-600 text-sm">
//                 Don't have an account?{' '}
//                 <Link
//                   to='/new_account'
//                   className="text-blue-600 hover:text-blue-800 font-medium"
//                 >
//                   Sign Up
//                 </Link>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

























import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import homeImage from './../assert/Images/home.jpg';

const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [username, setUserName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!username || !password) {
      toast.error('Please fill in all fields', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(
        'http://localhost:8000/users/login/user',
        { username, password },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      localStorage.setItem('token', response.data.token);
      setIsAuthenticated(true);
      
      toast.success('Login successful! Redirecting...', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        onClose: () => navigate('/dashboard')
      });

    } catch (error) {
      console.error("Login error:", error);
      let errorMessage = 'Login failed. Please try again.';
      
      if (error.response) {
        if (error.response.status === 401) {
          errorMessage = 'Invalid username or password';
        } else if (error.response.status === 500) {
          errorMessage = 'Server error. Please try again later.';
        }
      }

      toast.error(errorMessage, {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gradient-to-br from-gray-600 to-gray-800 w-full">
      <ToastContainer />
      
      {/* Left Side - Image (Visible on all screens but differently styled) */}
      <div className="lg:w-1/2 relative h-48 lg:h-auto">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${homeImage})` }}
        >
          <div className="h-full flex flex-col items-center justify-center bg-black bg-opacity-50 p-4 sm:p-8">
            <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">Welcome Back!</h1>
            <p className="text-gray-300 text-sm sm:text-base lg:text-xl text-center max-w-xs sm:max-w-md">
              Sign in to access your dashboard and manage your properties.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12">
        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl shadow-lg w-full max-w-md transform transition-all duration-300 hover:shadow-xl">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Admin Login</h2>
            <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">Please enter your credentials</p>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4 sm:mb-6">
              <label className="block text-gray-700 text-xs sm:text-sm font-medium mb-1 sm:mb-2" htmlFor="username">
                Username
              </label>
              <input
                className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                placeholder="Enter your username"
                value={username}
              />
            </div>
            
            <div className="mb-4 sm:mb-6">
              <label className="block text-gray-700 text-xs sm:text-sm font-medium mb-1 sm:mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter your password"
                value={password}
              />
            </div>
            
            <div className="mb-4 sm:mb-6 flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-xs sm:text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              
              <Link
                to="/forgot-password"
                className="text-xs sm:text-sm text-blue-600 hover:text-blue-800 whitespace-nowrap"
              >
                Forgot password?
              </Link>
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-2 sm:py-3 px-4 rounded-lg text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all text-sm sm:text-base ${
                isLoading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </span>
              ) : 'Sign In'}
            </button>
            
            <div className="mt-4 sm:mt-6 text-center">
              <p className="text-gray-600 text-xs sm:text-sm">
                Don't have an account?{' '}
                <Link
                  to='/new_account'
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
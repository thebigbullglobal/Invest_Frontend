// import React from 'react';
// import { Link } from 'react-router-dom';
// import home2url from './../assert/Images/home2.jpg'
// const Signup = () => {
//   return (
//     <div className="min-h-screen flex flex-col lg:flex-row bg-gradient-to-r  bg-gray-400 fixed w-full ">
//       {/* Image Section (Visible on lg and xl screens) */}
//       <div className="hidden lg:block lg:w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(₹{home2url})` }}>
//         <div className="h-full flex items-center justify-center bg-black bg-opacity-50">
//           <h1 className="text-white text-4xl font-bold">Join Us!</h1>
//         </div>
//       </div>

//       {/* Signup Form Section */}
//       <div className="w-full lg:w-1/2 flex items-center justify-center p-8 " >
//         <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full transform cursor-pointer transition-all duration-500 hover:scale-105">
//           <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Sign Up</h2>
//           <form>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//                 Full Name
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="name"
//                 type="text"
//                 placeholder="Full Name"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//                 Email
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="email"
//                 type="email"
//                 placeholder="Email"
//               />
//             </div>
//             <div className="mb-6">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//                 Password
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
//                 id="password"
//                 type="password"
//                 placeholder="******************"
//               />
//             </div>
//             <div className="flex items-center justify-between">
//               <button
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                 type="button"
//               >
//                 Sign Up
//               </button>
//               <Link
//                 to="/"
//                 className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
//               >
//                 Already have an account? Login
//               </Link>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;













import React, { useState } from "react";

const statesAndDistricts = {
  "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Tirupati", "Kurnool", "Rajahmundry", "Kadapa"],
  "Arunachal Pradesh": ["Itanagar", "Tawang", "Pasighat", "Ziro", "Roing"],
  "Assam": ["Guwahati", "Dibrugarh", "Jorhat", "Silchar", "Tezpur"],
  "Bihar": ["Patna", "Gaya", "Muzaffarpur", "Bhagalpur", "Darbhanga"],
  "Chhattisgarh": ["Raipur", "Bilaspur", "Durg", "Korba", "Rajnandgaon"],
  "Goa": ["North Goa", "South Goa"],
  "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Gandhinagar"],
  "Haryana": ["Gurgaon", "Faridabad", "Panipat", "Ambala", "Hisar"],
  "Himachal Pradesh": ["Shimla", "Kangra", "Mandi", "Solan", "Kullu"],
  "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Hazaribagh"],
  "Karnataka": ["Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum", "Davanagere"],
  "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kollam"],
  "Madhya Pradesh": ["Bhopal", "Indore", "Gwalior", "Jabalpur", "Ujjain"],
  "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad", "Solapur"],
  "Manipur": ["Imphal", "Churachandpur", "Thoubal", "Bishnupur", "Ukhrul"],
  "Meghalaya": ["Shillong", "Tura", "Jowai", "Baghmara"],
  "Mizoram": ["Aizawl", "Lunglei", "Serchhip", "Champhai"],
  "Nagaland": ["Kohima", "Dimapur", "Mokokchung", "Zunheboto"],
  "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela", "Berhampur", "Sambalpur"],
  "Punjab": ["Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda"],
  "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer", "Bikaner"],
  "Sikkim": ["Gangtok", "Namchi", "Gyalshing"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Vellore"],
  "Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam"],
  "Tripura": ["Agartala", "Udaipur", "Dharmanagar", "Kailashahar"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Agra", "Varanasi", "Meerut", "Prayagraj", "Gorakhpur"],
  "Uttarakhand": ["Dehradun", "Haridwar", "Nainital", "Almora"],
  "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri"]
};



const Signup = () => {
  const [formData, setFormData] = useState({
    sponsorId: "",
    sponsorName: "",
    position: "",
    fullName: "",
    pan: "",
    dateOfBirth: "",
    gender: "Male",
    maritalStatus: "Married",
    email: "",
    mobileNo: "",
    state: "",
    district: "",
  });

  const [districts, setDistricts] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "state") {
      setDistricts(statesAndDistricts[value] || []);
      setFormData((prev) => ({ ...prev, district: "" })); // Reset district when state changes
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 md:p-10 lg:p-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700 mb-6">
          Sponsor Form
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Sponsor ID */}
           <div className="grid  md:grid-cols-2 md:space-x-9">
           <div className="mb-6">
            <label className="block text-gray-700 text-sm sm:text-md font-medium mb-2">
              Sponsor ID *
            </label>
            <input
              type="text"
              name="sponsorId"
              value={formData.sponsorId}
              onChange={handleChange}
              placeholder="Sponsor ID"
              className="w-full px-4 py-3 sm:px-5 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
              required
            />

            
          </div>

          {/* Sponsor Name */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm sm:text-md font-medium mb-2">
              Sponsor Name
            </label>
            <input
              type="text"
              name="sponsorName"
              value={formData.sponsorName}
              onChange={handleChange}
              placeholder="Sponsor Name"
              className="w-full px-4 py-3 sm:px-5 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
            />
          </div>
          </div>

   
          <div className="grid md:grid-cols-2 md:space-x-9">
          <div className="mb-6">
            <label className="block text-gray-700 text-sm sm:text-md font-medium mb-2">
              Position *
            </label>
            <select
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="w-full px-4 py-3 sm:px-5 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
              required
            >
              <option value="">Select Position</option>
              <option value="Manager">Manager</option>
              <option value="Supervisor">Supervisor</option>
              <option value="Employee">Employee</option>
            </select>
          </div>

         
          <div className="mb-6">
            <label className="block text-gray-700 text-sm sm:text-md font-medium mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full px-4 py-3 sm:px-5 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
              required
            />
          </div>

          </div>
         
   
     
           <div className="grid md:grid-cols-2 md:space-x-9">
           <div className="mb-6">
            <label className="block text-gray-700 text-sm sm:text-md font-medium mb-2">
              PAN *
            </label>
            <input
              type="text"
              name="pan"
              value={formData.pan}
              onChange={handleChange}
              placeholder="PAN"
              className="w-full px-4 py-3 sm:px-5 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
              required
            />
          </div>

         
          <div className="mb-6">
            <label className="block text-gray-700 text-sm sm:text-md font-medium mb-2">
              Date of Birth *
            </label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="w-full px-4 py-3 sm:px-5 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
              required
            />
          </div>
                
           </div>
         
         
           <div className="grid md:grid-cols-2 md:space-x-9">
           <div className="mb-6">
            <label className="block text-gray-700 text-sm sm:text-md font-medium mb-2">
              Gender *
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-4 py-3 sm:px-5 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
              required
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          
          <div className="mb-6">
            <label className="block text-gray-700 text-sm sm:text-md font-medium mb-2">
              Marital Status *
            </label>
            <select
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleChange}
              className="w-full px-4 py-3 sm:px-5 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
              required
            >
              <option value="Married">Married</option>
              <option value="Unmarried">Unmarried</option>
            </select>
          </div>

           </div>
          

         
         <div className="grid md:grid-cols-2 md:space-x-9">
         <div className="mb-6">
            <label className="block text-gray-700 text-sm sm:text-md font-medium mb-2">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-3 sm:px-5 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
              required
            />
          </div>

         
          <div className="mb-6">
            <label className="block text-gray-700 text-sm sm:text-md font-medium mb-2">
              Mobile No. *
            </label>
            <input
              type="text"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleChange}
              placeholder="Mobile No."
              className="w-full px-4 py-3 sm:px-5 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
              required
            />
          </div>
         </div>
  
          <div className="grid md:grid-cols-2 md:space-x-9">
          <div className="mb-6">
            <label className="block text-gray-700 text-sm sm:text-md font-medium mb-2">
              State *
            </label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full px-4 py-3 sm:px-5 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
              required
            >
              <option value="">--Select State--</option>
              {Object.keys(statesAndDistricts).map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

         
          <div className="mb-6">
            <label className="block text-gray-700 text-sm sm:text-md font-medium mb-2">
              District *
            </label>
            <select
              name="district"
              value={formData.district}
              onChange={handleChange}
              className="w-full px-4 py-3 sm:px-5 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
              required
              disabled={!formData.state}
            >
              <option value="">--Select District--</option>
              {districts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </div>
            </div>
          
        

        
        

        
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
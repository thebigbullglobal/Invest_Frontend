import React ,{useState} from 'react'

import { IoMdHome } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import {Link} from 'react-router-dom'
function Career(){



  const [name,setName] = useState('');
  const [email , setEmail] = useState('');


  const [location,setLocation] = useState('');
  const [phone , setPhone] = useState('');
 



  const hanldeSubmit = ()=>{
           console.log("name is",name);
           console.log("email is",email);
           console.log("phone is",phone);
           console.log("location is",location);
           console.log("Image is ",image);
           setName('')
           setLocation('')
           setName('')
           setImage('')
  }



  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  




  return (
    <div className="bg-gray-400">
    {/* Header Section */}
    <div className="w-full bg-gradient-to-r from-gray-900 to-blue-700 h-20 text-white flex justify-start items-center">
      <div className="px-4 sm:px-8 md:px-16 lg:px-32">
        <h1 className="text-xl sm:text-2xl font-bold">Career</h1>
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
        <span className="cursor-pointer hover:underline text-sm sm:text-md">career</span>
      </div>
    </div>

    {/* Main Content Section */}
   

   
    <div className=' bg-gray-100 flex items-center justify-center p-4 sm:p-6 md:p-8"'>
      
    <div className="bg-white  px-4 space-y-3 py-2 rounded-lg shadow-lg w-full max-w-6xl transform transition-all duration-500 overflow-hidden">

          <h1 className=' text-sm   md:text-2xl'><span className='text-orange-400 font-bold'>Career</span></h1>
    
          <div className=' py-5 bg-gray-100 px-3 text-sm md:text-md rounded-md [word-spacing:5px]'>
                 <p>Dr Realtor is an exciting organization that attracts bright and dedicated talent, all focused on delivering to our members the best experience we can. We foster an environment of empowerment and seek people who want to make an impact, both individually and as part of our team.

We value hiring people with unique backgrounds to support our culture of innovation and ideas.</p>

        
<div className='text-black  sm:mt-0 md:mt-5 text-gray-700'>
            <h1>We value hiring people with unique backgrounds to support our culture of innovation and ideas.</h1>
           




            <div className='bg-gray-50 p-6 sm:p-8 md:p-10 lg:p-12 rounded-lg shadow-md'>
  <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-6'>
    <div>
      <label className='block text-gray-700 text-sm sm:text-md font-medium mb-2'>Name</label>
      <input
        type='text'
        placeholder='Name'
        onChange = {(e)=>setName(e.target.value)}
        className='w-full px-4 py-3 sm:px-5 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400'
      />
    </div>
    <div>
      <label className='block text-gray-700 text-sm sm:text-md font-medium mb-2'>Email</label>
      <input
        type='text'
        placeholder='Email'
        onChange = {(e)=>setEmail(e.target.value)}
        className='w-full px-4 py-3 sm:px-5 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400'
      />
    </div>
  </div>

  <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
    <div>
      <label className='block text-gray-700 text-sm sm:text-md font-medium mb-2'>Location</label>
      <input
        type='text'
        placeholder='Location'
        onChange ={(e)=>setLocation(e.target.value)}
        className='w-full px-4 py-3 sm:px-5 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400'
      />
    </div>
    <div>
      <label className='block text-gray-700 text-sm sm:text-md font-medium mb-2'>Phone Number</label>
      <input
        type='text'
        placeholder='Phone Number'
        onChange = {(e)=>setPhone(e.target.value)}
        className='w-full px-4 py-3 sm:px-5 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400'
      />
    </div>
  </div>

  {/* Image Upload Section */}
  <div className='mt-6'>
    <label className='block text-gray-700 text-sm sm:text-md font-medium mb-2'>Upload your ID</label>
    <p className='text-gray-600 text-sm sm:text-md mb-4'>
      To ensure the safety of agents, we need you to provide your identity before we can take you on a home tour.
    </p>
    <div className='flex items-center'>
      <label className='flex flex-col items-center px-4 py-3 sm:px-6 sm:py-4 bg-white text-blue-700 rounded-lg border border-gray-300 cursor-pointer hover:bg-gray-50'>
        <span className='text-sm sm:text-md font-medium'>Choose file</span>
        <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="border border-gray-300 p-2 rounded-md"
            />
      
      </label>
      <span className='ml-4 text-gray-500 text-sm sm:text-md'>No file chosen</span>
    </div>
  </div>
  <div>
  <button onClick = {hanldeSubmit} className='px-5 py-3 mt-5 hover:bg-yellow-400 transition-all duration-150 ease-in-out hover:scale-105 bg-green-400 rounded-lg text-center font-bold'>Submit</button>
  </div>
 
</div>
            



</div>


          </div>


          


    </div>


    </div>
  </div>
  )
}

export default Career;
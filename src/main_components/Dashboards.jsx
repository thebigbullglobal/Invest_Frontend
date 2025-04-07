




import React, { useState, useEffect } from 'react';
import { 
  ClickAwayListener, 
  IconButton,
} from '@mui/material';
import { 
  Dashboard as DashboardIcon,
  Person as PersonIcon,
  AccountTree as GenealogyIcon,
  AttachMoney as MoneyIcon,
  Email as EmailIcon,
  Help as HelpIcon,
  Logout as LogoutIcon,
  Menu,
  ChevronRight
} from '@mui/icons-material';

import Overview from './Overview';
import { useNavigate } from 'react-router-dom';
import ProfileView from './Profile/ProfileView';
import BankDetailsKyc from './Profile/BankDetailsKyc';
import GenealogyTree from './Profile/GenealogyTree';
import MatchingIncomeReport from './Income/MatchingIncomeReport';
import MyIncomeReport from './Income/MyIncomeReport';
import RewardReport from './Income/RewardReport'
import SendMessage from './Message/SendMessage';
import MessageInbox from './Message/MessageInbox';
import Dashboardheader from './Profile/Dashboardheader';

import axios from 'axios'
// Sidebar Component
const SidebarItem = ({ title, icon: Icon, onClick, children }) => {
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
 


  // Handle toggle for open/close
  const handleToggle = () => {
    setOpen((prev) => !prev);
    if (onClick) onClick(); // Call the onClick prop if passed
  };

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div className="mb-2 transition-all duration-300">
        <div
          onClick={handleToggle} // Correct usage here
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`cursor-pointer p-3 flex items-center justify-between
            bg-gradient-to-r from-green-600  text-white 
            font-semibold rounded-xl shadow-lg transition-all duration-300
            ${isHovered ? "scale-105 shadow-xl" : ""}
            ${open ? "rounded-b-none" : ""}`}
        >
          <div className="flex items-center">
            <Icon className="mr-2" />
            <span>{title}</span>
          </div>
          <ChevronRight
            className={`transition-transform duration-300 ${
              open ? "rotate-90" : ""
            }`}
          />
        </div>
        {open && (
          <div className="ml-6 mt-1 space-y-2 bg-green-400 bg-opacity-20 p-2 rounded-b-xl border-l-4 border-blue-500">
            {children}
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};

// Submenu Item Component
const SubItem = ({ children, onClick, icon: Icon }) => (
  <div 
    onClick={onClick} // Add onClick prop here
    className="p-2 bg-green-500 bg-opacity-70 hover:bg-opacity-100 rounded-lg 
               transition-all duration-300 hover:translate-x-1 cursor-pointer 
               flex items-center"
  >
    {Icon && <Icon className="mr-2" fontSize="small" />}
    <span>{children}</span>
  </div>
);

// Main Dashboard Component
export default function Dashboard() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [currentActive, setCurrentActive] = useState('Overview');
  const [username , setUserName] = useState('');
  const token = localStorage.getItem('token');

  // Handle Click Event
 const navigate = useNavigate();

  const handleClick = (currentactivestate) => {
    console.log("Current active state:", currentactivestate);
    setCurrentActive(currentactivestate);
  };

  // Sidebar Responsive Collapse
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileSidebarOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);





         
  const fetchUserData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/users/getUserData', {
        headers: {
          Authorization: `Bearer ${token}`  // ✅ Correct template literal
        }
      });
  
      console.log(response.data);
      setUserName(response.data.username); // ✅ Adjust if the actual field is different
    } catch (error) {
      console.error('Error fetching user data:', error);
      // Optional: set error state for UI feedback
    }
  };
  
  useEffect(() => {
    if (token) {
      fetchUserData();
    }
  }, [token]); // ✅ Added `token` as dependency in case it updates
  













  // Logout Function
  const handleLogout = () => {
    console.log("CAll to logout");
    localStorage.removeItem('token'); // Example: Remove token
    navigate('/')
    setCurrentActive('logout');
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">

      {/* Mobile sidebar toggle button */}
      <button 
        className="md:hidden fixed top-4 left-6 z-50 bg-green-600 text-white p-2 rounded-lg shadow-lg"
        onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
      >
         <Menu className=''/> 
      </button>

      

      {/* Sidebar */}
      <div className={`
        fixed md:relative z-40 w-64 h-full bg-gradient-to-b from-green-800 to-green-700 p-4 text-white
        transform transition-all duration-300 ease-in-out
        ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="flex items-center justify-between mb-8 pt-2">
          <h1 className="text-2xl font-bold flex items-center">
            
          <div className=" items-center">
    <span className='hidden md:block mb-2'> <DashboardIcon className=" mr-2 w-8 h-8 mb-1" /></span>
   
    
 
</div>


           
          </h1>
        </div>

        <div className="overflow-y-auto h-[calc(100%-4rem)] pr-2">
          <SidebarItem title="Dashboard" icon={DashboardIcon}>
            <SubItem icon={DashboardIcon} onClick={() => handleClick('Overview')}>
              Overview
            </SubItem>
          </SidebarItem>

          <SidebarItem title="Profile" icon={PersonIcon}>
            <SubItem icon={PersonIcon} onClick={() => handleClick('view')}>
              View/Edit Profile
            </SubItem>
            <SubItem icon={PersonIcon} onClick={() => handleClick('kyc')}>
              KYC and Bank Details
            </SubItem>
          </SidebarItem>

          <SidebarItem title="Genealogy" icon={GenealogyIcon}>
            <SubItem icon={GenealogyIcon} onClick={() => handleClick('tree')}>
              Family Tree
            </SubItem>
          </SidebarItem>

          <SidebarItem title="Incomes" icon={MoneyIcon}>
            <SubItem icon={MoneyIcon} onClick={() => handleClick('myincome')}>
              My Matching Income
            </SubItem>
            <SubItem icon={MoneyIcon} onClick={() => handleClick('mytotalincome')}>
              My Total Income
            </SubItem>
            <SubItem icon={MoneyIcon} onClick={() => handleClick('matchincome')}>
              Matching Income
            </SubItem>
          </SidebarItem>

          <SidebarItem title="Messages" icon={EmailIcon}>
            <SubItem icon={EmailIcon} onClick={() => handleClick('newmessage')}>
              New Message
            </SubItem>
            <SubItem icon={EmailIcon} onClick={() => handleClick('viewmessage')}>
              View Message
            </SubItem>
          </SidebarItem>

          <SidebarItem title="Support" icon={HelpIcon}>
            <SubItem icon={HelpIcon} onClick={() => handleClick('helpcenter')}>
              Help Center
            </SubItem>
          </SidebarItem>

          <SidebarItem title="Logout" icon={LogoutIcon}>
            <SubItem icon={LogoutIcon} onClick={handleLogout}>
              Sign Out
            </SubItem>
          </SidebarItem>
        </div>
      </div>








      {/* Main Content */}
      <div className="flex-1  overflow-auto">
        {<Dashboardheader username={username}/>}

        <div className=' mt-16    '>

        {currentActive === 'Overview' && <Overview/>}
        {currentActive === 'view' && <div><ProfileView/></div>}
        {currentActive === 'kyc' && <div><BankDetailsKyc/></div>}
        {currentActive === 'tree' && <div><GenealogyTree/></div>}
        {currentActive === 'myincome' && <div><MatchingIncomeReport/></div>}
        {currentActive === 'mytotalincome' && <div><MyIncomeReport/></div>}
        {currentActive === 'matchincome' && <div><RewardReport/></div>}
        {currentActive === 'newmessage' && <div><SendMessage/></div>}
        {currentActive === 'viewmessage' && <div><MessageInbox/></div>}
        {currentActive === 'helpcenter' && <div>Help Center</div>}
        {currentActive === 'logout' && <div>Logging out...</div>}


        </div>
        
      </div>
    </div>





  );
}

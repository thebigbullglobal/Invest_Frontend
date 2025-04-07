
import React, { useState, useEffect } from 'react';
import { 
  ClickAwayListener, 
  Tooltip, 
  IconButton,
  Box,
  Select,
  MenuItem,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from '@mui/material';
import { 
  Dashboard as DashboardIcon,
  Person as PersonIcon,
  Map as MapIcon,
  AccountTree as GenealogyIcon,
  AttachMoney as MoneyIcon,
  Email as EmailIcon,
  Help as HelpIcon,
  Logout as LogoutIcon,
  Notifications as NotificationsIcon,
  Search as SearchIcon,
  Settings as SettingsIcon,
  ChevronRight,
  Menu,
  BarChart,
  PieChart
} from '@mui/icons-material';
import Dashboardheader from './Profile/Dashboardheader';


const StatCard = ({ title, value, trend, icon: Icon }) => {
    const trendColor = trend >= 0 ? 'text-green-300' : 'text-red-300';
    const trendIcon = trend >= 0 ? '↑' : '↓';
    
    return (
      <div className="p-4 bg-gradient-to-br bg-green-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
        <div className="flex justify-between items-start">
          <div>
            <span className="text-sm opacity-80">{title}</span>
            <span className="text-2xl font-bold block mt-1">{value}</span>
          </div>
          <div className="bg-white bg-opacity-20 p-2 rounded-full">
            <Icon fontSize="small" />
          </div>
        </div>
        <div className={`mt-2 text-sm ₹{trendColor}`}>
          {trendIcon} {Math.abs(trend)}% from last week
        </div>
      </div>
    );
  };


function Overview(props) {


        const [showNotifications, setShowNotifications] = useState(false);
 


        

       
      // Stats data
      const stats = [
        { title: 'Total Left Members', value: '1,245', trend: 5.2, icon: PersonIcon },
        { title: 'Total Right Members', value: '1,189', trend: 3.8, icon: PersonIcon },
        { title: 'Total Left Business', value: '₹24,580', trend: 7.1, icon: MoneyIcon },
        { title: 'Total Right Business', value: '₹22,430', trend: 4.3, icon: MoneyIcon },
        { title: 'C/F Left Business', value: '₹3,210', trend: 2.4, icon: MoneyIcon },
        { title: 'C/F Right Business', value: '₹2,980', trend: 1.9, icon: MoneyIcon },
        { title: 'Direct Income', value: '₹1,850', trend: 12.7, icon: MoneyIcon },
        { title: 'Matching Income', value: '₹3,420', trend: 8.5, icon: MoneyIcon },
        { title: 'Cashback Income', value: '₹420', trend: 3.2, icon: MoneyIcon },
        { title: 'Sponsor Income', value: '₹2,150', trend: 9.1, icon: MoneyIcon },
      ];
    
      // Notifications data
      const notifications = [
        { id: 1, title: 'New message from admin', time: '2 min ago', unread: true },
        { id: 2, title: 'Payment received', time: '1 hour ago', unread: true },
        { id: 3, title: 'System update', time: '3 hours ago', unread: false },
      ];
    
      // Team members data
      const teamMembers = [1, 2, 3, 4, 5].map(row => ({
        id: row,
        name: `Member ₹{row}`,
        email: `member₹{row}@example.com`,
        level: row,
        business: `₹₹{(row * 500).toLocaleString()}`,
        status: row % 2 === 0 ? 'Active' : 'Pending'
      }));

    


   

  return (

      <div className='w-full'>
              <div className="w-full">




         
       
    





      
       <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50">
        
         <Box className="bg-gradient-to-r rounded-xl shadow-lg p-6   bg-green-700 mb-6 text-white">
           <div className="flex flex-col md:flex-row md:items-center md:justify-between">
             <div>
               <h2 className="text-2xl font-bold mb-2">Welcome back, </h2>
               <p className="opacity-90">Here's what's happening with your business today.</p>
             </div>
             <button className="mt-4 md:mt-0 px-6 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg font-medium transition-colors duration-200">
               View Reports
             </button>
           </div>
         </Box>

      
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-6">
           {stats.map((stat, index) => (
             <StatCard key={index} {...stat} />
           ))}
         </div>

        
         <Box className="bg-white p-6 rounded-xl shadow-md mb-6">
           <h3 className="text-lg font-semibold mb-4 text-gray-800">Recent Activity</h3>
           <div className="space-y-4">
             {notifications.map(item => (
               <div key={item.id} className="flex items-start">
                 <div className="bg-green-100 p-2 rounded-full mr-3">
                   <NotificationsIcon className="text-green-600" fontSize="small" />
                 </div>
                 <div>
                   <p className="text-sm font-medium text-green-800">{item.title}</p>
                   <p className="text-xs text-gray-500 mt-1">{item.time}</p>
                 </div>
               </div>
             ))}
           </div>
         </Box>

       
         <Box className="bg-white p-6 rounded-xl shadow-md">
           <h3 className="text-lg font-semibold mb-4 text-gray-800">Team Members</h3>
           <Table>
             <TableHead>
               <TableRow>
                 <TableCell>Name</TableCell>
                 <TableCell>Level</TableCell>
                 <TableCell>Business</TableCell>
                 <TableCell>Status</TableCell>
               </TableRow>
             </TableHead>
             <TableBody>
               {teamMembers.map(member => (
                 <TableRow key={member.id}>
                   <TableCell>
                     <div className="flex items-center">
                       <PersonIcon className="mr-2 text-blue-500" />
                       {member.name}
                     </div>
                   </TableCell>
                   <TableCell>{member.level}</TableCell>
                   <TableCell>{member.business}</TableCell>
                   <TableCell>
                     <span className={`px-2 py-1 rounded-full text-xs ₹{
                       member.status === 'Active' 
                         ? 'bg-green-100 text-green-800' 
                         : 'bg-yellow-100 text-yellow-800'
                     }`}>
                       {member.status}
                     </span>
                   </TableCell>
                 </TableRow>
               ))}
             </TableBody>
           </Table>
         </Box>
       </main>
   
       </div> 
      </div>
    
  )
}

export default Overview
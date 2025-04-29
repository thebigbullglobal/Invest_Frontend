import React, { useState } from 'react';
import { 
  Tooltip, 
  IconButton
} from '@mui/material';
import { 
  Search as SearchIcon,
  Notifications as NotificationsIcon
} from '@mui/icons-material';

function Dashboardheader({username}) {
  const [showNotifications, setShowNotifications] = useState(false);

  return (             
    <header className="w-full  bg-white shadow-sm  z-30 fixed top-0 px-4 left-4">
      <div className="flex items-center justify-between px-4 md:px-6 py-3">
        {/* Empty div for flex spacing on desktop - hidden on mobile */}
        <div className="hidden md:block w-8"></div>
        
        {/* Centered title on mobile, left-aligned on desktop */}
        <h2 className="md:hidden text-xl font-semibold text-gray-800 text-center md:text-left flex-1 md:flex-none">
          Dashboard Overview
        </h2>
        
        <div className="flex items-center space-x-2 md:space-x-4">
          <Tooltip title="Search">
            <IconButton className="hidden sm:inline-flex">
              <SearchIcon className="text-gray-500" />
            </IconButton>
          </Tooltip>
          
          <Tooltip title="Notifications">
            <IconButton onClick={() => setShowNotifications(!showNotifications)}>
              <div className="relative">
                <NotificationsIcon className="text-gray-500" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </div>
            </IconButton>
          </Tooltip>
          
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-semibold">
              {username?.substring(0,2) || 'US'}
            </div>
            <span className="hidden md:inline text-sm font-medium">
              {username || 'Loading...'}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Dashboardheader;
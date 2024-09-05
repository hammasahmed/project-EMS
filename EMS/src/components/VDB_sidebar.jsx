import React, { useState } from 'react';

const Sidebar = ({ setSelectedComponent }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`bg-gray-800 text-white h-screen transition-all duration-300 ease-in-out ${isExpanded ? 'w-64' : 'w-16'}`}>
      <button
        onClick={toggleSidebar}
        className="w-full text-center py-4 bg-gray-700 hover:bg-gray-600 transition-colors"
      >
        {isExpanded ? 'Collapse' : 'Expand'}
      </button>
      <div className="mt-4 flex flex-col items-center">
        <button
          className="mb-4 text-2xl flex items-center"
          onClick={() => setSelectedComponent('Home')}
        >
          🎫 {isExpanded && 'My Listings'}
        </button>
        <button
          className="mb-4 text-2xl flex items-center"
          onClick={() => setSelectedComponent('Search')}
        >
          🎪 {isExpanded && 'Bookings'}
        </button>
        <button
          className="mb-4 text-2xl flex items-center"
          onClick={() => setSelectedComponent('Settings')}
        >
          ➕ {isExpanded && 'Add Listings'}
        </button>
        <button
          className="mb-4 text-2xl flex items-center"
          onClick={() => setSelectedComponent('Setting')}
        >
          🤵 {isExpanded && 'Profile'}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

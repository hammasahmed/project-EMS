import React from 'react'
import Sidebar from '../components/VDB_sidebar'
import VDB_addlistings from '../components/VDB_addlistings';
import VDB_bookings from '../components/VDB_bookings';
import VDB_mylistings from '../components/VDB_mylistings';
import VDB_profile from '../components/VDB_profile';
import { useState } from 'react';
const CustomerDB = () => {
  const [selectedComponent, setSelectedComponent] = useState('Home');

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'Home':
        return <VDB_mylistings />;
      case 'Search':
        return <VDB_bookings />;
      case 'Setting':
        return <VDB_profile />;
      default:
        return <VDB_mylistings />;
    }
  };

  return (
    <div className="flex">
      <Sidebar setSelectedComponent={setSelectedComponent} />
      <div className="flex-1 p-4">
        {renderComponent()}
      </div>
    </div>
  );
}


export default CustomerDB
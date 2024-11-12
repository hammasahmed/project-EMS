import React, { useState } from "react";
import UserSidebar from "../components/UserSidebar";
import UserProfile from "../components/UserProfile";

const UserDashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const componentRender = () => {
    if (selectedComponent == "Profile") {
      return <UserProfile />;
    }
    return <div>Select a component from the sidebar</div>;
  };

  return (  
    <>
      <div className="flex">
        <UserSidebar setSelectedComponent={setSelectedComponent} />
        <div className="w-full">
          {componentRender()}
          </div>
      </div>
    </>
  );
};

export default UserDashboard;

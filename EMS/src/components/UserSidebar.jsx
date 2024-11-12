import React,{useState} from 'react';
const UserSidebar = ({setSelectedComponent})=> {
    const buttonprops = "text-md flex my-2 h-10 justify-center cursor-pointer items-center rounded-md w-full bg-blue-500 border-[1px] border-black  hover:bg-blue-800 transition-colors";
    return (
        <>
      <div
        className="w-[100px] bg-gray-800 text-white transition-all duration-300 ease-in-out flex flex-col flex-grow-1"
      >
    
        <div className=" flex flex-col items-center h-[50%] justify-center">
          <button
            className={buttonprops}
            onClick={()=>
              {
                console.log("Clicked")
                return setSelectedComponent("Orders")
              }}
          >
            🎫 Orders
          </button>
          <button
            className={buttonprops}
            onClick={()=>{console.log("Clicked") 
              return setSelectedComponent("Bookings")}}
          >
            Bookings
          </button>
          <button
            className={buttonprops}
            onClick={()=>{console.log("Clicked")
              return setSelectedComponent("Profile")}}
          >
            Profile
          </button>
        </div>
      </div>
      {/* {selectedcomponent == "Orders"?()=>{
        return <UserOrders />
      }:""}
            {selectedcomponent == "Bookings"?()=>{
        return <UserBookings />
      }:""} */}
            {/* {selectedcomponent == "Profile"?()=>{
        return <UserProfile />
      }:""}
     */}
      </>
    );
}

export default UserSidebar;
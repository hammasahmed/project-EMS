import React from "react";
import notification from "../assets/notification.svg";
import contact from "../assets/contact.svg";
import person from "../assets/food1.png";

// const VDB_profile = () => {
//   return (
//     <>
//       <div className="w-full font-sans border-[1px] border-[#c2c9d666] flex h-16 p-3 justify-end fixed z-10 ">
//         <div></div>
//         <div className="rounded-full h-fit w-fit mr-3 mt-2">
//           <img src={notification} className="h-7 w-7" />
//         </div>
//         <div className=" rounded-full h-fit w-fit mr-3">
//           <img src={contact} alt="" className="h-10 w-10" />
//         </div>
//         <div className="rounded-full h-fit w-fit mr-24 " >
//           <img src={person} alt="" className="h-10 w-10 rounded-full" />
//         </div>
//       </div>




//       {/* Whole Container */}
//       <div className="h-screen w-full font-sans">
//         {/* Account  */}
//         <div className=" mt-16 w-full h-16 flex justify-start">
//           <div className="align-middle text-3xl pt-2 pl-4">
//             <b>Account</b>
//           </div>
//         </div>

//         <div className="flex flex-col justify-around font-sans sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row">
//           <div className="h-96  w-72 rounded-xl mt-10 border-[1px]">
//             {/* For Picture Section */}
//             <div className="flex flex-col justify-center text-center h-full shadow-lg rounded-xl">
//               <div className="flex justify-center">
//                 <img
//                   src={person}
//                   className="h-28 w-28 rounded-full justify-center"
//                 />
//               </div>
//               <div className="text-2xl mt-4">
//                 <b>Sofia Rivers</b>
//               </div>
//               <div className="mt-2 text-gray-500">Los Angles, USA</div>
//               <div className="mt-2 text-gray-500">GMT-7</div>
//               <div className="">
//                 <button className="cursor-pointer font-medium bg-blue-500 text-center p-2 rounded-lg text-white w-[80%] mt-10">
//                   Upload Picture
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="h-fit w-[50%] rounded-xl mt-10 border-[1px]">
//             <div className="w-full mx-auto bg-white p-8 shadow-lg rounded-xl">
//               <h2 className="text-xl font-semibold mb-4">Profile</h2>
//               <p className="text-gray-500 mb-6">
//                 The information can be edited
//               </p>
//               <form>
//                 <div className="grid grid-cols-2 gap-4 mb-4">
//                   <div>
//                     <label
//                       className="block text-sm font-medium text-gray-700"
//                        "first-name"
//                     >
//                       First name *
//                     </label>
//                     <input
//                       type="text"
//                       id="first-name"
//                       name="first-name"
//                       className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
//                       placeholder="Sofia"
//                     />
//                   </div>
//                   <div>
//                     <label
//                       className="block text-sm font-medium text-gray-700"
//                        "last-name"
//                     >
//                       Last name *
//                     </label>
//                     <input
//                       type="text"
//                       id="last-name"
//                       name="last-name"
//                       className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
//                       placeholder="Rivers"
//                     />
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-2 gap-4 mb-4">
//                   <div>
//                     <label
//                       className="block text-sm font-medium text-gray-700"
//                        "email"
//                     >
//                       Email address *
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
//                       placeholder="sofia"
//                     />
//                   </div>
//                   <div>
//                     <label
//                       className="block text-sm font-medium text-gray-700"
//                        "phone"
//                     >
//                       Phone number
//                     </label>
//                     <input
//                       type="text"
//                       id="phone"
//                       name="phone"
//                       className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
//                       placeholder="Phone number"
//                     />
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-2 gap-4 mb-4">
//                   <div>
//                     <label
//                       className="block text-sm font-medium text-gray-700"
//                        "state"
//                     >
//                       State
//                     </label>
//                     <select
//                       id="state"
//                       name="state"
//                       className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
//                     >
//                       <option>Select a state</option>
//                       <option>California</option>
//                       <option>New York</option>
//                       <option>Texas</option>
//                     </select>
//                   </div>
//                   <div>
//                     <label
//                       className="block text-sm font-medium text-gray-700"
//                        
//                     >
//                       City
//                     </label>
//                     <input
//                       type="text"
//                       id="city"
//                       name="city"
//                       className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
//                       placeholder="City"
//                     />
//                   </div>
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
//                 >
//                   Save details
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

const VDB_profile = () => {
  return (
    <>
      {/* Header */}
      <div className="w-full font-sans border-[1px] border-[#c2c9d666] flex h-16 p-3 justify-end bg-white">
        <div className="rounded-full h-fit w-fit mr-3 mt-2">
          <img src={notification} className="h-7 w-7" />
        </div>
        <div className="rounded-full h-fit w-fit mr-3">
          <img src={contact} alt="" className="h-10 w-10" />
        </div>
        <div className="rounded-full h-fit w-fit mr-3">
          <img src={person} alt="" className="h-10 w-10 rounded-full" />
        </div>
      </div>

      {/* Whole Container */}
      <div className="h-fit w-full font-sans mt-16">
        {/* Account Section */}
        <div className="w-full h-16 flex justify-start">
          <div className="align-middle text-3xl pt-2 pl-4">
            <b>Account</b>
          </div>
        </div>

        {/* Profile and Details Section */}
        <div className="flex flex-col items-center sm:items-start sm:flex-row sm:justify-around font-sans">
          {/* Profile Picture Card */}
          <div className="h-fit w-[90%] sm:w-72 rounded-xl mt-10 border-[1px] shadow-lg">
            <div className="flex flex-col justify-center text-center h-full p-4">
              <div className="flex justify-center">
                <img src={person} className="h-28 w-28 rounded-full" />
              </div>
              <div className="text-2xl mt-4">
                <b>Sofia Rivers</b>
              </div>
              <div className="mt-2 text-gray-500">Los Angeles, USA</div>
              <div className="mt-2 text-gray-500">GMT-7</div>
              <div className="mt-4">
                <button className="cursor-pointer font-medium bg-blue-500 text-center p-2 rounded-lg text-white w-full">
                  Upload Picture
                </button>
              </div>
            </div>
          </div>

          {/* Profile Form */}
          <div className="h-fit w-[90%] sm:w-[60%] md:w-[50%] rounded-xl mt-10 border-[1px] shadow-lg">
            <div className="w-full mx-auto bg-white p-8 shadow-lg rounded-xl">
              <h2 className="text-xl font-semibold mb-4">Profile</h2>
              <p className="text-gray-500 mb-6">The information can be edited</p>
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700" >
                      First name *
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      name="first-name"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                      placeholder="Sofia"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700" >
                      Last name *
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      name="last-name"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                      placeholder="Rivers"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700" >
                      Email address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                      placeholder="sofia@devias.io"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700" >
                      Phone number
                    </label>
                    <input
                      type="number"
                      id="phone"
                      name="phone"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                      placeholder="Phone number"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700" >
                      State
                    </label>
                    <select
                      id="state"
                      name="state"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                    >
                      <option>Pakistan</option>
                      <option>California</option>
                      <option>New York</option>
                      <option>Texas</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700"  >
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                      placeholder="City"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VDB_profile;
import React from "react";
import notification from "../assets/notification.svg";
import contact from "../assets/contact.svg";
import person from "../assets/food1.png";


const VDB_profile = () => {
  const firstName = localStorage.getItem('firstName');
  const lastName = localStorage.getItem('lastName');
  const email = localStorage.getItem('email');
  const role = localStorage.getItem('role');
  console.log(firstName, lastName);

  const handleImageChange = async (e) => {
    const file = e.target.files[0]; // Get only the first file
  
    // Check if a file was selected
    if (!file) {
      console.log("No file selected");
      return;
    }
  
    try {
      const img_data = new FormData();
      img_data.append("file", file);
      img_data.append("upload_preset", "eventmanagement");
      img_data.append("cloud_name", "dbg5ulcoj");
  
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dbg5ulcoj/image/upload",
        {
          method: "POST",
          body: img_data,
        }
      );
  
      const imageUrl = await res.json();
  
      // Assuming formData.imageUrl is an array to hold image URLs, we set the first entry here
      formData.imageUrl = [imageUrl.url]; // Update with the uploaded image URL
      console.log(formData.imageUrl);
    } catch (error) {
      console.log(error);
    }
  };
  




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
                <b>{firstName + " " + lastName}</b>
              </div>
              <div className="mt-2 text-gray-500">{email}</div>
              <div className="mt-2 text-gray-500">GMT-7</div>
              <div className="mt-4">
                <button className="cursor-pointer font-medium bg-blue-500 text-center p-2 rounded-lg text-white w-full">
                  <input onChange={handleImageChange} type="file" style={{backgroundColor:"#3b82f6", width:"100%"}} />
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
                      defaultValue={firstName}
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
                      defaultValue={lastName}

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
                      defaultValue={email}
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
                      Role
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                      placeholder="City"
                      defaultValue={role}
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
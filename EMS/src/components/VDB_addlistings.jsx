
import React from "react";
import { useState } from "react";



function VDB_addlistings(prop) {
  const booleanOptions = ["Select Option","Yes", "No"];

  const lighting = ["Select Option","High", "Medium", "Low"];
  const events = [
    "Select Option",
    "Wedding",
    "Birthday",
    "Anniversary",
    "Mehandi",
    "Barat",
    "Walima",
    "Conference",
    "Seminar",
  ];
  const grounds = [
    "Select Option",
    "Football",
    "Badminton",
    "Tennis",
    "Cricket",
    "Volleyball",
    "Basketball",
  ];
  const sitting_types = [
    "Select Option",
    "Chevron",
    "Auditorium",
    "Banquet",
    "Boardroom",
    "Cabaret",
    "Classroom",
    "Hollow square",
    "U-shaped"
  ]

  const venueOptions = [
    "Select Option",
    "Venue Type",
    "sports_arena",
    "banquet_hall",
    "marquee",
    "conference_hall",
    "hotel"
  ];

  const ServingType = ["Select Option",'', 'Self-Serving', 'Full-Serving'];

  const City = ["Select Option", "Islamabad", "Ahmed Nager", "Ahmadpur East", "Ali Khan", "Alipur", "Arifwala", "Attock", "Bhera", "Bhalwal",
    "Bahawalnagar", "Bahawalpur", "Bhakkar", "Burewala", "Chillianwala", "Chakwal", "Chichawatni", "Chiniot", "Chishtian", "Daska",
    "Darya Khan", "Dera Ghazi", "Dhaular", "Dina", "Dinga", "Dipalpur", "Faisalabad", "Fateh Jhang", "Ghakhar Mandi", "Gojra", "Gujranwala",
    "Gujrat", "Gujar Khan", "Hafizabad", "Haroonabad", "Hasilpur", "Haveli", "Lakha", "Jalalpur", "Jattan", "Jampur", "Jaranwala", "Jhang", "Jhelum",
    "Kalabagh", "Karor Lal", "Kasur", "Kamalia", "Kamoke", "Khanewal", "Khanpur", "Kharian", "Khushab", "Kot Adu", "Jauharabad",
    "Lahore", "Lalamusa", "Layyah", "Liaquat Pur", "Lodhran", "Malakwal", "Mamoori", "Mailsi", "Mandi Bahauddin", "mian Channu",
    "Mianwali", "Multan", "Murree", "Muridke", "Mianwali Bangla", "Muzaffargarh", "Narowal", "Okara", "Renala Khurd", "Pakpattan",
    "Pattoki", "Pir Mahal", "Qaimpur", "Qila Didar", "Rabwah", "Raiwind", "Rajanpur", "Rahim Yar", "Rawalpindi", "Sadiqabad",
    "Safdarabad", "Sahiwal", "Sangla Hill", "Sarai Alamgir", "Sargodha", "Shakargarh", "Sheikhupura", "Sialkot", "Sohawa",
    "Soianwala", "Siranwali", "Talagang", "Taxila", "Toba Tek", "Vehari", "Wah Cantonment", "Wazirabad", "Badin", "Bhirkan",
    "Rajo Khanani", "Chak", "Dadu", "Digri", "Diplo", "Dokri", "Ghotki", "Haala", "Hyderabad", "Islamkot", "Jacobabad", "Jamshoro",
    "Jungshahi", "Kandhkot", "Kandiaro", "Karachi", "Kashmore", "Keti Bandar", "Khairpur", "Kotri", "Larkana", "Matiari", "Mehar",
    "Mirpur Khas", "Mithani", "Mithi", "Mehrabpur", "Moro", "Nagarparkar", "Naudero", "Naushahro Feroze", "Naushara", "Nawabshah",
    "Nazimabad", "Qambar", "Qasimabad", "Ranipur", "Ratodero", "Rohri", "Sakrand", "Sanghar", "Shahbandar", "Shahdadkot", "Shahdadpur",
    "Shahpur Chakar", "Shikarpaur", "Sukkur", "Tangwani", "Tando Adam", "Tando Allahyar", "Tando Muhammad", "Thatta", "Umerkot", "Warah",
    "Abbottabad", "Adezai", "Alpuri", "Akora Khattak", "Ayubia", "Banda Daud", "Bannu", "Batkhela", "Battagram", "Birote", "Chakdara",
    "Charsadda", "Chitral", "Daggar", "Dargai", "Darya Khan", "dera Ismail", "Doaba", "Dir", "Drosh", "Hangu", "Haripur", "Karak", "Kohat",
    "Kulachi", "Lakki Marwat", "Latamber", "Madyan", "Mansehra", "Mardan", "Mastuj", "Mingora", "Nowshera", "Paharpur", "Pabbi",
    "Peshawar", "Saidu Sharif", "Shorkot", "Shewa Adda", "Swabi", "Swat", "Tangi", "Tank", "Thall", "Timergara", "Tordher", "Awaran",
    "Barkhan", "Chagai", "Dera Bugti", "Gwadar", "Harnai", "Jafarabad", "Jhal Magsi", "Kacchi", "Kalat", "Kech", "Kharan", "Khuzdar",
    "Killa Abdullah", "Killa Saifullah", "Kohlu", "Lasbela", "Lehri", "Loralai", "Mastung", "Musakhel", "Nasirabad", "Nushki", "Panjgur",
    "Pishin valley", "Quetta", "Sherani", "Sibi", "Sohbatpur", "Washuk", "Zhob", "Ziarat"]
  const cateringOptions = [
    "Select Option","Catering Type", "Starters" ,"Main Courses" ,"Grilled Items" ,"Breads" , "Desserts" , "Beverages" 
  ];


  const serviceOptions = ["Select Service" ,"Venue","Catering"
  ];

  const [formData, setFormData] = useState({
    title: "",
    selectedoption: "",
    venue_type:"",
    event_type: "",
    date: "",
    parking: "",
    ground_type: "",
    sitting_arrangement: "",
    serving_capacity:"",
    ServingType:"",
    lighting_type: "",
    VIP_seats: "",
    projector: "",
    wifi: "",
    ac_heating: "",
    catering: "",
    address:"",
    Price_Per_Person:"",
    outdoor_catering:"",
    Crockry:"",
    serving_staff:"",
    service_type:"",
    Inbond_catering:"",
    seating_capacity:"",
    description:""
  });
  const [timeSlots, setTimeSlots] = useState([]);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);
  const [menuItems, setMenuItems] = useState([
    { name: '', starters: '', mainCourses: '', grilledItems: '', breads: '', desserts: '', beverages: '', price: '' }
  ]);




  const handleMenu = (index, event) => {
    const { name, value } = event.target;
    const newMenuItems = [...menuItems];
    newMenuItems[index][name] = value;
    setMenuItems(newMenuItems);
  };

  const addMenuItem = () => {
    setMenuItems([...menuItems, { name: '', starters: '', mainCourses: '', grilledItems: '', breads: '', desserts: '', beverages: '', price: '' }]);
  };

  const removeMenuItem = (index) => {
    setMenuItems(menuItems.filter((_, i) => i !== index));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedImages((prevImages) => [...prevImages, ...files]);
  };

  // Remove an image from the preview
  const handleRemoveImage = (index) => {
    setSelectedImages(selectedImages.filter((_, i) => i !== index));
  };

  const handleUpload = async () => {
    // You may want to compress images here if needed
    const formData = new FormData();
    selectedImages.forEach((image) => {
      formData.append("images", image);
    });

    try {
      const response = await fetch("http://your-backend-url.com/upload", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        alert("Images uploaded successfully!");
        setSelectedImages([]);
      } else {
        alert("Failed to upload images.");
      }
    } catch (error) {
      console.error("Error uploading images:", error);
    }
  };

  // Function to handle adding a new time slot
  const addTimeSlot = () => {
    if (startTime && endTime) {
      setTimeSlots([...timeSlots, { start: startTime, end: endTime }]);
      setStartTime(''); // Reset inputs after adding
      setEndTime('');
    }
  };


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData)
  }




  return (
    <div
      className=" bg-slate-300"

    >

      <div className="w-[90%] sm:w-[60%] md:w-[60%] rounded-xl mt-10 border-[1px] shadow-lg m-auto">
        <div className="w-full mx-auto bg-white p-8 shadow-lg rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Add Listing</h2>
          {/* <p className="text-gray-500 mb-6">The information can be edited</p> */}
          <form>
            <div className="  gap-4 mb-4 ">
              <div>
                <label className="block text-sm font-medium text-gray-700" >
                  Title
                </label>
                <input
                  type="text"
                  id="first-name"
                  value={formData.title}
                  name="title"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Beautiful Marquee at my home"
                  onChange={handleChange}
                  
                />
              </div>

              <label className="block text-sm font-medium text-gray-700" >
                Address
              </label>
              <input
                type="text"
                id="address"
                value={formData.address}
                 name="address"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Dhoke Khaby, Chungi No. 2"
                onChange={handleChange}
                
              />

            </div>
            <div className=" gap-4 mb-4 w-[100%]">


              <select
                name="service_type"
                value={formData.service_type}
                className="border-2 h-10 rounded-xl pl-4 w-[100%]"
                onChange={handleChange}
              >
                {serviceOptions.map((option, index) => (
                  <option key={index}>
                    {option}
                  </option>
                ))}
              </select>

              <select
              name="venue_type"
              value={formData.venue_type}
                className="border-2 h-10 rounded-xl pl-4 w-[100%] my-[2%]"
                onChange={handleChange}
              >
                {venueOptions.map((option, index) => (
                  <option key={index}   >
                    
                  {option}
                  </option>
                ))}
              </select>

             

              <select className="border-2 h-10 rounded-xl pl-4 w-[100%] my-[2%]"
              name="ServingType"
              value={formData.ServingType}
              >
                
                {ServingType.map((type, index) => (
                  <option key={index} value={type}>
                    {type || 'Select Serving Type'}
                  </option>
                ))}
              </select>

              <select
              name="venue_type"
              value={formData.venue_type}
                className="border-2 h-10 rounded-xl pl-4 w-[100%]"
                onChange={handleChange}
              >
                {City.map((option, index) => (
                  <option key={index} >
                    {option}
                  </option>
                ))}
              </select>
              <label className="block text-sm font-medium text-gray-700">
                Price Per Person(Starting From)
              </label>
              <input
                id=""
                name="Price_Per_Person"
                value={formData.Price_Per_Person}
                // value={formData.parking}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                onChange={handleChange}
                type="number"
              ></input>
              <label className="block text-sm font-medium text-gray-700">
                Serving Capacity
              </label>
              <input
                id=""
                value={formData.serving_capacity}
                name="serving_capacity"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                onChange={handleChange}
                type="number"
              ></input>
              <div className=" gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Parking Capacity
                  </label>
                  <input
                    id="Parking"
                    name="parking"
                    value={formData.parking}
                    // value={formData.parking}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                    onChange={handleChange}
                    type="number"
                  ></input>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Ground Type
                  </label>
                  <select
                    id="ground"
                    value={formData.ground_type}
                    name="ground_type"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                    onChange={handleChange}
                  >
                    {grounds.map((e, index) => {
                      return (
                        <option key={index} value={e}>
                          {e}
                        </option>
                      );
                    })}
                  </select>
                </div>

              </div>
              <div className=" gap-4 mb-4">

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    No.of VIP Persons
                  </label>
                  <input
                    id="VIPS"
                    name="VIP_seats"
                    value={formData.VIP_seats}
                    // value={formData.VIP_seats}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                    onChange={handleChange}
                    type="number"
                  ></input>
                </div>

                <label className="block text-sm font-medium text-gray-700">
                  Crockry
                </label>
                <select
                  name="Crockry"
                  value={formData.Crockry}
                  // value={formData.projector}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                  onChange={handleChange}
                >
                  {booleanOptions.map((e, index) => {
                    return (
                      <option key={index}>
                        {e}
                      </option>
                    );
                  })}
                </select>

                <label className="block text-sm font-medium text-gray-700">
                  Serving Staff Availibility
                </label>
                <select
                  name="serving_staff"
                  value={formData.serving_staff}
                  // value={formData.projector}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                  onChange={handleChange}
                >
                  {booleanOptions.map((e, index) => {
                    return (
                      <option key={index} value={e}>
                        {e}
                      </option>
                    );
                  })}
                </select>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Projector
                  </label>
                  <select
                    name="projector"
                    value={formData.projector}
                    // value={formData.projector}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                    onChange={handleChange}
                  >
                    {booleanOptions.map((e, index) => {
                      return (
                        <option key={index} value={e}>
                          {e}
                        </option>
                      );
                    })}
                  </select>
                </div>

              </div>

              <div className=" gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    AC / Heating
                  </label>
                  <select
                    name="ac_heating"
                    value={formData.ac_heating}
                    // value={formData.ac_heating}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                    onChange={handleChange}
                  >
                    {booleanOptions.map((e, index) => {
                      return (
                        <option key={index} value={e}>
                          {e}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Wifi
                  </label>
                  <select
                    name="wifi"
                    value={formData.wifi}
                    // value={formData.wifi}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                    onChange={handleChange}
                  >
                    {booleanOptions.map((e, index) => {
                      return (
                        <option key={index} value={e}>
                          {e}
                        </option>
                      );
                    })}
                  </select>
                </div>

              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Outdoor Catering Allowed
                </label>
                <select
                  name="outdoor_catering"
                  value={formData.outdoor_catering}
                  // value={formData.catering}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                  required
                  onChange={handleChange}
                >
                  {booleanOptions.map((e, index) => {
                    return (
                      <option key={index} value={e}>
                        {e}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className=" gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Inbound Catering Service
                  </label>
                  <select
                    name="Inbond_catering"
                    value={formData.Inbond_catering}
                    // value={formData.catering}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                    required
                    onChange={handleChange}
                  >
                    {booleanOptions.map((e, index) => {
                      return (
                        <option key={index} value={e}>
                          {e}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Seating Capacity
                  </label>
                  <input
                    type="text"
                    name="seating_capacity"
                    value={formData.seating_capacity}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                    onChange={handleChange}
                    placeholder="No. of persons"
                    
                  />
                </div>
              </div>
              <div className="">
                <h2>Create Your Menu</h2>
                {menuItems.map((item, index) => (
                  <div key={index} className="menu-item flex flex-wrap" >
                    <input
                      type="text"
                      name="name"
                      placeholder="Item Name"
                      // value={item.name}
       className="h-10 w-[25%]"               onChange={(e) => handleChange(index, e)}
                    />
                    <input
                      type="text"
                      name="starters"
                      placeholder="Starters"
                      // value={item.starters}
   className="h-10 w-[25%]"                   onChange={(e) => handleChange(index, e)}
                    />
                    <input
                      type="text"
                      name="mainCourses"
                      placeholder="Main Courses"
                      // value={item.mainCourses}
className="h-10 w-[25%]"                      onChange={(e) => handleChange(index, e)}
                    />
                    <input
                      type="text"
                      name="grilledItems"
                      placeholder="Grilled Items"
                      // value={item.grilledItems}className="h-10 w-[25%]"
                      onChange={(e) => handleChange(index, e)}
                    />
                    <input
                      type="text"
                      name="breads"
                      placeholder="Breads"
                      // value={item.breads}
     className="h-10 w-[25%]"                 onChange={(e) => handleChange(index, e)}
                    />
                    <input
                      type="text"
                      name="desserts"
                      placeholder="Desserts"
                      // value={item.desserts}
   className="h-10 w-[25%]"                   onChange={(e) => handleChange(index, e)}
                    />
                    <input
                      type="text"
                      name="beverages"
                      placeholder="Beverages"
                      // value={item.beverages}
  className="h-10 w-[25%]"                    onChange={(e) => handleChange(index, e)}
                    />
                    <input
                      type="text"
                      name="price"
                      placeholder="Price"
                      // value={item.price}
                      onChange={(e) => handleChange()}
                    />
                    <button type="button" onClick={() => removeMenuItem(index)} className="border-2 border-red-400 p-1 rounded-full">Remove</button>
                  </div>
                ))}
                <div className="flex justify-end">
                <button type="button" onClick={addMenuItem} className="border-2 border-green-400 rounded-full p-2 mr-[10%] ">Add Menu</button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Suitable For
                </label>

                <div className="mt-1">
                  {events.map((e, index) => (
                    <label key={index} className="block mb-2">
                      <input
                        type="checkbox"
                        id={`event_type_${index}`}
                        name="event_type"
                        value={formData.event_type+=formData.event_type}
                        
                        className="mr-2"
                        onChange={handleChange}
                      />
                      {e}
                    </label>
                  ))}
                </div>


              </div>


              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Sitting Arrangement
                </label>
                <div className="mt-1">
                  {sitting_types.map((e, index) => (
                    <label key={index} className="block mb-2">
                      <input
                        type="checkbox"
                        id={`sitting_${index}`}
                        name="sitting_arrangement"
                        value={e}
                        className="mr-2"
                        onChange={handleChange}
                      />
                      {e}
                    </label>
                  ))}
                </div>
              </div>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">


              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Lighting Quality
                </label>
                <div className="mt-1">
                  {lighting.map((e, index) => (
                    <label key={index} className="block mb-2">
                      <input
                        type="checkbox"
                        id={`lighting_${index}`}
                        name="lighting_type"
                        value={e}
                        className="mr-2"
                        onChange={handleChange}
                      />
                      {e}
                    </label>
                  ))}
                </div>
              </div>


            </div>
            <div className="w-[80%]">
              <label for="fname">Detailed Description:</label>
              <div>
                <textarea form="form_id" className="w-[90%] border-4" />
              </div>
            </div>
            <div className="image-upload-container">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageChange}
              />
              <div className="image-preview">
                {selectedImages.map((image, index) => (
                  <div key={index} className="image-preview-item">
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`Preview ${index + 1}`}
                      className="preview-thumbnail"
                    />
                    <button onClick={() => handleRemoveImage(index)}>Remove</button>
                  </div>
                ))}
              </div>
              <button onClick={handleUpload}>Upload Images</button>
            </div>
            <button
              type="submit"
              className=" py-2 px-5 ml-[85%] bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default VDB_addlistings;
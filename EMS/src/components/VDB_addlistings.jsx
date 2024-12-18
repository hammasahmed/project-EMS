import React from "react";
import { useState } from "react";
import axios from "axios";

function VDB_addlistings(prop) {
  const booleanOptions = ["Select Option", "Yes", "No"];
  const menu_styling =
    "w-[40%] mt-1 m-auto flex py-2 px-3 border-[1px] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300";
  const lighting = ["Select Option", "High", "Medium"];
  const v_id = localStorage.getItem("id");
  console.log(v_id);
  const grounds = [
    "Select Option",
    "Football",
    "Badminton",
    "Tennis",
    "Cricket",
    "Volleyball",
    "Basketball",
  ];

  const venueOptions = [
    "Venue Type",
    "Sports Arena",
    "Banquet Hall",
    "Marquee",
    "Conference Hall",
  ];
  const [errors, setErrors] = useState({}); 
  const ServingType = ["Select Option", "Self-Serving", "Full-Serving"];

  const City = [
    "Select Option",
    "Islamabad",
    "Ahmed Nager",
    "Ahmadpur East",
    "Ali Khan",
    "Alipur",
    "Arifwala",
    "Attock",
    "Bhera",
    "Bhalwal",
    "Bahawalnagar",
    "Bahawalpur",
    "Bhakkar",
    "Burewala",
    "Chillianwala",
    "Chakwal",
    "Chichawatni",
    "Chiniot",
    "Chishtian",
    "Daska",
    "Darya Khan",
    "Dera Ghazi",
    "Dhaular",
    "Dina",
    "Dinga",
    "Dipalpur",
    "Faisalabad",
    "Fateh Jhang",
    "Ghakhar Mandi",
    "Gojra",
    "Gujranwala",
    "Gujrat",
    "Gujar Khan",
    "Hafizabad",
    "Haroonabad",
    "Hasilpur",
    "Haveli",
    "Lakha",
    "Jalalpur",
    "Jattan",
    "Jampur",
    "Jaranwala",
    "Jhang",
    "Jhelum",
    "Kalabagh",
    "Karor Lal",
    "Kasur",
    "Kamalia",
    "Kamoke",
    "Khanewal",
    "Khanpur",
    "Kharian",
    "Khushab",
    "Kot Adu",
    "Jauharabad",
    "Lahore",
    "Lalamusa",
    "Layyah",
    "Liaquat Pur",
    "Lodhran",
    "Malakwal",
    "Mamoori",
    "Mailsi",
    "Mandi Bahauddin",
    "mian Channu",
    "Mianwali",
    "Multan",
    "Murree",
    "Muridke",
    "Mianwali Bangla",
    "Muzaffargarh",
    "Narowal",
    "Okara",
    "Renala Khurd",
    "Pakpattan",
    "Pattoki",
    "Pir Mahal",
    "Qaimpur",
    "Qila Didar",
    "Rabwah",
    "Raiwind",
    "Rajanpur",
    "Rahim Yar",
    "Rawalpindi",
    "Sadiqabad",
    "Safdarabad",
    "Sahiwal",
    "Sangla Hill",
    "Sarai Alamgir",
    "Sargodha",
    "Shakargarh",
    "Sheikhupura",
    "Sialkot",
    "Sohawa",
    "Soianwala",
    "Siranwali",
    "Talagang",
    "Taxila",
    "Toba Tek",
    "Vehari",
    "Wah Cantonment",
    "Wazirabad",
    "Badin",
    "Bhirkan",
    "Rajo Khanani",
    "Chak",
    "Dadu",
    "Digri",
    "Diplo",
    "Dokri",
    "Ghotki",
    "Haala",
    "Hyderabad",
    "Islamkot",
    "Jacobabad",
    "Jamshoro",
    "Jungshahi",
    "Kandhkot",
    "Kandiaro",
    "Karachi",
    "Kashmore",
    "Keti Bandar",
    "Khairpur",
    "Kotri",
    "Larkana",
    "Matiari",
    "Mehar",
    "Mirpur Khas",
    "Mithani",
    "Mithi",
    "Mehrabpur",
    "Moro",
    "Nagarparkar",
    "Naudero",
    "Naushahro Feroze",
    "Naushara",
    "Nawabshah",
    "Nazimabad",
    "Qambar",
    "Qasimabad",
    "Ranipur",
    "Ratodero",
    "Rohri",
    "Sakrand",
    "Sanghar",
    "Shahbandar",
    "Shahdadkot",
    "Shahdadpur",
    "Shahpur Chakar",
    "Shikarpaur",
    "Sukkur",
    "Tangwani",
    "Tando Adam",
    "Tando Allahyar",
    "Tando Muhammad",
    "Thatta",
    "Umerkot",
    "Warah",
    "Abbottabad",
    "Adezai",
    "Alpuri",
    "Akora Khattak",
    "Ayubia",
    "Banda Daud",
    "Bannu",
    "Batkhela",
    "Battagram",
    "Birote",
    "Chakdara",
    "Charsadda",
    "Chitral",
    "Daggar",
    "Dargai",
    "Darya Khan",
    "dera Ismail",
    "Doaba",
    "Dir",
    "Drosh",
    "Hangu",
    "Haripur",
    "Karak",
    "Kohat",
    "Kulachi",
    "Lakki Marwat",
    "Latamber",
    "Madyan",
    "Mansehra",
    "Mardan",
    "Mastuj",
    "Mingora",
    "Nowshera",
    "Paharpur",
    "Pabbi",
    "Peshawar",
    "Saidu Sharif",
    "Shorkot",
    "Shewa Adda",
    "Swabi",
    "Swat",
    "Tangi",
    "Tank",
    "Thall",
    "Timergara",
    "Tordher",
    "Awaran",
    "Barkhan",
    "Chagai",
    "Dera Bugti",
    "Gwadar",
    "Harnai",
    "Jafarabad",
    "Jhal Magsi",
    "Kacchi",
    "Kalat",
    "Kech",
    "Kharan",
    "Khuzdar",
    "Killa Abdullah",
    "Killa Saifullah",
    "Kohlu",
    "Lasbela",
    "Lehri",
    "Loralai",
    "Mastung",
    "Musakhel",
    "Nasirabad",
    "Nushki",
    "Panjgur",
    "Pishin valley",
    "Quetta",
    "Sherani",
    "Sibi",
    "Sohbatpur",
    "Washuk",
    "Zhob",
    "Ziarat",
  ];

  const serviceOptions = ["Select Service", "Venue", "Catering"];

  const [formData, setFormData] = useState({
    vendor_id: v_id,
    title: "",
    description: "",
    address: "",
    City: "",
    service_type: "",
    venue_type: "",
    event_type: "",
    seating_capacity: "",
    sitting_arrangement: "",
    lighting_type: "",
    ServingType: "",
    VIP_seats: "",
    Inbond_catering: "",
    outdoor_catering: "",
    projector: "",
    wifi: "",
    ac_heating: "",
    parking: "",
    serving_capacity: "",
    Crockry: "",
    serving_staff: "",
    ground_type: "",
    Price_Per_Person: "",
    imageUrl: [],
    menu: [
      {
        menu_name: "",
        starters: "",
        mainCourses: "",
        grilledItems: "",
        breads: "",
        desserts: "",
        beverages: "",
        menu_price: "",
      },
    ],
  });
  const menuOptions = [
    {
      menu_name: "",
      starters: "",
      mainCourses: "",
      grilledItems: "",
      breads: "",
      desserts: "",
      beverages: "",
      menu_price: "",
    },
  ];
  const [selectedImages, setSelectedImages] = useState([]);
  const [menuItems, setMenuItems] = useState(menuOptions);

  const handleMenuChange = (menuIndex, event) => {
    const { name, value } = event.target;

    setFormData((prevData) => {
      const updatedMenu = [...prevData.menu];
      updatedMenu[menuIndex] = {
        ...updatedMenu[menuIndex],
        [name]: value, // Update the specific category with the new value
      };
      console.log(updatedMenu);
      return { ...prevData, menu: updatedMenu };
    });
    // console.log(name, value, index_array, index_object);
    // const updatedMenu = [...formData.menu];
    // console.log(updatedMenu);
    // updatedMenu[index_object] = { ...updatedMenu[index_object], [name]: value };
    // setFormData({ ...formData, menu: updatedMenu });
    // console.log(updatedMenu);
  };
  const addMenuItem = () => {
    // setMenuItems([...menuItems, menuOptions]);
    // console.log(menuItems);
    setMenuItems([...menuItems, menuOptions]);
    setFormData((prevData) => ({
      ...prevData,
      menu: [
        ...prevData.menu,
        {
          menu_name: "",
          starters: "",
          mainCourses: "",
          grilledItems: "",
          breads: "",
          desserts: "",
          beverages: "",
          menu_price: "",
        },
      ],
    }));
  };

  const removeMenuItem = (index) => {
    setMenuItems(menuItems.filter((_, i) => i !== index));
  };

  // const handleImageChange = (e) => {
  //   const files = Array.from(e.target.files);
  //   setSelectedImages((prevImages) => [...prevImages, ...files]);
  // };

  // Remove an image from the preview
  // const [imageInputs, setImageInputs] = useState([]);

  const handleImageChange = async (e) => {
    const files = Array.from(e.target.files);
    setSelectedImages((prevImages) => [...prevImages, ...files]);
    files.map(async (_, index) => {
      const file = e.target.files[index];
      if (!file) {
        return (
          <>
            <div>No file selected</div>
          </>
        );
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
        console.log(formData);
        //Convert the imageUrl object to an array in VDB_addlistings
        formData.imageUrl.push(imageUrl.url); //uncomment this line
        console.log(formData.imageUrl);
      } catch (error) {
        console.log(error);
      }
    });
  };

  // const handleRemoveImage = (index) => {
  //   setSelectedImages(selectedImages.filter((_, i) => i !== index));
  // };

  const handleUpload = async () => {
    // You may want to compress images here if needed
    const formData = new FormData();
    selectedImages.forEach((image) => {
      formData.append("images", image);
    });

    try {
      const response = await fetch("../assets/", {
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
  // const addTimeSlot = () => {
  //   if (startTime && endTime) {
  //     setTimeSlots([...timeSlots, { start: startTime, end: endTime }]);
  //     setStartTime(""); // Reset inputs after adding
  //     setEndTime("");
  //   }
  // };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
  
    // Update the specific input value
    setFormData({
      ...formData,
      [name]: value,
    });
  
    // Real-time validation
    if ((type === "text" && value.trim() === "") || (type === "number" && value === "")) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "Input cannot be blank.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "", // Clear the error
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    

   
    console.log(formData);
    try {
      await axios.post(`http://localhost:5000/listings`, formData);
      alert("Data submitted successfully!");
    } catch (error) {
      alert("Error submitting data");
    }
  };

  return (
    <div className=" bg-slate-300">
      <div className="w-[90%] sm:w-[60%] md:w-[60%] rounded-xl mt-10 border-[1px] shadow-lg m-auto">
        <div className="w-full mx-auto bg-white p-8 shadow-lg rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Add Listing</h2>
          {/* <p className="text-gray-500 mb-6">The information can be edited</p> */}
          <form>
            <div className="  gap-4 mb-4 ">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  id="first-name"
                  value={formData.title}
                  name="title"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Beautiful Marquee at my home"
                  onChange={handleChange}
                />
                 {errors.name}
              </div>

              <label className="block text-sm font-medium text-gray-700">
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
                required
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
                  <option key={index}>{option}</option>
                ))}
              </select>

              {formData.service_type === "Venue" && (
                <select
                  name="venue_type"
                  value={formData.venue_type}
                  className="border-2 h-10 rounded-xl pl-4 w-[100%] my-[2%]"
                  onChange={handleChange}
                >
                  {venueOptions.map((option, index) => (
                    <option key={index}>{option}</option>
                  ))}
                </select>
              )}

              {formData.service_type === "Venue" && (
                <select
                  className="border-2 h-10 rounded-xl pl-4 w-[100%] my-[2%]"
                  name="ServingType"
                  value={formData.ServingType}
                  onChange={handleChange}
                >
                  {ServingType.map((type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              )}

              <select
                name="City"
                value={formData.City}
                className="border-2 h-10 rounded-xl pl-4 w-[100%]"
                onChange={handleChange}
              >
                {City.map((option, index) => (
                  <option key={index}>{option}</option>
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
              {formData.service_type === "Catering" && (
                <div>
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
                </div>
              )}
              <div className=" gap-4 mb-4">
                {formData.service_type === "Venue" && (
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
                )}
                {formData.venue_type === "sports_arena" && (
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
                )}
              </div>
              <div className=" gap-4 mb-4">
                {formData.service_type === "Venue" && (
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
                )}
                {formData.service_type === "Catering" && (
                  <div>
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
                        return <option key={index}>{e}</option>;
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
                  </div>
                )}
                {formData.venue_type === "Conference Hall" && (
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
                )}
              </div>

              <div className=" gap-4 mb-4">
                {formData.service_type === "Venue" && (
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
                )}
                {formData.venue_type === "Conference Hall" && (
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
                )}
              </div>

              {formData.service_type === "Venue" &&
                formData.venue_type !== "Conference Hall" &&
                formData.venue_type !== "Sports Arena" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Outdoor Catering Allowed
                    </label>
                    <select
                      name="outdoor_catering"
                      value={formData.outdoor_catering}
                      // value={formData.catering}
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
                )}
              {formData.service_type === "Venue" &&
                formData.venue_type !== "Conference Hall" &&
                formData.venue_type !== "Sports Arena" && (
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
                )}
              <div className="">
                <h2>Create Your Menu</h2>
                {menuItems.map((object, index) => (
                  <div key={index} className="menu-item flex flex-wrap">
                    <input
                      type="text"
                      name="menu_name"
                      placeholder="Menu Name"
                      value={formData.menu[index]["menu_name"]}
                      className={menu_styling}
                      onChange={(e) => handleMenuChange(index, e)}
                    />
                    <input
                      type="text"
                      name="starters"
                      placeholder="Starters"
                      value={formData.menu[index]["starters"]}
                      className={menu_styling}
                      onChange={(e) => handleMenuChange(index, e)}
                    />

                    <input
                      type="text"
                      name="mainCourses"
                      placeholder="Main Courses"
                      value={formData.menu[index]["mainCourses"]}
                      className={menu_styling}
                      onChange={(e) => handleMenuChange(index, e)}
                    />

                    <input
                      type="text"
                      name="grilledItems"
                      placeholder="Grilled Items"
                      value={formData.menu[index]["grilledItems"]}
                      className={menu_styling}
                      onChange={(e) => handleMenuChange(index, e)}
                    />

                    <input
                      type="text"
                      name="breads"
                      placeholder="Breads"
                      value={formData.menu[index]["breads"]}
                      className={menu_styling}
                      onChange={(e) => handleMenuChange(index, e)}
                    />

                    <input
                      type="text"
                      name="desserts"
                      placeholder="Desserts"
                      value={formData.menu[index]["desserts"]}
                      className={menu_styling}
                      onChange={(e) => handleMenuChange(index, e)}
                    />
                    <input
                      type="text"
                      name="beverages"
                      placeholder="Beverages"
                      value={formData.menu[index]["beverages"]}
                      className={menu_styling}
                      onChange={(e) => handleMenuChange(index, e)}
                    />
                    <input
                      type="number"
                      name="menu_price"
                      placeholder="Menu Price"
                      value={formData.menu[index]["menu_price"]}
                      className={menu_styling}
                      onChange={(e) => handleMenuChange(index, e)}
                    />
                    <button
                      type="button"
                      onClick={() => removeMenuItem(index)}
                      className=" bg-red-600 p-1 w-[90%] my-2 m-auto rounded-md text-white"
                    >
                      Remove
                    </button>
                  </div>
                ))}

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={addMenuItem}
                    className="bg-green-600 rounded-md p-2 mr-[2%] mt-3 "
                  >
                    Add Menu
                  </button>
                </div>
              </div>
            </div>
            <div className=" gap-4 mb-4">
              <div className="flex flex-col">
                <label>
                  Your {formData.service_type} is suitalbe for following type of
                  events:
                </label>
                <input
                  type="text"
                  placeholder="wedding, birthday party, conferences, etc..."
                  name="event_type"
                  value={formData.event_type}
                  onChange={handleChange}
                />
              </div>

              {formData.service_type === "Venue" && (
                <div className="flex flex-col">
                  <label>
                    Sitting Arrangement you can provide for{" "}
                    {formData.venue_type}:
                  </label>
                  <input
                    type="text"
                    placeholder="u-shaped,round tables, banqueet etc..."
                    name="sitting_arrangement"
                    value={formData.sitting_arrangement}
                    onChange={handleChange}
                  />
                </div>
              )}
            </div>

            {formData.service_type === "Venue" && (
              <div className="flex flex-col gap-4 mb-4">
                <label>Lighting Quality</label>
                <select
                  name="lighting_type"
                  value={formData.lighting_type}
                  id=""
                  onChange={handleChange}
                >
                  {lighting.map((e, index) => {
                    return (
                      <option key={index} value={e}>
                        {e}
                      </option>
                    );
                  })}
                </select>
              </div>
            )}
            <div className="w-[80%]">
              <label>Detailed Description:</label>
              <div>
                <textarea
                  className="w-[90%] border-4"
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="image-upload-container mt-3">
              <p className="mb-3">You can Add 4 pictures</p>
              <label
                htmlFor="file_upload"
                className=" w-fit bg-blue-500 p-2 rounded-lg text-white"
              >
                Add Images
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageChange}
                  id="file_upload"
                  name="imageUrl"
                  className="hidden"
                  // value={formData.imageUrl}
                />
              </label>
              <div className="flex justify-around image-preview mt-3 rounded-md">
                {selectedImages.map((image, index) => (
                  <div
                    key={index}
                    className="image-preview-item border-[1px] border-black"
                  >
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`Preview ${index + 1}`}
                      className="preview-thumbnail h-[150px] w-[150px] "
                    />
                    {/* <button
                      onClick={() => handleRemoveImage(index)}
                      className="py-2 px-5 w-full bg-blue-500 text-white  hover:bg-blue-600 transition duration-200"
                    >
                      Remove
                    </button> */}
                  </div>
                ))}
              </div>
              {/* <button onClick={handleUpload}>Upload Images</button> */}
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

{
  /* {optionArray.map((option, optionIndex) => (
                      <>
                        {optionIndex == 0 ? (
                          <input
                            type="text"
                            name="menu_name"
                            placeholder="Menu Name"
                            value={formData.menu[optionIndex][option]}
                            className={menu_styling}
                            onChange={(e) =>
                              handleMenuChange(index, optionIndex, e)
                            }
                          />
                        ) : (
                          ""
                        )}
                        {optionIndex == 1 ? (
                          <input
                            type="text"
                            name="starters"
                            placeholder="Starters"
                            value={formData.menu[optionIndex][option]}
                            className={menu_styling}
                            onChange={(e) =>
                              handleMenuChange(index, optionIndex, e)
                            }
                          />
                        ) : (
                          ""
                        )}
                        {optionIndex == 2 ? (
                          <input
                            type="text"
                            name="mainCourses"
                            placeholder="Main Courses"
                            value={formData.menu[optionIndex][option]}
                            className={menu_styling}
                            onChange={(e) =>
                              handleMenuChange(index, optionIndex, e)
                            }
                          />
                        ) : (
                          ""
                        )}
                        {optionIndex == 3 ? (
                          <input
                            type="text"
                            name="grilledItems"
                            placeholder="Grilled Items"
                            value={formData.menu[optionIndex][option]}
                            className={menu_styling}
                            onChange={(e) =>
                              handleMenuChange(index, optionIndex, e)
                            }
                          />
                        ) : (
                          ""
                        )}
                        {optionIndex == 4 ? (
                          <input
                            type="text"
                            name="breads"
                            placeholder="Breads"
                            value={formData.menu[optionIndex][option]}
                            className={menu_styling}
                            onChange={(e) =>
                              handleMenuChange(index, optionIndex, e)
                            }
                          />
                        ) : (
                          ""
                        )}

                        {optionIndex == 5 ? (
                          <input
                            type="text"
                            name="desserts"
                            placeholder="Desserts"
                            value={formData.menu[optionIndex][option]}
                            className={menu_styling}
                            onChange={(e) =>
                              handleMenuChange(index, optionIndex, e)
                            }
                          />
                        ) : (
                          ""
                        )}
                        {optionIndex == 6 ? (
                          <input
                            type="text"
                            name="beverages"
                            placeholder="Beverages"
                            value={formData.menu[optionIndex][option]}
                            className={menu_styling}
                            onChange={(e) =>
                              handleMenuChange(index, optionIndex, e)
                            }
                          />
                        ) : (
                          ""
                        )}

                        {optionIndex == 7 ? (
                          <input
                            type="number"
                            name="menu_price"
                            placeholder="Menu Price"
                            value={formData.menu[optionIndex][option]}
                            className={menu_styling}
                            onChange={(e) =>
                              handleMenuChange(index, optionIndex, e)
                            }
                          />
                        ) : (
                          ""
                        )}
                      </>
                    )
                    )
                    } */
}

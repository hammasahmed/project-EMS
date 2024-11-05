// import React from 'react';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// const Search = () => {
//   const [selectedService, setSelectedService] = useState("");
  
//   const handleServiceChange = (event) => {
//     setSelectedService(event.target.value);
//   };
//   return (
//     <div className="absolute bottom-[20vh] left-0 w-full p-4 flex justify-center items-center flex-col  sm:flex-row  gap-5  ">
      
//       <select
//         className="bg-white p-2 rounded w-[70vw] sm:w-[15vw]"
//         onChange={handleServiceChange}
//         value={selectedService}
//       >
//         <option value="">Select Service</option>
//         <option value="venue">Venue</option>
//         <option value="catering">Catering</option>
//       </select>

//       {selectedService === "venue" && (
//         <select className="bg-white p-2 rounded w-[70vw] sm:w-[15vw] ">
//           <option value="beach">Any</option>
//           <option value="beach">Sports Arena</option>
//           <option value="hall">Banquet Hall</option>
//           <option value="garden">Marquee</option>
//           <option value="beach">Conference Halls</option>
//           <option value="beach">Hotels</option>
//         </select>
//       )}

//       {selectedService === "catering" && (
//         <select className="bg-white p-2 rounded w-[70vw] sm:w-[15vw]">
//           <option value="plated">Any</option>
//           <option value="buffet">Buffet</option>
//           <option value="plated">Plated</option>
//           <option value="familyStyle">Family Style</option>
//           <option value="plated">Packed</option>
          
//         </select>
//       )}
//       {/* <select className="bg-white p-2 rounded w-[70vw] sm:w-[15vw]">
//         <option value="option1">Select Service</option>
//         <option value="option2">Venue</option>
//         <option value="option3">Catering</option>
//       </select> */}
//       <select className="bg-white p-2 rounded w-[70vw] sm:w-[15vw]">
//       <option value="" disabled selected>Select The City</option>
//     <option value="Islamabad">Islamabad</option>
//     <option value="" disabled>Punjab Cities</option>
//     <option value="Ahmed Nager Chatha">Ahmed Nager Chatha</option>
//     <option value="Ahmadpur East">Ahmadpur East</option>
//     <option value="Ali Khan Abad">Ali Khan Abad</option>
//     <option value="Alipur">Alipur</option>
//     <option value="Arifwala">Arifwala</option>
//     <option value="Attock">Attock</option>
//     <option value="Bhera">Bhera</option>
//     <option value="Bhalwal">Bhalwal</option>
//     <option value="Bahawalnagar">Bahawalnagar</option>
//     <option value="Bahawalpur">Bahawalpur</option>
//     <option value="Bhakkar">Bhakkar</option>
//     <option value="Burewala">Burewala</option>
//     <option value="Chillianwala">Chillianwala</option>
//     <option value="Chakwal">Chakwal</option>
//     <option value="Chichawatni">Chichawatni</option>
//     <option value="Chiniot">Chiniot</option>
//     <option value="Chishtian">Chishtian</option>
//     <option value="Daska">Daska</option>
//     <option value="Darya Khan">Darya Khan</option>
//     <option value="Dera Ghazi Khan">Dera Ghazi Khan</option>
//     <option value="Dhaular">Dhaular</option>
//     <option value="Dina">Dina</option>
//     <option value="Dinga">Dinga</option>
//     <option value="Dipalpur">Dipalpur</option>
//     <option value="Faisalabad">Faisalabad</option>
//     <option value="Ferozewala">Ferozewala</option>
//     <option value="Fateh Jhang">Fateh Jang</option>
//     <option value="Ghakhar Mandi">Ghakhar Mandi</option>
//     <option value="Gojra">Gojra</option>
//     <option value="Gujranwala">Gujranwala</option>
//     <option value="Gujrat">Gujrat</option>
//     <option value="Gujar Khan">Gujar Khan</option>
//     <option value="Hafizabad">Hafizabad</option>
//     <option value="Haroonabad">Haroonabad</option>
//     <option value="Hasilpur">Hasilpur</option>
//     <option value="Haveli Lakha">Haveli Lakha</option>
//     <option value="Jatoi">Jatoi</option>
//     <option value="Jalalpur">Jalalpur</option>
//     <option value="Jattan">Jattan</option>
//     <option value="Jampur">Jampur</option>
//     <option value="Jaranwala">Jaranwala</option>
//     <option value="Jhang">Jhang</option>
//     <option value="Jhelum">Jhelum</option>
//     <option value="Kalabagh">Kalabagh</option>
//     <option value="Karor Lal Esan">Karor Lal Esan</option>
//     <option value="Kasur">Kasur</option>
//     <option value="Kamalia">Kamalia</option>
//     <option value="Kamoke">Kamoke</option>
//     <option value="Khanewal">Khanewal</option>
//     <option value="Khanpur">Khanpur</option>
//     <option value="Kharian">Kharian</option>
//     <option value="Khushab">Khushab</option>
//     <option value="Kot Addu">Kot Addu</option>
//     <option value="Jauharabad">Jauharabad</option>
//     <option value="Lahore">Lahore</option>
//     <option value="Lalamusa">Lalamusa</option>
//     <option value="Layyah">Layyah</option>
//     <option value="Liaquat Pur">Liaquat Pur</option>
//     <option value="Lodhran">Lodhran</option>
//     <option value="Malakwal">Malakwal</option>
//     <option value="Mamoori">Mamoori</option>
//     <option value="Mailsi">Mailsi</option>
//     <option value="Mandi Bahauddin">Mandi Bahauddin</option>
//     <option value="Mian Channu">Mian Channu</option>
//     <option value="Mianwali">Mianwali</option>
//     <option value="Multan">Multan</option>
//     <option value="Murree">Murree</option>
//     <option value="Muridke">Muridke</option>
//     <option value="Mianwali Bangla">Mianwali Bangla</option>
//     <option value="Muzaffargarh">Muzaffargarh</option>
//     <option value="Narowal">Narowal</option>
//     <option value="Nankana Sahib">Nankana Sahib</option>
//     <option value="Okara">Okara</option>
//     <option value="Renala Khurd">Renala Khurd</option>
//     <option value="Pakpattan">Pakpattan</option>
//     <option value="Pattoki">Pattoki</option>
//     <option value="Pir Mahal">Pir Mahal</option>
//     <option value="Qaimpur">Qaimpur</option>
//     <option value="Qila Didar Singh">Qila Didar Singh</option>
//     <option value="Rabwah">Rabwah</option>
//     <option value="Raiwind">Raiwind</option>
//     <option value="Rajanpur">Rajanpur</option>
//     <option value="Rahim Yar Khan">Rahim Yar Khan</option>
//     <option value="Rawalpindi">Rawalpindi</option>
//     <option value="Sadiqabad">Sadiqabad</option>
//     <option value="Safdarabad">Safdarabad</option>
//     <option value="Sahiwal">Sahiwal</option>
//     <option value="Sangla Hill">Sangla Hill</option>
//     <option value="Sarai Alamgir">Sarai Alamgir</option>
//     <option value="Sargodha">Sargodha</option>
//     <option value="Shakargarh">Shakargarh</option>
//     <option value="Sheikhupura">Sheikhupura</option>
//     <option value="Sialkot">Sialkot</option>
//     <option value="Sohawa">Sohawa</option>
//     <option value="Soianwala">Soianwala</option>
//     <option value="Siranwali">Siranwali</option>
//     <option value="Talagang">Talagang</option>
//     <option value="Taxila">Taxila</option>
//     <option value="Toba Tek Singh">Toba Tek Singh</option>
//     <option value="Vehari">Vehari</option>
//     <option value="Wah Cantonment">Wah Cantonment</option>
//     <option value="Wazirabad">Wazirabad</option>
//     <option value="" disabled>Sindh Cities</option>
//     <option value="Badin">Badin</option>
//     <option value="Bhirkan">Bhirkan</option>
//     <option value="Rajo Khanani">Rajo Khanani</option>
//     <option value="Chak">Chak</option>
//     <option value="Dadu">Dadu</option>
//     <option value="Digri">Digri</option>
//     <option value="Diplo">Diplo</option>
//     <option value="Dokri">Dokri</option>
//     <option value="Ghotki">Ghotki</option>
//     <option value="Haala">Haala</option>
//     <option value="Hyderabad">Hyderabad</option>
//     <option value="Islamkot">Islamkot</option>
//     <option value="Jacobabad">Jacobabad</option>
//     <option value="Jamshoro">Jamshoro</option>
//     <option value="Jungshahi">Jungshahi</option>
//     <option value="Kandhkot">Kandhkot</option>
//     <option value="Kandiaro">Kandiaro</option>
//     <option value="Karachi">Karachi</option>
//     <option value="Kashmore">Kashmore</option>
//     <option value="Keti Bandar">Keti Bandar</option>
//     <option value="Khairpur">Khairpur</option>
//     <option value="Kotri">Kotri</option>
//     <option value="Larkana">Larkana</option>
//     <option value="Matiari">Matiari</option>
//     <option value="Mehar">Mehar</option>
//     <option value="Mirpur Khas">Mirpur Khas</option>
//     <option value="Mithani">Mithani</option>
//     <option value="Mithi">Mithi</option>
//     <option value="Mehrabpur">Mehrabpur</option>
//     <option value="Moro">Moro</option>
//     <option value="Nagarparkar">Nagarparkar</option>
//     <option value="Naudero">Naudero</option>
//     <option value="Naushahro Feroze">Naushahro Feroze</option>
//     <option value="Naushara">Naushara</option>
//     <option value="Nawabshah">Nawabshah</option>
//     <option value="Nazimabad">Nazimabad</option>
//     <option value="Qambar">Qambar</option>
//     <option value="Qasimabad">Qasimabad</option>
//     <option value="Ranipur">Ranipur</option>
//     <option value="Ratodero">Ratodero</option>
//     <option value="Rohri">Rohri</option>
//     <option value="Sakrand">Sakrand</option>
//     <option value="Sanghar">Sanghar</option>
//     <option value="Shahbandar">Shahbandar</option>
//     <option value="Shahdadkot">Shahdadkot</option>
//     <option value="Shahdadpur">Shahdadpur</option>
//     <option value="Shahpur Chakar">Shahpur Chakar</option>
//     <option value="Shikarpaur">Shikarpaur</option>
//     <option value="Sukkur">Sukkur</option>
//     <option value="Tangwani">Tangwani</option>
//     <option value="Tando Adam Khan">Tando Adam Khan</option>
//     <option value="Tando Allahyar">Tando Allahyar</option>
//     <option value="Tando Muhammad Khan">Tando Muhammad Khan</option>
//     <option value="Thatta">Thatta</option>
//     <option value="Umerkot">Umerkot</option>
//     <option value="Warah">Warah</option>
//     <option value="" disabled>Khyber Cities</option>
//     <option value="Abbottabad">Abbottabad</option>
//     <option value="Adezai">Adezai</option>
//     <option value="Alpuri">Alpuri</option>
//     <option value="Akora Khattak">Akora Khattak</option>
//     <option value="Ayubia">Ayubia</option>
//     <option value="Banda Daud Shah">Banda Daud Shah</option>
//     <option value="Bannu">Bannu</option>
//     <option value="Batkhela">Batkhela</option>
//     <option value="Battagram">Battagram</option>
//     <option value="Birote">Birote</option>
//     <option value="Chakdara">Chakdara</option>
//     <option value="Charsadda">Charsadda</option>
//     <option value="Chitral">Chitral</option>
//     <option value="Daggar">Daggar</option>
//     <option value="Dargai">Dargai</option>
//     <option value="Darya Khan">Darya Khan</option>
//     <option value="Dera Ismail Khan">Dera Ismail Khan</option>
//     <option value="Doaba">Doaba</option>
//     <option value="Dir">Dir</option>
//     <option value="Drosh">Drosh</option>
//     <option value="Hangu">Hangu</option>
//     <option value="Haripur">Haripur</option>
//     <option value="Karak">Karak</option>
//     <option value="Kohat">Kohat</option>
//     <option value="Kulachi">Kulachi</option>
//     <option value="Lakki Marwat">Lakki Marwat</option>
//     <option value="Latamber">Latamber</option>
//     <option value="Madyan">Madyan</option>
//     <option value="Mansehra">Mansehra</option>
//     <option value="Mardan">Mardan</option>
//     <option value="Mastuj">Mastuj</option>
//     <option value="Mingora">Mingora</option>
//     <option value="Nowshera">Nowshera</option>
//     <option value="Paharpur">Paharpur</option>
//     <option value="Pabbi">Pabbi</option>
//     <option value="Peshawar">Peshawar</option>
//     <option value="Saidu Sharif">Saidu Sharif</option>
//     <option value="Shorkot">Shorkot</option>
//     <option value="Shewa Adda">Shewa Adda</option>
//     <option value="Swabi">Swabi</option>
//     <option value="Swat">Swat</option>
//     <option value="Tangi">Tangi</option>
//     <option value="Tank">Tank</option>
//     <option value="Thall">Thall</option>
//     <option value="Timergara">Timergara</option>
//     <option value="Tordher">Tordher</option>
//     <option value="" disabled>Balochistan Cities</option>
//     <option value="Awaran">Awaran</option>
//     <option value="Barkhan">Barkhan</option>
//     <option value="Chagai">Chagai</option>
//     <option value="Dera Bugti">Dera Bugti</option>
//     <option value="Gwadar">Gwadar</option>
//     <option value="Harnai">Harnai</option>
//     <option value="Jafarabad">Jafarabad</option>
//     <option value="Jhal Magsi">Jhal Magsi</option>
//     <option value="Kacchi">Kacchi</option>
//     <option value="Kalat">Kalat</option>
//     <option value="Kech">Kech</option>
//     <option value="Kharan">Kharan</option>
//     <option value="Khuzdar">Khuzdar</option>
//     <option value="Killa Abdullah">Killa Abdullah</option>
//     <option value="Killa Saifullah">Killa Saifullah</option>
//     <option value="Kohlu">Kohlu</option>
//     <option value="Lasbela">Lasbela</option>
//     <option value="Lehri">Lehri</option>
//     <option value="Loralai">Loralai</option>
//     <option value="Mastung">Mastung</option>
//     <option value="Musakhel">Musakhel</option>
//     <option value="Nasirabad">Nasirabad</option>
//     <option value="Nushki">Nushki</option>
//     <option value="Panjgur">Panjgur</option>
//     <option value="Pishin Valley">Pishin Valley</option>
//     <option value="Quetta">Quetta</option>
//     <option value="Sherani">Sherani</option>
//     <option value="Sibi">Sibi</option>
//     <option value="Sohbatpur">Sohbatpur</option>
//     <option value="Washuk">Washuk</option>
//     <option value="Zhob">Zhob</option>
//     <option value="Ziarat">Ziarat</option>
//       </select>
//       <button className='bg-white px-5 rounded-lg hover:bg-purple-950 hover:text-white w-28 h-10 hover:rounded-full'> <Link to="/listings">Search</Link></button>
//     </div>
//   );
// }

// export default Search;


// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';

// // const HomePage = () => {
// //     const [selectedService, setSelectedService] = useState('');
// //     const [selectedVenueType, setSelectedVenueType] = useState('');
// //     const [selectedCateringType, setSelectedCateringType] = useState('');
// //     const [selectedCity, setSelectedCity] = useState('');
// //     const navigate = useNavigate();

// //     const handleSearch = () => {
// //         const params = new URLSearchParams();

// //         if (selectedService) params.append('service', selectedService);
// //         if (selectedService === 'venue' && selectedVenueType) params.append('venueType', selectedVenueType);
// //         if (selectedService === 'catering' && selectedCateringType) params.append('cateringType', selectedCateringType);
// //         if (selectedCity) params.append('city', selectedCity);

// //         navigate(`/listings?${params.toString()}`);
// //     };

// //     return (
// //         <div>
// //             {/* Your existing filter dropdowns */}
// //             <select
// //                 className="bg-white p-2 rounded w-[70vw] sm:w-[15vw]"
// //                 onChange={(e) => setSelectedService(e.target.value)}
// //                 value={selectedService}
// //             >
// //                 <option value="">Select Service</option>
// //                 <option value="venue">Venue</option>
// //                 <option value="catering">Catering</option>
// //             </select>

// //             {selectedService === "venue" && (
// //                 <select
// //                     className="bg-white p-2 rounded w-[70vw] sm:w-[15vw]"
// //                     onChange={(e) => setSelectedVenueType(e.target.value)}
// //                     value={selectedVenueType}
// //                 >
// //                     <option value="">Any</option>
// //                     <option value="sportsArena">Sports Arena</option>
// //                     <option value="banquetHall">Banquet Hall</option>
// //                     <option value="marquee">Marquee</option>
// //                     <option value="conferenceHalls">Conference Halls</option>
// //                     <option value="hotels">Hotels</option>
// //                 </select>
// //             )}

// //             {selectedService === "catering" && (
// //                 <select
// //                     className="bg-white p-2 rounded w-[70vw] sm:w-[15vw]"
// //                     onChange={(e) => setSelectedCateringType(e.target.value)}
// //                     value={selectedCateringType}
// //                 >
// //                     <option value="">Any</option>
// //                     <option value="buffet">Buffet</option>
// //                     <option value="plated">Plated</option>
// //                     <option value="familyStyle">Family Style</option>
// //                     <option value="packed">Packed</option>
// //                 </select>
// //             )}

// //             <select
// //                 className="bg-white p-2 rounded w-[70vw] sm:w-[15vw]"
// //                 onChange={(e) => setSelectedCity(e.target.value)}
// //                 value={selectedCity}
// //             >
// //                 <option value="" disabled selected>Select The City</option>
// //                 <option value="Islamabad">Islamabad</option>
// //                 <option value="" disabled>Punjab Cities</option>
// //                 <option value="Ahmed Nager Chatha">Ahmed Nager Chatha</option>
// //                 <option value="Ahmadpur East">Ahmadpur East</option>
// //                 <option value="Ali Khan Abad">Ali Khan Abad</option>
// //                 <option value="Alipur">Alipur</option>
// //                 <option value="Arifwala">Arifwala</option>
// //                 <option value="Attock">Attock</option>
// //                 <option value="Bhera">Bhera</option>
// //                 <option value="Bhalwal">Bhalwal</option>
// //             </select>

// //             <button
// //                 className="bg-white px-5 rounded-lg hover:bg-slate-800 hover:text-white w-28 h-10"
// //                 onClick={handleSearch}
// //             >
// //                 Search
// //             </button>
// //         </div>
// //     );
// // };

// // export default HomePage;

import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import listings from "../../public/listings.json";

function BookingForm(prop) {
  const booleanOptions = ["Yes", "No"];
  const options = ["Slot 1", "Slot 2", "Slot 3", "Slot 4", "Slot 5", "Slot 6"];
  const lighting = ["High", "Medium", "Low"];
  const events = [
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
    "Football",
    "Badminton",
    "Tennis",
    "Cricket",
    "Volleyball",
    "Basketball",
  ];
  const sitting_types = [
    "Chevron",
    "Auditorium",
    "Banquet",
    "Boardroom",
    "Cabaret",
    "Classroom",
    "Hollow square",
    "U-shaped"
  ]
  // const [name, setName] = useState("");
  // const [selectedoption, setSelectedOption] = useState("");
  // const [event_type, setEventType] = useState("");
  // const [date, setDate] = useState("");
  // const [parking, setParking] = useState("");
  // const [ground_type, setGroundType] = useState("");
  // const [sitting_arrangement,setSittingArrangement] = useState("");
  // const [lighting_type, setLightingType] = useState("");
  // const [VIP_seats,setVIPSeats] = useState("");
  // const [projector, setProjector] = useState("");
  // const [wifi,setWiFi] = useState("");
  // const [ac_heating,setAcHeating] = useState("");
  // const [catering, setCatering] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    selectedoption: "",
    event_type: "",
    date: "",
    parking: "",
    ground_type: "",
    sitting_arrangement: "",
    lighting_type: "",
    VIP_seats: "",
    projector: "",
    wifi: "",
    ac_heating: "",
    catering: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event)=>{
    console.log(FormData)
  }

  return (
    <div
      className=" border-2 border-black align-center h-[140vh] "
      style={{
        backgroundImage: "url('https://picsum.photos/seed/1/640/360')",
        backgroundSize: "cover",
      }}
    >
      {/* <h1 className="text-2xl font-bold">Booking Form</h1>
      <div className=" flex flex-col border-2 border-green-700 w-[80%] h-[50vh]  px-[4%] rounded align-center shadow-lg">
        <div className="my-4">
          <label><b>Name:</b></label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-[1px]"
          />
        </div>
        <div className="my-4">
          <label><b>Select the Date:</b></label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border-[1px]"
          />
        </div>
        <div>
          <label><b>Select the Time:</b> </label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="border-[1px]"
          />

        </div>
        <div>

        </div>
      </div> */}
      <div className="w-[90%] sm:w-[60%] md:w-[50%] rounded-xl mt-10 border-[1px] shadow-lg m-auto">
        <div className="w-full mx-auto bg-white p-8 shadow-lg rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Booking Form</h2>
          {/* <p className="text-gray-500 mb-6">The information can be edited</p> */}
          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700" >
                  Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  // value={formData.name}
                  name={formData.name}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Sofia"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Select Date
                </label>
                {/* <input
                      type="text"
                      id="last-name"
                      name="last-name"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                      placeholder="Rivers"
                    /> */}
                <input
                  type="date"
                  // value={formData.date}
                  name="date"
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Event Time
                </label>
                {/* <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="sofia@devias.io"
                /> */}
                <select
                  id="time"
                  name="time"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                  onChange={handleChange}
                  required
                >
                  {options.map((o, index) => {
                    return (
                      <option key={index} value={o}>
                        {o}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone number
                </label>
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                  onChange={handleChange}
                  placeholder="Phone number"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Type of Event
                </label>
                <select
                  id="event_type"
                  name="event_type"
                  // value={formData.event_type}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                  required
                  onChange={handleChange}
                >
                  {events.map((e, index) => {
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
                  No.of Persons
                </label>
                <input
                  type="text"
                  id="Persons"
                  name="guest"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                  onChange={handleChange}
                  placeholder="No. of persons"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Parking Capacity
                </label>
                <input
                  id="Parking"
                  name={formData.parking}
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
                  name="ground_type"
                  // value={formData.ground_type}
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Sitting Arrangement
                </label>
                <select
                  id="sitting"
                  name="sitting_arrangement"
                  // value={formData.sitting_arrangement}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                  onChange={handleChange}
                
                >
                  {sitting_types.map((e, index) => {
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
                  Lighting Quality
                </label>
                <select
                  id="lighting"
                  name="lighting_type"
                  // value={formData.lighting_type}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
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
              
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">
                  No.of VIP Persons
                </label>
                <input
                  id="VIPS"
                  name="VIP_seats"
                  // value={formData.VIP_seats}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                  onChange={handleChange}
                  type="number"
                ></input>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Projector
                </label>
                <select
                  id="projector"
                  name="projector"
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">
                  AC / Heating
                </label>
                <select
                  id="ac_heating"
                  name="ac_heating"
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
                  id="Wifi"
                  name="Wifi"
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Catering Service
                </label>
                <select
                  id="catering"
                  name="catering"
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

export default BookingForm;
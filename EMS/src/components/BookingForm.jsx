import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import listings from "../../public/listings.json";
import axios from "axios";

function BookingForm() {
  const location = useLocation();
  const data = location.state;
  console.log(data);

  const role = localStorage.getItem('role');

  const booleanOptions = ["Select Option", "Yes", "No"];
  const options = [
    "Select Option",
    "Slot 1",
    "Slot 2",
    "Slot 3",
    "Slot 4",
    "Slot 5",
    "Slot 6",
  ];
  const lighting = ["Select Option", "High", "Medium", "Low"];
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
    "U-shaped",
  ];
  const services = ["Select Option", "Self Service", "Platter"];
  const [formData, setFormData] = useState({
    listings_id: data.id,
    name: "",
    start_time: "",
    end_time: "",
    event_type: "",
    persons: "",
    date: "",
    phone: "",
    parking: "",
    ground_type: "",
    sitting_arrangement: "",
    lighting_type: "",
    VIP_seats: "",
    projector: "",
    wifi: "",
    ac_heating: "",
    catering: "",
    table_services: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const businessLogic = () => {};

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      axios.post("http://localhost:5000/api/bookings", formData) .then((response) => {
        console.log(response.data); // Handle response data
      })
      .catch((error) => console.error('Error:', error));;
    } catch (error) {
      alert("Error submitting data", error);
    }
    // console.log("Submitted data", formData);
  };

  return (
    <div
      className=" border-2 border-black align-center h-[140vh] "
      style={{
        backgroundImage: "url('https://picsum.photos/seed/1/640/360')",
        backgroundSize: "cover",
      }}
    >
      <div className="w-[90%] sm:w-[60%] md:w-[50%] rounded-xl mt-10 border-[1px] shadow-lg m-auto">
        <div className="w-full mx-auto bg-white p-8 shadow-lg rounded-xl">
          {/* <div>{state.imgaeUrl}</div> */}
          <h2 className="text-xl font-semibold mb-4">Booking Form</h2>
          {/* <p className="text-gray-500 mb-6">The information can be edited</p> */}
          <form onSubmit={handleSubmit} method="POST">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  form="Name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  value={formData.name}
                  name="name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Sofia"
                  onChange={handleChange}
                  // required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  form="Date"
                >
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
                  value={formData.date}
                  name="date"
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                  // required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {/* Event Time */}
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  form="time"
                >
                  Event Start Time
                </label>
                <input
                  type="time"
                  onChange={handleChange}
                  name="start_time"
                  value={formData.start_time}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  form="time"
                >
                  Event End Time
                </label>
                <input
                  type="time"
                  onChange={handleChange}
                  name="end_time"
                  value={formData.end_time}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>

              {/* Phone number */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone number
                </label>
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                  onChange={handleChange}
                  placeholder="Phone number"
                  // required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Type of Event
                </label>
                <select
                  id="event_type"
                  name="event_type"
                  value={formData.event_type}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                  // required
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
            </div>

            {/* Type of Event */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {/* No of Persons */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  No.of Persons
                </label>
                <input
                  type="number"
                  id="Persons"
                  name="persons"
                  value={formData.persons}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                  onChange={handleChange}
                  placeholder="No. of persons"
                  // required
                />
              </div>
            </div>

            {/* Parking Capacity */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {data?.venueType == "Venue" ? (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Parking Capacity
                    </label>
                    <input
                      id="Parking"
                      name="parking"
                      value={formData.parking}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                      onChange={handleChange}
                      type="number"
                    ></input>
                  </div>

                  {/* Catering Services */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Catering Service
                    </label>
                    <select
                      id="catering"
                      name="catering"
                      value={formData.catering}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                      // required
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
                </>
              ) : (
                ""
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {data?.serviceType == "Venue" &&
              data?.venueType == "Sports Arena" ? (
                <>
                  {/* Ground Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Ground Type
                    </label>
                    <select
                      id="ground"
                      name="ground_type"
                      value={formData.ground_type}
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
                  {/* lighting  */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Lighting Quality
                    </label>
                    <select
                      id="lighting"
                      name="lighting_type"
                      value={formData.lighting_type}
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
                  {/* VIP Seats */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      No.of VIP Persons
                    </label>
                    <input
                      id="VIPS"
                      name="VIP_seats"
                      value={formData.VIP_seats}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                      onChange={handleChange}
                      type="number"
                    ></input>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {data?.serviceType == "Venue" &&
              (data?.venueType == "Banquet Hall" ||
                data?.venueType == "Marquee") ? (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Sitting Arrangement
                    </label>
                    <select
                      id="sitting"
                      name="sitting_arrangement"
                      value={formData.sitting_arrangement}
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
                      Table Service
                    </label>
                    <select
                      id="table_services"
                      name="table_services"
                      value={formData.table_services}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                      onChange={handleChange}
                    >
                      {services.map((e, index) => {
                        return (
                          <option key={index} value={e}>
                            {e}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {data?.serviceType == "venue" &&
              data?.venueType == "Conference Hall" ? (
                <>
                  {/* projector */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Projector
                    </label>
                    <select
                      id="projector"
                      name="projector"
                      value={formData.projector}
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

                  {/* Wifi */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Wifi
                    </label>
                    <select
                      id="Wifi"
                      name="wifi"
                      value={formData.wifi}
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
                </>
              ) : (
                ""
              )}

              {/* AC/ heating */}
              {data?.serviceType == "venue" &&
              (data?.venueType == "Banquet Hall" ||
                data?.venueType == "Marquee" ||
                data?.venueType == "Conference Hall") ? (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      AC / Heating
                    </label>
                    <select
                      id="ac_heating"
                      name={"ac_heating"}
                      value={formData.ac_heating}
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
                </>
              ) : (
                ""
              )}
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

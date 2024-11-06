import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Slider_for_Detail from "./Slider_for_Detail";
// import BookingForm from "./BookingForm";

const Details = () => {
  const { id } = useParams(); // Get the ID from the URL
  const [listing, setListing] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchListing = async () => {
      //
      try {
        const response = await fetch("/listings.json");

        // const response = await fetch('http://localhost:3000/listings');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data);
        const foundListing = data.find((item) => item._id.toString() === id);
        console.log("Found listing:", foundListing);
        setListing(foundListing);
      } catch (error) {
        console.error("Error fetching listing details:", error);
      }
    };

    fetchListing();
  }, [id]);

  if (!listing) {
    return (
      <div className="text-4xl text-green-500 text-center align-center">
        Loading...
      </div>
    );
  }
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/BookingForm", { state: listing });
  };

  return (
    // < >
    // <div className=" flex flex-col md:flex-row lg:flex-row xl:flex-row sm:w-full bg-gray-200">
    //   <div className=" w-[65%] px-[3%] border-2 border-black">
    //     <h1 className="text-4xl font-bold font-sans pt-5 pb-5 mt-5">
    //       {listing.title}
    //     </h1>
    //     <div className="w-[100%] shadow-lg rounded-lg">
    //       {/* <img
    //         src={listing.imageUrl}
    //         alt={listing.title}
    //         className="w-[100%] h-[100%] rounded-lg shadow-2xl"
    //       /> */}
    //       <Slider_for_Detail passid = {listing.pictures}/>
    //     </div>
    //   </div>
    //   <div className="w-[35%] p-[4%] border-2 border-black">
    //     <div className=" flex flex-col justify-around rounded-lg p-5 mt-10 shadow-xl h-[300px] ">
    //       <div className="text-2xl font-bold">
    //         Price: Starting From ${listing.price}
    //       </div>
    //       <div className="text-lg">
    //         <b>Capacity:</b> 250 Admi
    //       </div>
    //       <div className="text-lg ">
    //         <b>Location:</b> Shumali Koria
    //       </div>
    //       <div className="text-lg ">
    //         <b>Address:</b>St# 01, Road# 01, Shumali Korea
    //       </div>
    //       <div className="text-center">
    //         <button className="rounded-3xl font-bold text-white text-xl py-2 px-4 bg-[#06c911]">
    //           Check for Availaibility{" "}
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <div>
    //   <div>
    //     {/* // About Section */}
    // <div className=" rounded-lg bg-white shadow-sm h-[40%] mx-[4%] mt-10 ">
    //       <h2 className="text-2xl my-4 pl-3 ">About {listing.serviceType}</h2>
    //       <hr />
    //       <div className="m-4 text-justify p-2">
    //         <p>
    //           Umaid Palace- An Organic Retreat is a wedding venue located in the
    //           vibrant city of Jaipur and is a royal and spacious location,
    //           perfect for weddings and various other events. It is a popular
    //           choice for many couples for their destination weddings and helps
    //           bring their dream wedding visions to life through its gorgeous
    //           architecture and best-in-class service.{" "}
    //         </p>
    //         <br />
    //         <h3>
    //           <strong>
    //             Space Available In Umaid Palace- An Organic Retreat
    //           </strong>
    //         </h3>
    //         <p>
    //           The venue has 2 lawns, a terrace area, a poolside, and banquet
    //           halls where you can hold your wedding functions.{" "}
    //         </p>
    //         <br />
    //         <h3>
    //           <strong>Capacity Of Umaid Palace- An Organic Retreat</strong>
    //         </h3>
    //         <p>
    //           The venue has outdoor as well as indoor spaces and has a capacity
    //           of 1500, 1500, 80, 120, 250, 80, and 80 people respectively,
    //           including the lawns, terrace, poolside, and banquets.{" "}
    //         </p>
    //         <br />
    //         <h3>
    //           <strong>
    //             Cuisines Offered In Umaid Palace- An Organic Retreat
    //           </strong>
    //         </h3>
    //         <p>
    //           The venue offers in-house catering and also allows its clients to
    //           get an outside caterer depending on their needs. So you can decide
    //           on a caterer of your choice and also select the menu and the
    //           cuisines to be served as per your taste and food preferences.{" "}
    //         </p>
    //         <br />
    //         <h3>
    //           <strong>
    //             Facilities Provided In Umaid Palace- An Organic Retreat
    //           </strong>
    //         </h3>
    //         <p>
    //           They take care of the various aspects of organizing the perfect
    //           wedding and provide a variety of facilities to their clients to
    //           give them and their guests a seamless and memorable wedding
    //           experience. Here are a few of the services that they provide:
    //         </p>
    //         <ul>
    //           <li>In-house and Outside catering</li>
    //           <li>Outside decorators permitted</li>
    //           <li>In-house DJ not available/ Outside DJ permitted</li>
    //           <li>Parking available</li>
    //         </ul>
    //         <br />
    //         <h3>
    //           <strong>Location Of Umaid Palace- An Organic Retreat</strong>
    //         </h3>
    //         <p>The venue is situated in Jaipur, Dausa. </p>
    //         <br />
    //         <h3>
    //           <strong>
    //             Umaid Palace- An Organic Retreat Wedding Venue Cost
    //           </strong>
    //         </h3>
    //         <p>
    //           You can contact them directly to learn about any information about
    //           their packages. The price per plate is also listed above.{" "}
    //         </p>
    //         <br />
    //         <h3>
    //           <strong>Photos Of Umaid Palace- An Organic Retreat</strong>
    //         </h3>
    //         <p>
    //           You can check out the photos on their profile to get a better
    //           understanding of the place, its infrastructure, and overall
    //           aesthetics.{" "}
    //         </p>
    //       </div>
    //     </div>
    //     </div>

    //     {/* // Details Section */}
    //     <div className="p-6 bg-white shadow-md rounded-md mx-[4%] mt-5">
    //       <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
    //         <div>
    //           <h3 className="font-semibold text-gray-700">
    //             Been on <span className="text-blue-500">Evento</span> Since
    //           </h3>
    //           <p className="text-black">6 years 1 month</p>
    //         </div>

    //         <div>
    //           <h3 className="font-semibold text-gray-700">Room Count</h3>
    //           <p className="text-black">73 Rooms</p>
    //         </div>

    //         <div>
    //           <h3 className="font-semibold text-gray-700">Space</h3>
    //           <p className="text-black">
    //             Indoor, Outdoor, Poolside, Terrace / Rooftop
    //           </p>
    //         </div>

    //         <div>
    //           <h3 className="font-semibold text-gray-700">Room Price</h3>
    //           <p className="text-black">₹ 9,500 per room</p>
    //         </div>

    //         <div>
    //           <h3 className="font-semibold text-gray-700">Start of Venue</h3>
    //           <p className="text-black">2001</p>
    //         </div>

    //         <div>
    //           <h3 className="font-semibold text-gray-700">Parking</h3>
    //           <p className="text-black">
    //             There is sufficient parking available
    //           </p>
    //         </div>

    //         <div>
    //           <h3 className="font-semibold text-gray-700">Catering Policy</h3>
    //           <p className="text-black">
    //             Inhouse & outside catering allowed
    //           </p>
    //         </div>

    //         <div>
    //           <h3 className="font-semibold text-gray-700">Small Party Venue</h3>
    //           <p className="text-black">Less than 50 Pax allowed</p>
    //         </div>

    //         <div>
    //           <h3 className="font-semibold text-gray-700">Decor Policy</h3>
    //           <p className="text-black">Outside decorators permitted</p>
    //         </div>

    //         <div>
    //           <h3 className="font-semibold text-gray-700">Features</h3>
    //           <p className="text-black">
    //             Small Function Venue, Outside Caterer
    //             Allowed, Outside Decorator Allowed
    //           </p>
    //         </div>

    //         <div>
    //           <h3 className="font-semibold text-gray-700">DJ Policy</h3>
    //           <p className="text-black">
    //             In-house DJ not available, Outside DJ permitted
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    // </div>
    // </>

    <>
      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row sm:w-full">
        <div className="w-full md:w-[65%] px-[4%] ">
          <h1 className="text-3xl sm:text-4xl font-bold font-sans pt-5 pb-5 mt-5">
            {listing.title}
          </h1>
          <div className="w-full shadow-lg rounded-lg bg-gray-200 object-fill">
            <Slider_for_Detail passid={listing.pictures} />
          </div>
        </div>

        <div className="w-full md:w-[40%] p-[4%] mt-5">
          <div className="flex flex-col justify-around p-5 mt-10 shadow-xl h-auto md:h-[300px] md:mt-5">
            <div className="text-xl sm:text-2xl font-bold">
              Price: Starting From ${listing.price}
            </div>
            <div className="text-lg">
              <b>Capacity:</b> {listing.capacity} Admi
            </div>
            <div className="text-lg">
              <b>Location:</b> Shumali Koria
            </div>
            <div className="text-lg">
              <b>Address:</b> St# 01, Road# 01, Shumali Korea
            </div>
            <div className="text-center mt-4">
              <button
                className="rounded-3xl  text-lg py-2 px-4 bg-[#06c911]  hover:bg-[#9c198b] hover:text-white"
                type="submit"
                onClick={submitHandler}
              >
                <b>Check for Availability</b>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="rounded-lg  shadow-sm mx-[4%] mt-10 p-4">
        <h2 className="text-xl sm:text-2xl my-4">
          About {listing.serviceType}
        </h2>
        <hr />
        <div className="text-justify p-2">
          <p>
            Umaid Palace- An Organic Retreat is a wedding venue located in
            Jaipur, offering a royal and spacious location for weddings and
            events.
          </p>
          <h3 className="font-semibold mt-4  text-gray-700">Space Available</h3>
          <p>
            The venue has 2 lawns, a terrace area, a poolside, and banquet halls
            for your events.
          </p>
          <h3 className="font-semibold mt-4 text-gray-700">Capacity</h3>
          <p>
            With indoor and outdoor spaces, it accommodates up to 1500 guests in
            the largest spaces.
          </p>
          <h3 className="font-semibold mt-4  text-gray-700">
            Cuisines Offered
          </h3>
          <p>
            In-house catering is available, with options to bring in outside
            caterers as needed.
          </p>
          <h3 className="font-semibold mt-4 text-gray-700">
            Facilities Provided
          </h3>
          <ul className="list-disc ml-4">
            <li>In-house and outside catering options</li>
            <li>Outside decorators permitted</li>
            <li>Parking available</li>
          </ul>
          <h3 className="font-semibold mt-4 text-gray-700">Location</h3>
          <p>The venue is located in Jaipur, Dausa.</p>
        </div>
      </div>

      {/* Details Section */}
      <div className="p-6 bg-white shadow-md rounded-md mx-[4%] mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
          <div>
            <h3 className="font-semibold text-gray-700">
              Been on Evento Since
            </h3>
            <p className="text-black">6 years 1 month</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700">Room Count</h3>
            <p className="text-black">73 Rooms</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700">Space</h3>
            <p className="text-black">Indoor, Outdoor, Poolside, Terrace</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700">Room Price</h3>
            <p className="text-black">₹ 9,500 per room</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700">Start of Venue</h3>
            <p className="text-black">2001</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700">Parking</h3>
            <p className="text-black">Sufficient parking available</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700">Catering Policy</h3>
            <p className="text-black  ">Inhouse & outside catering allowed</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700">Small Party Venue</h3>
            <p className="text-black">Less than 50 Pax allowed</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700">Decor Policy</h3>
            <p className="text-black">Outside decorators permitted</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700">Features</h3>
            <p className="text-black">
              Small Function Venue, Outside Caterer & Decorator Allowed
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700">DJ Policy</h3>
            <p className="text-black">
              In-house DJ not available, Outside DJ permitted
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;

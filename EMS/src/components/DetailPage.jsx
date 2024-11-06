import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Slider_for_Detail from "./Slider_for_Detail";

const Details = () => {
  const { id } = useParams(); // Get the ID from the URL
  const [listing, setListing] = useState(null);

  useEffect(() => {
    const fetchListing = async () => {
      // http://localhost:3000/listings/${id}
      try {
        // http://localhost:3000/listings
        const response = await fetch("/listings.json");

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

  return (
    <>
      <div className="flex p-3 border-black border-2">
        <div className="border-red border-2 w-[40%]">
          <h1 className="text-4xl mt-3">{listing.title}</h1>
          {/* <img src={listing.imageUrl} alt={listing.title} /> */}
          <Slider_for_Detail />
        </div>
        <div className="border-blue border-2 ">
          <p>{listing.description}</p>
          <p>Price: ${listing.price}</p>
        </div>

        <div className="bg-purple-100 flex flex-row">
          <div className="mt-[2%] w-[60%]">
            <h1 className="text-4xl mx-[4%]">{listing.title}</h1>
            <img
              src={listing.imageUrl}
              alt={listing.title}
              className="m-[4%]"
            />
            <h2 className="text-2xl m-[4%]">About {listing.serviceType}</h2>
            <p className="mx-[4%]">{listing.description}</p>
          </div>

          <div className="w-[40%] p-[4%]">
            <p className="text-2xl p-[1%]">
              Price: Starting From ${listing.price}
            </p>
            <p className="text-2xl p-[1%]">Capacity: 250 Admi</p>
            <p className="text-2xl p-[1%]">Location: Shumali Koria</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;

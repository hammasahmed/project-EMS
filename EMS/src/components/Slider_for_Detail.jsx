import React, { useState, useEffect } from "react";
import listingsData from "../../public/listings.json";
// const slides = [
//   { image: slide1, text: "WELCOME TO SITE" },
//   { image: slide2, text: "We Make Your Events Special" },
//   { image: slide3, text: "We Make Your Events Memorable" }
// ];

const Slider_for_Detail = ({passid}) => {
  // const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((currentIndex + 1) % passid.length);
  //   }, 3000); // Change slide every 3 seconds
  //   return () => clearInterval(interval);
  // },  );
  // // const pictures = prop.passid;
  // // console.log(pictures)
  // return (
  //   <div className="relative w-full h-screen overflow-hidden">
  //     {Object.keys(passid).map((key, value) => {
  //       // if (listing._id == prop.passid ) {
  //       //   return (
  //       //     <div 
  //       //       key={index}
  //       //       className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
  //       //         index === currentIndex ? "opacity-100" : "opacity-0"
  //       //       }`}
  //       //     >
  //       //       {Object.entries(listing.pictures).map(([key, value]) => {
  //       //         console.log(key, value);
  //       //         return (
  //       //           <img
  //       //             key={key}
  //       //             src={value}
  //       //             alt={`Listings ${index}`}
  //       //             className="w-[100%] h-full object-cover rounded-lg shadow-2xl"
  //       //           />
  //       //         );
  //       //       })}
  //       //       {/* <img
  //       //     src={listing.pictures}
  //       //     alt={`Listings ${index}`}
  //       //     className="w-full h-full object-cover"
  //       //   />          {/* <div className="absolute inset-0 flex  bg-black bg-opacity-50">
  //       //     <h1 className="text-6xl mt-[15vh] text-yellow-400 sm:text-8xl  font-bold sm:mt-[20vh] ml-[10vw] font-sans  tracking-widest stroke-white ">{listing.}</h1>
  //       //   </div> */}
  //       //     </div>
  //       //   );
  //       // } else {
  //       //   // console.log(`Here null`);
  //       //   return null;
  //       // }

  // // console.log(key , value)
  // return (
  //   <div 
  //         key={value}
  //         className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
  //           value === currentIndex ? "opacity-100" : "opacity-0"
  //         }`}>
  //   <img key={value} src={passid[key]} alt="" />
  //   </div>
  // )

  //     })}
  //   </div>
  // );
 
  
  const [slideIndex, setSlideIndex] = useState(1);

  // Convert the pictures object to an array of URLs
  const pictureArray = Object.values(passid);

  const nextSlide = (n) => {
    let newIndex = slideIndex + n;
    if (newIndex > pictureArray.length) newIndex = 1;
    if (newIndex < 1) newIndex = pictureArray.length;
    setSlideIndex(newIndex);
  };

  const setCurrentSlide = (n) => {
    setSlideIndex(n);
  };

  return (
    <>
    <div className="relative">
      {pictureArray.map((picture, index) => (
        <div
          key={index}
          className={`mySlides ${slideIndex === index + 1 ? "block" : "hidden"}`}
        >
          {/* <div className="absolute text-white text-sm top-0 left-0 p-2">{`${index + 1} / ${pictureArray.length}`}</div> */}
          <img src={picture} alt={`Slide ${index + 1}`} className="w-[100%] h-[550px] rounded-lg" />
        </div>
      ))}

      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white font-bold text-lg p-2 rounded-r hover:bg-opacity-75"
        onClick={() => nextSlide(-1)}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white font-bold text-lg p-2 rounded-l hover:bg-opacity-75"
        onClick={() => nextSlide(1)}
      >
        &#10095;
      </button>

      

     
    </div>
     <div className="flex justify-center mt-4 bg-gray-200 rounded-lg ">
     {pictureArray.map((picture, index) => (
       <div key={index} className="w-1/4 h-full px-1">
         <img
           className={`cursor-pointer opacity-200 hover:opacity-100 h-[100px]  w-full rounded-md ${slideIndex === index + 1 ? "opacity-100 border-2 border-indigo-500" : ""}`}
           src={picture}
           alt={`Thumbnail ${index + 1}`}
           onClick={() => setCurrentSlide(index + 1)}
         />
       </div>
     ))}
   </div>
   </>
  );

};


export default Slider_for_Detail;

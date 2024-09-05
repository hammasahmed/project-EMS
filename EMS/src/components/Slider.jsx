import React, { useState, useEffect } from 'react';
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';

const slides = [
  { image: slide1, text: "WELCOME TO SITE" },
  { image: slide2, text: "We Make Your Events Special" },
  { image: slide3, text: "Chal ab chuti kr  " }
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0' }`}
        >
          <img src={slide.image} alt={`Slide ${index}`} className="w-full h-full object-cover"/>
          <div className="absolute inset-0 flex  bg-black bg-opacity-50">
            <h1 className="text-6xl mt-[15vh] text-yellow-400 sm:text-8xl  font-bold sm:mt-[20vh] ml-[10vw] font-sans  tracking-widest stroke-white ">{slide.text}</h1>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Slider;

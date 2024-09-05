import React from "react";
import Card from './card'

const Testimonial = () => {
  return (
    <div className="py-12 px-4 max-w-full mx-auto">
      <div className="text-center mb-8">
        <p className="text-xl font-semibold text-gray-600 mb-2">Testimonial</p>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">What They Are Saying</h1>
        <p className="text-gray-500 ">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="cards flex flex-wrap gap-4 justify-around  ">
      <Card />
      <Card />
      <Card />
      </div>
    </div>
  );
};

export default Testimonial;

// Listing.jsx
import React from 'react';

const Listing = ({ title, description, price, imageUrl }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden w-96 md:max-w-sm  my-4 mx-8">
            <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p className="text-gray-700 text-base mb-4">{description}</p>
                <p className="text-lg font-bold">${price}</p>
            </div>
        </div>
    );
};

export default Listing;

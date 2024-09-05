// // Example data to send in the body
// const data = {
//     name: "John Doe",
//     email: "john.doe@example.com",
//     message: "Hello, this is a test message!"
//   };
  
//   // Making a POST request using fetch
//   fetch('/api/endpoint', {
//     method: 'POST', // HTTP method
//     headers: {
//       'Content-Type': 'application/json' // Tells the server you're sending JSON data
//     },
//     body: JSON.stringify(data) // Convert JavaScript object to JSON string
//   })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json(); // Parse the response JSON data
//   })
//   .then(data => {
//     console.log('Success:', data); // Handle the response data
//   })
//   .catch(error => {
//     console.error('There was a problem with the fetch operation:', error); // Handle errors
//   });



// import React from 'react'

// const VDB_addlistings = () => {
//   return (
//     <div>VDB_addlistings</div>
//   )
// }

// export default VDB_addlistings


import React, { useState } from 'react';

const CreateListing = () => {
  const [listing, setListing] = useState({
    _id: '',
    title: '',
    description: '',
    price: '',
    city: '',
    imageUrl: '',
    serviceType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setListing((prevListing) => ({
      ...prevListing,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/listings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(listing),
      });
      if (response.ok) {
        const data = await response.json();
        console.log('Listing created:', data);
        // You can add logic here to handle what happens after a successful submission
      } else {
        console.error('Failed to create listing');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col w-[50%] gap-3 '>
      <input
        type="text"
        name="_id"
        placeholder="ID"
        value={listing._id}
        onChange={handleChange}
        className='inputs border-2 h-10 rounded-xl pl-4'
      />
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={listing.title}
        onChange={handleChange}
        className='inputs border-2 h-10 rounded-xl pl-4'
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={listing.description}
        onChange={handleChange}
        className='inputs border-2 h-10 rounded-xl pl-4'
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={listing.price}
        onChange={handleChange}
        className='inputs border-2 h-10 rounded-xl pl-4'
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={listing.city}
        onChange={handleChange}
        className='inputs border-2 h-10 rounded-xl pl-4'
      />
      <input
        type="text"
        name="imageUrl"
        placeholder="Image URL"
        value={listing.imageUrl}
        onChange={handleChange}
        className='inputs border-2 h-10 rounded-xl pl-4'
      />
      <input
        type="text"
        name="serviceType"
        placeholder="Service Type"
        value={listing.serviceType}
        onChange={handleChange}
        className='inputs border-2 h-10 rounded-xl pl-4'
      />
      <button type="submit" className='transition-all border-purple-900 rounded-lg border-2 
      hover:rounded-full w-32 h-10 hover:bg-purple-950 hover:text-white'>Create Listing</button>
    </form>
  );
};

export default CreateListing;

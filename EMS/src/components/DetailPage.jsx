import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Details = () => {
  const { id } = useParams(); // Get the ID from the URL
  const [listing, setListing] = useState(null);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        
        const response = await fetch('http://localhost:3000/listings');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched data:', data);
        const foundListing = data.find(item => item._id.toString() === id);
        console.log('Found listing:', foundListing);
        setListing(foundListing);
      } catch (error) {
        console.error('Error fetching listing details:', error);
      }
    };

    fetchListing();
  }, [id]);

  if (!listing) {
    return <div className='text-4xl text-green-500 text-center align-center'>Loading...</div>;
  }

  return (<div className='bg-slate-400 flex flex-row'>
    <div className='mt-[2%] w-[60%] bg-green-400'>
      <h1 className='text-4xl mx-[4%]'>{listing.title}</h1>
      <img src={listing.imageUrl} alt={listing.title} className='m-[4%]' />
      <h2 className='text-2xl m-[4%]'>About {listing.serviceType}</h2>
      <p className='mx-[4%]'>{listing.description}</p>
      
    </div>

    <div className='w-[40%] bg-yellow-400'>
    <p className='text-2xl'>Price: ${listing.price}</p>
    
        
    </div>
    </div>
  );
};

export default Details;

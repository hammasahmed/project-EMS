import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Details = () => {
  const { id } = useParams(); // Get the ID from the URL
  const [listing, setListing] = useState(null);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const response = await fetch('http://localhost:3000/listings/${id}');
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
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className='text-4xl'>{listing.title}</h1>
      <img src={listing.imageUrl} alt={listing.title} />
      <p>{listing.description}</p>
      <p>Price: ${listing.price}</p>
    </div>
  );
};

export default Details;

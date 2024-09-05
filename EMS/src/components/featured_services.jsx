import React from 'react'

import Catalog from './catalog'
import venue1 from '../assets/venue1.png';
import venue2 from '../assets/venue2.png';
import venue3 from '../assets/venue3.png';
import venue4 from '../assets/venue4.png';
import venue5 from '../assets/venue5.png';

import food1 from '../assets/food1.png';
import food2 from '../assets/food2.png';
import food3 from '../assets/food3.png';
import food4 from '../assets/food4.png';
import food5 from '../assets/food5.png';
const Featured_services = () => {
    const venue_images = [venue1, venue2, venue3, venue4, venue5];
  const venue_descriptions = [
    'Pearl Continental',
    'Blue Lagoon',
    'Monal Heights',
    'Serena Hotel',
    'Marriott Hotel',
  ];
  const catering_images = [food1, food2, food3, food4, food5];
  const catering_descriptions = [
    'Standard ',
    'Traditional',
    'Natural',
    'Sweet Dishes',
    'Delicios Simple',
  ];
  return (
   
    <div>
        <Catalog heading="Venues" title="Venue" images={venue_images} descriptions={venue_descriptions} />
        <Catalog heading="Caterings" title="Catering" images={catering_images} descriptions={catering_descriptions} />
    </div>
  )
}

export default Featured_services
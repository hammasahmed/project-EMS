// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import PropTypes from 'prop-types';
// import Card from './card'
// const Catalog = ({ heading, title, images, descriptions }) => {
//   const [expandedIndex, setExpandedIndex] = useState(null);

//   const handleCardClick = (index) => {
//     setExpandedIndex(index === expandedIndex ? -1 : index);
//   };

//   const cardVariants = {
//     expanded: {
//       width: '400px',
//     },
//     collapsed: {
//       width: '200px',
//     },
//   };

//   return (
//     <section className="py-16 pb-[300px] bg-gradient-to-r from-[#1a0330] to-[#3a0303]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <h1 className="text-3xl font-extrabold text-white">Featured {heading}</h1>
//         <p className="mt-4 text-xl text-gray-300">Check out our latest Listings</p>
//       </div>
//       <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-5">
//         {images.map((image, index) => (
//           <motion.div
//             key={index}
//             className={`card cursor-pointer h-[500px] bg-cover bg-center rounded-[20px] ${index === expandedIndex ? 'expanded' : ''} lg:block hidden`}
//             variants={cardVariants}
//             initial="collapsed"
//             animate={index === expandedIndex ? 'expanded' : 'collapsed'}
//             transition={{ duration: 0.5 }}
//             onClick={() => handleCardClick(index)}
//             style={{
//               backgroundImage: `url(${image})`,
//             }}
//           >
//             <div className="card-content h-full flex flex-col justify-end">
//               <div className="card-footer rounded-b-[20px] bg-gray-800 bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center">
//                 <h2 className="text-xl font-semibold text-white text-center">
//                   {title} {index + 1}
//                 </h2>
//                 {index === expandedIndex && (
//                   <p className="mt-2 text-gray-300 text-center">
//                     {descriptions[index]}
//                   </p>
//                 )}
//               </div>
//             </div>
//           </motion.div>

//         ))}
//       </div>
//       {images.map((images, index) => (
//         <Card key={index} images={images} />
//       ))}
//       <div className="card flex flex-wrap gap-y-14 justify-around  lg:hidden  ">
//       {images.map((image, index) => (
//         <img key={index} src={image} alt={`service ${index}`} className='w-[80vw] md:w-[40vw] rounded-3xl' />
//       ))}
//     </div>

//     </section>
//   );
// };
// Catalog.propTypes = {
//   heading: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   images: PropTypes.array.isRequired,
//   descriptions: PropTypes.array.isRequired,
// };

// Catalog.defaultProps = {
//   images: [],
//   descriptions: [],
// };
// export default Catalog;


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import Card from './card';

const Catalog = ({ heading, title, images, descriptions }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleCardClick = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  const cardVariants = {
    expanded: {
      width: '400px',
    },
    collapsed: {
      width: '200px',
    },
  };

  return (
    <section className="py-16 pb-[300px] bg-gradient-to-r from-[#1a0330] to-[#3a0303] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center ">
        <h1 className="text-3xl font-extrabold text-white">Featured {heading}</h1>
        <p className="mt-4 text-xl text-gray-300">Check out our latest Listings</p>
      </div>
      <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-5">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className={`card cursor-pointer h-[350px] bg-cover bg-center rounded-[20px] ${index === expandedIndex ? 'expanded' : ''} lg:block hidden`}
            variants={cardVariants}
            initial="collapsed"
            animate={index === expandedIndex ? 'expanded' : 'collapsed'}
            transition={{ duration: 0.5 }}
            onClick={() => handleCardClick(index)}
            style={{
              backgroundImage: `url(${image})`,
            }}
          >
            <div className="card-content h-full flex flex-col justify-end">
              <div className="card-footer rounded-b-[20px] bg-gray-800 bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center hover:bg-opacity-90 transition-opacity duration-300">
                <h2 className="text-xl font-semibold text-white text-center">
                  {title} {index + 1}
                </h2>
                {index === expandedIndex && (
                  <>
                    <p className="mt-2 text-gray-300 text-center">
                      {descriptions[index]}
                    </p>
                    <div className="mt-2 flex items-center">
                      <span className="text-yellow-400">★★★★☆</span> {/* Replace with actual rating */}
                    </div>
                    <button className="mt-2 bg-purple-500 text-white px-4 py-2 rounded-md">Book Now</button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex flex-wrap gap-4 justify-around lg:hidden">
  {images.map((image, index) => (
    <div
      key={index}
      className="relative w-[80vw] h-[400px] bg-cover bg-center rounded-xl"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-gray-800 bg-opacity-0 hover:bg-opacity-0 transition-opacity duration-300 flex flex-col justify-end p-4">
        <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gray-800 bg-opacity-75 rounded-b-xl p-4 text-center">
          <h2 className="text-white text-center">
            {title} {index + 1}
          </h2>
          <div className="mt-2 text-yellow-400 text-center">★★★★☆</div>
          <button className="mt-2 bg-purple-500 text-white px-4 py-2 rounded-md ">Book Now</button>
        </div>
      </div>
    </div>
  ))}
</div>



    </section>
  );
};

Catalog.propTypes = {
  heading: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  descriptions: PropTypes.array.isRequired,
};

Catalog.defaultProps = {
  images: [],
  descriptions: [],
};

export default Catalog;

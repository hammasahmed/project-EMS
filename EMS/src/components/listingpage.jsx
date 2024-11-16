// // ListingsPage.js
// import React, { useEffect, useState } from 'react';
// import Listing from './listing';
// // import listingsData from '../assets/listings.json';

// const ListingsPage = () => {
//     const [listings, setListings] = useState([]);

//     useEffect(() => {
//         const fetchListings = async () => {
//             try {
//                 const response = await fetch('/listings.json'); // Path to the local JSON file
//                 const data = await response.json();
//                 setListings(data);
//                 // setListings(listingsData);
//             } catch (error) {
//                 console.error('Error fetching listings:', error);
//             }
//         };

//         fetchListings();
//     }, []);

//     return (
//         <div className="listings-page flex flex-wrap justify-evenly">
//             {listings.map(listing => (
//                 <Listing
//                     key={listing._id}
//                     title={listing.title}
//                     description={listing.description}
//                     price={listing.price}
//                     imageUrl={listing.imageUrl}
//                 />
//             ))}
//         </div>
//     );
// };

// export default ListingsPage;


// import React, { useEffect, useState } from 'react';
// import Listing from './listing';
// import ReactPaginate from 'react-paginate';

// const ListingsPage = () => {
//     const [listings, setListings] = useState([]);
//     const [currentPage, setCurrentPage] = useState(0);
//     const [itemsPerPage] = useState(10); // Number of items per page

//     useEffect(() => {
//         const fetchListings = async () => {
//             try {
//                 const response = await fetch('/listings.json');
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! Status: ${response.status}`);
//                 }
//                 const data = await response.json();
//                 setListings(data);
//             } catch (error) {
//                 console.error('Error fetching listings:', error);
//             }
//         };

//         fetchListings();
//     }, []);

//     const indexOfLastListing = (currentPage + 1) * itemsPerPage;
//     const indexOfFirstListing = indexOfLastListing - itemsPerPage;
//     const currentListings = listings.slice(indexOfFirstListing, indexOfLastListing);

//     const handlePageChange = (selectedPage) => {
//         setCurrentPage(selectedPage.selected);
//     };

//     return (
//         <div>
//             <div className="listings-page grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
//                 {currentListings.map(listing => (
//                     <Listing
//                         key={listing._id}
//                         title={listing.title}
//                         description={listing.description}
//                         price={listing.price}
//                         imageUrl={listing.imageUrl}
//                     />
//                 ))}
//             </div>

//             <ReactPaginate
//                 previousLabel={'← Previous'}
//                 nextLabel={'Next →'}
//                 breakLabel={'...'}
//                 pageCount={Math.ceil(listings.length / itemsPerPage)}
//                 marginPagesDisplayed={2}
//                 pageRangeDisplayed={5}
//                 onPageChange={handlePageChange}
//                 containerClassName={'flex justify-center mt-4'}
//                 pageClassName={'mx-1'}
//                 pageLinkClassName={'px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100'}
//                 previousClassName={'mx-1'}
//                 previousLinkClassName={'px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100'}
//                 nextClassName={'mx-1'}
//                 nextLinkClassName={'px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100'}
//                 breakClassName={'mx-1'}
//                 breakLinkClassName={'px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100'}
//                 activeClassName={'bg-blue-500 text-white border-blue-500'}
//             />
//         </div>
//     );
// };

// export default ListingsPage;
import React, { useEffect, useState } from 'react';
import Listing from './listing.jsx';
import ReactPaginate from 'react-paginate';
import { useLocation } from 'react-router-dom';

// Reusable Dropdown Component
const Dropdown = ({ id, label, value, onChange, options }) => (
    <div>
        <label htmlFor={id} className="text-sm font-medium text-gray-700 p-3">{label}</label>
        <select
            id={id}
            value={value}
            onChange={onChange}
            className="w-80 p-2 border border-gray-300 rounded-md"
        >
            {options.map(option => (
               <option 
               key={option.value || option} 
               value={option.value || option}
           >
               {option.label || option}
           </option>
            ))}
        </select>
    </div>
);

const ListingsPage = () => {
    const [listings, setListings] = useState([]);
    const [filteredListings, setFilteredListings] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage] = useState(10);
    const [filters, setFilters] = useState({ city: '', price: '' });
    const [cities, setCities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const priceRanges = [
        { label: 'Any', value: '' },
        { label: 'Under $50', value: '50' },
        { label: '$50 - $100', value: '100' },
        { label: '$100 - $200', value: '200' },
        { label: 'Over $200', value: '201' }
    ];

    const location = useLocation();
    const { name } = location.state || {};
    console.log(cities)
    // Fetch Listings
    useEffect(() => {
        const fetchListings = async () => {
            try {
                const response = await fetch('http://localhost:5000/listings');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                console.log(data)
                setListings(data);
                setFilteredListings(data);

                // Extract unique cities
                const uniqueCities = [...new Set(data.map(listing => listing.City))];
                console.log(uniqueCities);
                setCities(uniqueCities);
                data.forEach((listing, index) => {
                    console.log(`Listing ${index}:`, listing);
                });
            } catch (error) {
                setError('Failed to fetch listings. Please try again later.');
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchListings();
    }, []);

    // Apply Filters
    useEffect(() => {
        const filtered = listings.filter(listing => {
            const cityMatch = filters.city ? listing.City === filters.city : true;
            const priceMatch = filters.price
                ? (filters.price === '201' ? +listing.price > 200 : +listing.price <= parseInt(filters.price))
                : true;
            return cityMatch && priceMatch;
        });

        setFilteredListings(filtered);
        setCurrentPage(0); // Reset to first page when filters change
    }, [filters, listings]);

    // Pagination Logic
    const indexOfLastListing = (currentPage + 1) * itemsPerPage;
    const indexOfFirstListing = indexOfLastListing - itemsPerPage;
    const currentListings = filteredListings.slice(indexOfFirstListing, indexOfLastListing);

    const handlePageChange = ({ selected }) => setCurrentPage(selected);

    if (loading) return <p>Loading listings...</p>;
    if (error) return <p className="text-red-700">{error}</p>;
    console.log(options);
    return (
        <div>
            {name && <h1 className="text-3xl font-bold mb-4">Welcome, {name}!</h1>}
            
            <div className="flex gap-8 flex-wrap my-[10vh]">
                {/* City Filter */}
                <Dropdown
    id="city"
    label="City"
    value={selectedCity}
    onChange={(e) => setSelectedCity(e.target.value)}
    options={['All Cities', ...cities]} // Assuming `cities` is a list of strings
/>
                {/* Price Filter */}
                <Dropdown
                    id="price"
                    label="Price"
                    value={filters.price}
                    onChange={e => setFilters({ ...filters, price: e.target.value })}
                    options={priceRanges}
                />
            </div>

            {/* Listings Section */}
            <div className="listings-page flex flex-wrap justify-evenly bg-black">
                {currentListings.length > 0 ? (
                    currentListings.map(listing => (
                        <Listing
                            key={listing._id}
                            title={listing.title}
                            description={listing.description}
                            price={listing.price}
                            imageUrl={listing.imageUrl}
                        />
                    ))
                ) : (
                    <p className="text-center text-red-700">No listings found</p>
                )}
            </div>

            {/* Pagination */}
            <ReactPaginate
                previousLabel={'← Previous'}
                nextLabel={'Next →'}
                breakLabel={'...'}
                pageCount={Math.ceil(filteredListings.length / itemsPerPage)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageChange}
                containerClassName={'flex justify-center mt-4'}
                pageClassName={'mx-1'}
                pageLinkClassName={'px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100'}
                previousClassName={'mx-1'}
                previousLinkClassName={'px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100'}
                nextClassName={'mx-1'}
                nextLinkClassName={'px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100'}
                breakClassName={'mx-1'}
                breakLinkClassName={'px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100'}
                activeClassName={'bg-blue-500 text-white border-blue-500'}
            />
        </div>
    );
};

export default ListingsPage;


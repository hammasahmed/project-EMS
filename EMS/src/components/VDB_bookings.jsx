import React from 'react'

const VDB_bookings = () => {

  useEffect(() => {
    // Fetch data from the API
    fetch('http://localhost:5000/api/bookings/') // Make sure the URL matches the backend
      .then((response) => response.json())
      .then((data) => {
        setData(data); // Set the data in state
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>VDB_bookings</div>
  )
}

export default VDB_bookings
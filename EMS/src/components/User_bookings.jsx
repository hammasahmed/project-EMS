import axios from 'axios';
import React from 'react'
import {useState,useEffect} from 'react'
// import {axios} from 'axios'

const User_bookings = ({setComponent}) => {
//   const userid = localStorage.getItem('userId');
const customerId = localStorage.getItem('id')
  console.log(customerId)
  const [data, setData] = useState([]);

 
  useEffect(() => {
    fetch(`http://localhost:5000/api/bookings/data/${customerId}`,) 
      .then((response) => response.json())
      .then((data) => {
        setData(data); // Set the data in state
      })
      .catch((error) => console.error("Error fetching data:", error));
        
        
      console.log(data)
  },[] );

  // Handler for when the Accept button is clicked
  // Handler for when the Reject button is clicked
 

  const submitHandler = (booking_id)=>{
    // e.preventDefault();
    console.log(booking_id)
    axios.post(`http://localhost:5000/transactions}`, formData)
    .then((response) => {
        console.log("Booking updated:", response.data);
    })
    .catch((error) => {
        console.error("Error updating booking:", error); // Handle error
    });
  }
  const label_styling = "block text-sm font-medium text-gray-700"
  const input_styling =  "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
  return (
    <div className='flex justify-start flex-col h-fit m-auto '>
      <h1 className="border-2 border-black m-0 p-0">My Bookings</h1>
      { 
        data.map((item, index) => (
          <div key={index} className="flex flex-col rounded-lg">
            <div className="w-full rounded-xl mt-8 border-[1px] shadow-lg m-auto">
            <h2 className="text-xl font-semibold mb-2 text-center">Booking Acceptance</h2>
        <div className="w-full mx-auto p-8 shadow-lg rounded-xl">
               <form  method="POST">
                <>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 ">
              
              <div>
                <label
                  className={label_styling}
                >
                  Name
                </label>
            
                <input
                  type="text"
                  value={item.name}
                  className={input_styling}
                  disabled
                  // required
                />
              </div>
              <div>
                <label
                  className={label_styling}
                >
                Event Date (YY-MM-DD)
                </label>
                <input
                  type="text"
                  value={item.date}
                  className={input_styling}
                  disabled
                  // required

                />
              </div>
              <div>
                <label
                  className={label_styling}
                >
                  Event Start Time 
                </label>
                <input
                  type="text"
                  value={item.start_time}
                  className={input_styling}
                  disabled
                  // required
                />
              </div>
              <div>
                <label
                  className={label_styling}
                >
                  Event End Time
                </label>
                <input
                  type="text"
                  value={item.end_time}
                  className={input_styling}
                  disabled
                  // required
                />
              </div>
              <div>
              
                <label
                  className={label_styling}
                >
                  Event Type
                </label>
                <input
                  type="text"
                  value={item.persons}
                  className={input_styling}
                  disabled
                  // required
                />
              </div>
              <div>
              
                <label
                  className={label_styling}
                >
                  Parking Capacity
                </label>
                <input
                  type="text"
                  value={item.parking}
                  className={input_styling}
                  disabled
                  // required
                />
              </div>
              <div>
              
                <label
                  className={label_styling}
                >
                  Ground type
                </label>
                <input
                  type="text"
                  value={item.ground_type}
                  className={input_styling}
                  disabled
                  // required
                />
              </div>
              <div>
              
              <label
                className={label_styling}
              >
                Sitting Arrangement
              </label>
              <input
                type="text"
                value={item.sitting_arrangement}
                className={input_styling}
                disabled
                // required
              />
            </div>

            <div>
              
              <label
                className={label_styling}
              >
                Lighting Quality
              </label>
              <input
                type="text"
                value={item.lighting_type}
                className={input_styling}
                disabled
                // required
              />
            </div>

            <div>
              
              <label
                className={label_styling}
              >
               VIP Seats
              </label>
              <input
                type="text"
                value={item.VIP_seats}
                className={input_styling}
                disabled
                // required
              />
            </div>

            <div>
              
              <label
                className={label_styling}
              >
               Projector
              </label>
              <input
                type="text"
                value={item.projector}
                className={input_styling}
                disabled
                // required
              />
            </div>
            <div>
              
              <label
                className={label_styling}
              >
               Wifi
              </label>
              <input
                type="text"
                value={item.wifi}
                className={input_styling}
                disabled
                // required
              />
            </div>
            <div>
              
              <label
                className={label_styling}
              >
               AC/Heating Facility
              </label>
              <input
                type="text"
                value={item.ac_heating}
                className={input_styling}
                disabled
                // required
              />
            </div>
            <div>
              
              <label
                className={label_styling}
              >
               Catering Facility
              </label>
              <input
                type="text"
                value={item.catering}
                className={input_styling}
                disabled
                // required
              />
            </div>
            <div>
              
              <label
                className={label_styling}
              >
               AC/Heating Facility
              </label>
              <input
                type="text"
                value={item.ac_heating}
                className={input_styling}
                disabled
                // required
              />
            </div>
            <div>
              
              <label
                className={label_styling}
              >
               Table Services
              </label>
              <input
                type="text"
                value={item.table_services}
                className={input_styling}
                disabled
                // required
              />
            </div>
            

            </div> 
            <div className="grid grid-cols-1 gap-4">
            <div>
              <p className='text-xl'>Remarks By the Vendor:</p>
              <label
                className={label_styling}
              >
                Price
              </label>
              <input
                type="text"
                name='price'
                value={item.price}
                className={input_styling} 
                disabled
                
                // required
              />
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
              <label className={label_styling} htmlFor='remarks'>Remarks</label>
              <textarea type ="text "
               name='remarks'
               value ={item.remarks}
               className="mt-2 block h-[100px] w-[100%] px-3 py-2 border-2 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                 /></div>
            </div>
          
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  ">
            <button
              className=" py-2 w-32  mt-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
              type='button'
              onClick={handlePayment}                 
            >
              Pay Now
            </button>
          
            </div>
            </>
          </form>
        </div>
      </div>



          </div>
        ))
}
    </div>
  )
}

export default User_bookings
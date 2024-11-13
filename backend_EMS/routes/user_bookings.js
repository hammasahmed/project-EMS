import { Router } from 'express';
import bookings from '../models/booking_models.js';
// import { jwtDecode } from "jwt-decode"


// const user_id = "672e43a517ccdf1ed9c45ead";
const router = Router();

// Api to get the data from Booking Form and Catering Form
// Then Sends it to the user and Vendot Table
router.get('/api/bookings', async (req, res) => {
    try {
        
        
    } catch (error) {
        console.log("Bad Data ", error);
    }
}).post('/api/bookings', async (req, res) => {
    try {
        const populatedBookings = await bookings.find().populate({
            path: "listing_id", // This should match the field in bookings schema
            model: "listings",  // The model name you're referencing
          })
          console.log(populatedBookings);
        // get the listing id, Role,Vendorid, Userid ,
        const booking_data = new bookings(req.body);
        await booking_data
          .save()
          .then((result) => console.log(result))
          .catch((error) => console.log(error));
      
        res.status(201).json({ message: "Success" });
        
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

export default router;
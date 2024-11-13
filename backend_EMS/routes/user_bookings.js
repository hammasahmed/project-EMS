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
       
        // get the listing id, Role,Vendorid, Userid ,
        const booking_data = new bookings(req.body);
        await booking_data
          .save()
          .then((result) => console.log(result))
          .catch((error) => console.log(error));
          res.status(200).json({ message: "Data saved successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})


router.get('/api/bookings/data', async (req, res) => {
    try {
        const data =  await bookings.find()
        res.status(200).send(data)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})


router.get('/api/bookings/data/:booking_id', async (req, res) => {
    try {
        const booking_id = req.params.booking_id;
        console.log(booking_id)
        const data =  await bookings.findById(booking_id)
        
    if (!data) {
        return res.status(404).send('Data not found');
      }
      else{
          res.status(200).json(data)
      }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})


router.delete('/api/bookings/data/:booking_id', async (req, res) => {
    try {
        const booking_id = req.params.booking_id;
        await bookings.findByIdAndDelete(booking_id)
        res.status(204).json({ message: "Data deleted successfully" })
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

router.put('/api/bookings/data/:booking_id', async (req, res) => {
    try {
        const booking_id = req.params.booking_id;
        const data =  await bookings.findByIdAndUpdate(booking_id)
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})
export default router;
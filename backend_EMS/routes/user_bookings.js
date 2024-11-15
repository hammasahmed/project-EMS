import { Router } from 'express';
import bookings from '../models/booking_models.js';
import JC from "../config/jazzcash.js";
import axios from 'axios';
// import { error } from 'jazzcash-checkout';
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
        await booking_data.save().then((result) => console.log(result)).catch((error) => console.log(error));
          res.status(200).json({ message: "Data saved successfully" });
    } catch (error) {
        res.status(400).json({ message:"Data not Saved" });
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
        const data =  await bookings.findById(booking_id);
        res.status(200).json(data)
      }
      catch (error) {
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
        console.log(req.body)
        const booking_id = req.params.booking_id;
        const data =  await bookings.findByIdAndUpdate(booking_id,req.body);
        if(!data){
            res.status(400).json({ message:"Data not Found" });
        }
        console.log(data)
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({ message:"Error in the data" });
    }
})

router.get('/api/bookings/:vendor_id', async (req, res) => {
try {
    // const {price,remarks} = req.body
    // let filter = {}
    const booking_data =  await bookings.find({vendor_id:req.query.vendor_id, price: { $in: ['', null] } });
    res.status(200).json(booking_data)
} catch (error) {
    res.status(400).json({ message: error.message });
}
})

router.get('/api/bookings/data/:customerId', async (req, res) => {
try {
    // const {price,remarks} = req.body
    // let filter = {}
    const booking_data =  await bookings.find({customer_id:req.query.customerId});
    console.log(booking_data)
    res.status(200).json(booking_data)
} catch (error) {
    res.status(400).json({ message: error.message });
}
})


router.post('/api/payment', async (req, res) => {
    try{
        const pay = (req, res) => {
            const data = {
              pp_Version: '1.1',
              pp_DiscountedAmount: '',
              pp_DiscountBank: '',
              pp_Amount: '1000',
              pp_TxnCurrency: 'PKR',
              pp_BillReference: 'billRef123',
              pp_Description: 'Description of transaction',
            };
        JC.pay(data, res => {
          if (res.pp_SecureHash) {
            // success code here
            const post_request= ()=>{
                const url = 'https://sandbox.jazzcash.com.pk/ApplicationAPI/API/Purchase/PAY'; // Replace with your URL
                  
                    try {
                      const response =  axios.post(url, data);
                      console.log('Response:', response.data);
                    } catch (error) {
                      console.error('Error:',error);
                    }
                  
                    
                    
                }
                post_request();
          
          } else {
            // failure code here
            res.status(400).json({ message:"Error in the data" });
          }
        });
      };

    pay(req, res);
   

    post_request();
    }catch (error) {
        res.status(400).json({ message: error.message });
    }
    

   
})

router.get('/transaction/success', async (req, res) => {
    res.send("Successful in get")

})

router.post('/transaction/success', async (req, res) => {

    res.send("Successful transaction")
})

export default router;
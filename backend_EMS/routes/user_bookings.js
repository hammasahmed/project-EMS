import { Router } from 'express';
import bookings from '../models/booking_models.js';
import JC from "../config/jazzcash.js";
import axios from 'axios';
import crypto from "crypto"
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
    // try{
    //     const pay = (req, res) => {
    //         const data = {
    //           pp_Version: '1.1',
    //           pp_DiscountedAmount: '',
    //           pp_DiscountBank: '',
    //           pp_Amount: '1000',
    //           pp_TxnCurrency: 'PKR',
    //           pp_BillReference: 'billRef123',
    //           pp_Description: 'Description of transaction',
    //         };
    //     JC.pay(data, response => {
    //       if (response.pp_SecureHash) {
    //         // success code here
    //       res.status(200).json({message:"Transaction going"})
    //       } else {
    //         // failure code here
    //         res.status(400).json({ message:"Error in the data" });
    //       }
    //     });
    //   };

    // const data = pay(req, res);
    // const post_request= ()=>{
    //     const url = 'https://sandbox.jazzcash.com.pk/ApplicationAPI/API/Purchase/PAY'; // Replace with your URL
          
    //         try {
    //           const response =  axios.post(url, data);
    //           console.log('Response:', response.data).then((responsed)=>{console.log(responsed)});
    //         } catch (error) {
    //           console.error('Error:',error);
    //         }
          
            
            
    //     }
    // const response  =  post_request();
   
    //     console.log(response)
   
    // }catch (error) {
    //     res.status(400).json({ message: error.message });
    // }
    const booking_id ="6734af19e97404398807df5b"
    const User_data  = await bookings.find({_id:booking_id});
    console.log(User_data);

    
    const referenceNumber =()=>{
        const ref_number = "T"+getDateandTime();
        return ref_number;
    }
    const billReference =()=>{
        const billReference = "Bill"+getDateandTime();;
        return billReference;
    }
   
    function getDateandTime() {
        const options = { timeZone: "Asia/Karachi" }; // Specify time zone
        const now = new Date();
      
        // Format the current date-time considering the timezone
        const formatter = new Intl.DateTimeFormat("en", {
          ...options,
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false, // Use 24-hour format
        });
      
        // Decompose the formatted date-time
        const formattedParts = formatter.formatToParts(now);
      
        const year = formattedParts.find((part) => part.type === "year").value;
        const month = formattedParts.find((part) => part.type === "month").value;
        const day = formattedParts.find((part) => part.type === "day").value;
        const hour = formattedParts.find((part) => part.type === "hour").value;
        const minute = formattedParts.find((part) => part.type === "minute").value;
        const second = formattedParts.find((part) => part.type === "second").value;
      
        return `${year}${month}${day}${hour}${minute}${second}`;
    }
  
    // function getExpiryDateandTime(offsetMinutes) {
    //   const options = { timeZone: "Asia/Karachi" }; 
    //   const now = new Date();
    
    //   const updatedTime = new Date(now.getTime() + offsetMinutes * 60000);
    
    //   const year = new Intl.DateTimeFormat("en", { ...options, year: "numeric" }).format(updatedTime);
    //   const month = new Intl.DateTimeFormat("en", { ...options, month: "2-digit" }).format(updatedTime);
    //   const day = new Intl.DateTimeFormat("en", { ...options, day: "2-digit" }).format(updatedTime);
    //   const hours = new Intl.DateTimeFormat("en", { ...options, hour: "2-digit", hour12: false }).format(updatedTime);
    //   const minutes = new Intl.DateTimeFormat("en", { ...options, minute: "2-digit" }).format(updatedTime);
    //   const seconds = new Intl.DateTimeFormat("en", { ...options, second: "2-digit" }).format(updatedTime);
    
    //   return `${year}${month}${day}${hours}${minutes}${seconds}`;
    // }
    function getExpiryDateAndTime(offsetMinutes) {
        const options = { timeZone: "Asia/Karachi" }; // Specify time zone
        const now = new Date();
      
        // Add the offset in milliseconds
        const updatedTime = new Date(now.getTime() + offsetMinutes * 60000);
      
        // Format the updated time considering transitions
        const formatter = new Intl.DateTimeFormat("en", {
          ...options,
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false, // Use 24-hour format
        });
      
        // Decompose the formatted date-time
        const formattedParts = formatter.formatToParts(updatedTime);
      
        const year = formattedParts.find((part) => part.type === "year").value;
        const month = formattedParts.find((part) => part.type === "month").value;
        const day = formattedParts.find((part) => part.type === "day").value;
        const hour = formattedParts.find((part) => part.type === "hour").value;
        const minute = formattedParts.find((part) => part.type === "minute").value;
        const second = formattedParts.find((part) => part.type === "second").value;
      
        return `${year}${month}${day}${hour}${minute}${second}`;
      }

    let payment_array = 
    {
   
      pp_CustomerID:"Customer"+booking_id,
      pp_CustomerEmail: "abc@abc.com",
      pp_CustomerMobile: '03331234567',
      pp_Version: "1.1",
      pp_TxnType: "MPAY",
      pp_TxnRefNo: referenceNumber(),
      pp_MerchantID: "MC137527",
      pp_Password: "4vyb19vv0w",
      pp_Amount: "100",
      pp_TxnCurrency: "PKR",
      pp_TxnDateTime: getDateandTime(),
      pp_TxnExpiryDateTime: getExpiryDateAndTime(30),
      pp_BillReference: billReference(),
      pp_Description: "Description",
      pp_CustomerCardNumber: "5123450000000008",
      pp_CustomerCardCVV: "100",
      pp_CustomerCardExpiry: "01/39",
      pp_SecureHash:'',
      pp_DiscountedAmount: "",
      pp_DiscountBank: "",
      pp_UsageMode: "API",
   

// F8B3EB994F1DC552BF09157493C1E170A70DC8B5259FA11049D5348F922F9279
    }

    const sortObject=()=>{
        const sortedKeys = Object.keys(payment_array).sort();
        const sortedObject = {};
        sortedKeys.forEach((key)=>{
            sortedObject[key] = payment_array[key]
        })

        return sortedObject;
    }
    payment_array = sortObject();
    function generateHMAC(secretKey, message, algorithm = 'sha256') {
        const hmac = crypto.createHmac(algorithm, secretKey);
        hmac.update(Buffer.from(message,'utf-8'));
        return hmac.digest('hex').toUpperCase();

      }

    const SecureHash = ()=>{
        let unSecureHash= "sv93ug75ww&"
          Object.values(payment_array).map((key) => {
            unSecureHash += key+"&";
          })
          unSecureHash = unSecureHash.slice(0,-1);
        console.log(unSecureHash)
        unSecureHash = Buffer.from(unSecureHash,'utf-8');
        unSecureHash = unSecureHash.toString('latin1');
        const secretKey = "sv93ug75ww";
        const SecureHash = generateHMAC(secretKey, unSecureHash);
        payment_array.pp_SecureHash = SecureHash;  
        
      } 
      SecureHash();
      
   

      res.send(payment_array)

    const response = await axios.post('https://sandbox.jazzcash.com.pk/ApplicationAPI/API/Purchase/PAY', payment_array).then((response)=>{console.log(response)}).then((error)=>{console.log(error)})

    //  res.status(200).json(response);
    console.log(response)
    
    
})










router.get('/transaction/success', async (req, res) => {
    res.send("Successful in get")

})

router.post('/transaction/success', async (req, res) => {

    res.send("Successful transaction")
})

export default router;
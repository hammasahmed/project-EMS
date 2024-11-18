import crypto from 'crypto'

// // const payment = async () => {
// //   // const booking_id ="6734af19e97404398807df5b"
// //   //     const User_data  = await bookings.find({_id:booking_id});
// //   //     console.log(User_data)
// //   {
    
    
   
// //     // function generateHMAC(secretKey, message, algorithm = 'sha256') {
// //     //   const hmac = crypto.createHmac(algorithm, secretKey);
// //     //   hmac.update(message);
    
// //     //   return hmac.digest('hex');
// //     // }
    


// //     // const SecureHash = ()=>{
// //     //   let unSecureHash= ""
// //     //   payment_array.map((item)=>{
// //     //     Object.values(item).map((key) => {
// //     //       unSecureHash = unSecureHash+key;
// //     //     })
// //     //   })
// //     //   unSecureHash.replace("!@{}$%&*()?#^"," ");
// //     //   const secretKey = "#!@{}$%&*()?#^mynameishammas#!@{}$%&*()?#";
// //     //   const SecureHash = generateHMAC(secretKey, unSecureHash);
      
// //     //   return SecureHash
      
// //     // }

// //     const referenceNumber =()=>{
// //       const ref_number = "T"+User_data.customer_id+User_data.vendor_id;
// //       return ref_number;
// //   }
// //   const billReference =()=>{
// //       const billReference = "Bill"+User_data.customer_id+getDateandTime();;
// //       return billReference;
// //   }
 
// //   function getDateandTime() {
// //     const options = { timeZone: "Asia/Karachi", hour12: false }; // Pakistan Standard Time (PST)
// //     const now = new Date();

// //     const year = new Intl.DateTimeFormat("en", {
// //       ...options,
// //       year: "numeric",
// //     }).format(now);
// //     const month = new Intl.DateTimeFormat("en", {
// //       ...options,
// //       month: "2-digit",
// //     }).format(now);
// //     const day = new Intl.DateTimeFormat("en", {
// //       ...options,
// //       day: "2-digit",
// //     }).format(now);
// //     const hours = new Intl.DateTimeFormat("en", {
// //       ...options,
// //       hour: "2-digit",
// //     }).format(now);
// //     const minutes = new Intl.DateTimeFormat("en", {
// //       ...options,
// //       minute: "2-digit",
// //     }).format(now);
// //     const seconds = new Intl.DateTimeFormat("en", {
// //       ...options,
// //       second: "2-digit",
// //     }).format(now);

// //     return `${year}${month}${day}${hours}${minutes}${seconds}`;
// //   }

// //   function getExpiryDateandTime(offsetMinutes) {
// //     const options = { timeZone: "Asia/Karachi" }; 
// //     const now = new Date();
  
// //     const updatedTime = new Date(now.getTime() + offsetMinutes * 60000);
  
// //     const year = new Intl.DateTimeFormat("en", { ...options, year: "numeric" }).format(updatedTime);
// //     const month = new Intl.DateTimeFormat("en", { ...options, month: "2-digit" }).format(updatedTime);
// //     const day = new Intl.DateTimeFormat("en", { ...options, day: "2-digit" }).format(updatedTime);
// //     const hours = new Intl.DateTimeFormat("en", { ...options, hour: "2-digit", hour12: false }).format(updatedTime);
// //     const minutes = new Intl.DateTimeFormat("en", { ...options, minute: "2-digit" }).format(updatedTime);
// //     const seconds = new Intl.DateTimeFormat("en", { ...options, second: "2-digit" }).format(updatedTime);
  
// //     return `${year}${month}${day}${hours}${minutes}${seconds}`;
// //   }

    


// //     const payment_array = 
// //       {
// //         pp_IsRegisteredCustomer: "yes",
// //         pp_ShouldTokenizeCardNumber: "yes",
// //         // pp_CustomerID: User_data.customer_id,
// //         pp_CustomerEmail: "abc@abc.com",
// //         // pp_CustomerMobile: User_data.phone,
// //         pp_Version: "2.0",
// //         pp_TxnType: "MPAY",
// //         // pp_TxnRefNo: referenceNumber(),
// //         pp_MerchantID: "MC137527",
// //         pp_Password: "4vyb19vv0w",
// //         pp_Amount: "100",
// //         pp_TxnCurrency: "PKR",
// //         pp_TxnDateTime: getDateandTime(),
// //         pp_TxnExpiryDateTime: getExpiryDateandTime(30),
// //         // pp_BillReference: billReference(),
// //         pp_Description: "Description of transaction",
// //         pp_CustomerCardNumber: "5123456789012346",
// //         pp_CustomerCardCVV: "123",
// //         pp_CustomerCardExpiry: "12/22",
// //         pp_SecureHash: "",
// //         pp_DiscountedAmount: "",
// //         pp_DiscountBank: "",
// //         pp_UsageMode: "API",
// //       }

// //       function generateHMAC(secretKey, message, algorithm = 'sha256') {
// //         const hmac = crypto.createHmac(algorithm, secretKey);
// //         hmac.update(message);
      
// //         return hmac.digest('hex');

// //       }
// //       const SecureHash = ()=>{
// //         let unSecureHash= "sv93ug75ww"
// //           Object.values(payment_array).map((key) => {
// //             unSecureHash += "&" +key;
// //           })
// //         const secretKey = "sv93ug75ww";
// //         const SecureHash = generateHMAC(secretKey, unSecureHash);
// //         return SecureHash
        
// //       }
   
// //   // console.log(SecureHash())  
// //  console.log(payment_array)

// //   }
// // };

// // payment();



// function getDateandTime() {
//   // const options = { timeZone: "Asia/Karachi", hour12: false }; // Pakistan Standard Time (PST)
//   // const now = new Date(2024,11,18);
//   // console.log(now.toString())

//   // const year = new Intl.DateTimeFormat("en", {
//   //   ...options,
//   //   year: "numeric",
//   // }).format(now);
//   // const month = new Intl.DateTimeFormat("en", {
//   //   ...options,
//   //   month: "2-digit",
//   // }).format(now);
//   // const day = new Intl.DateTimeFormat("en", {
//   //   ...options,
//   //   day: "2-digit",
//   // }).format(now);
//   // const hours = new Intl.DateTimeFormat("en", {
//   //   ...options,
//   //   hour: "2-digit",
//   // }).format(now);
//   // const minutes = new Intl.DateTimeFormat("en", {
//   //   ...options,
//   //   minute: "2-digit",
//   // }).format(now);
//   // const seconds = new Intl.DateTimeFormat("en", {
//   //   ...options,
//   //   second: "2-digit",
//   // }).format(now);

//   // return `${year}${month}${day}${hours}${minutes}${seconds}`;
//   const options = { timeZone: "Asia/Karachi" }; // Specify time zone
//   const now = new Date();

//   // Format the current date-time considering the timezone
//   const formatter = new Intl.DateTimeFormat("en", {
//     ...options,
//     year: "numeric",
//     month: "2-digit",
//     day: "2-digit",
//     hour: "2-digit",
//     minute: "2-digit",
//     second: "2-digit",
//     hour12: false, // Use 24-hour format
//   });

//   // Decompose the formatted date-time
//   const formattedParts = formatter.formatToParts(now);

//   const year = formattedParts.find((part) => part.type === "year").value;
//   const month = formattedParts.find((part) => part.type === "month").value;
//   const day = formattedParts.find((part) => part.type === "day").value;
//   const hour = formattedParts.find((part) => part.type === "hour").value;
//   const minute = formattedParts.find((part) => part.type === "minute").value;
//   const second = formattedParts.find((part) => part.type === "second").value;

//   return `${year}${month}${day}${hour}${minute}${second}`;


// }

// const date = getDateandTime()

// console.log(date)


let payment_array = 
{
//   pp_IsRegisteredCustomer: "yes",
//   pp_ShouldTokenizeCardNumber: "yes",
//   pp_CustomerID:"Customer"+booking_id,
//   pp_CustomerEmail: "abc@abc.com",
//   pp_CustomerMobile: '03331234567',
//   pp_Version: "1.1",
//   pp_TxnType: "MPAY",
//   pp_TxnRefNo: referenceNumber(),
//   pp_MerchantID: "MC137527",
//   pp_Password: "4vyb19vv0w",
//   pp_Amount: "100",
//   pp_TxnCurrency: "PKR",
//   pp_TxnDateTime: getDateandTime(),
//   pp_TxnExpiryDateTime: getExpiryDateAndTime(30),
//   pp_BillReference: billReference(),
//   pp_Description: "Description",
//   pp_CustomerCardNumber: "5123450000000008",
//   pp_CustomerCardCVV: "100",
//   pp_CustomerCardExpiry: "01/39",
//   pp_SecureHash:'',
//   pp_DiscountedAmount: "",
//   pp_DiscountBank: "",
//   pp_UsageMode: "API",
    pp_CustomerID: "25352",
    pp_CustomerEmail: "abc@abc.com",
    pp_CustomerMobile: "03331234567",
    pp_Version: "1.1",
    pp_TxnType: "MPAY",
    pp_TxnRefNo: "T20241118070725",
    pp_MerchantID: "MC137527",
    pp_Password: "4vyb19vv0w",
    pp_Amount: "100",
    pp_TxnCurrency: "PKR",
    pp_TxnDateTime: "20241118070725",
    pp_TxnExpiryDateTime: "20241118070725",
    pp_BillReference: "billRef",
    pp_Description: "Description of transaction",
    pp_CustomerCardNumber: "5123450000000008",
    pp_CustomerCardCVV: "100",
    pp_CustomerCardExpiry: "01/39",
    pp_SecureHash: "",
    pp_DiscountedAmount: "",
    pp_DiscountBank: "",
    pp_UsageMode: "API"
// F8B3EB994F1DC552BF09157493C1E170A70DC8B5259FA11049D5348F922F9279
// AC5BB15E79045F4B319A1C43EBB26CB41353EF1E1F5CF821F1035A89212F9347
}


const sortObject=()=>{
  const sortedKeys = Object.keys(payment_array).sort();
  const sortedObject = {};
  sortedKeys.forEach((key)=>{
      sortedObject[key] = payment_array[key]
  })

  return sortedObject;
}
// payment_array = sortObject();
// console.log(payment_array);

function generateHMAC(secretKey, message, algorithm = 'sha256') {
  const hmac = crypto.createHmac(algorithm, secretKey);
  hmac.update(Buffer.from(message,'utf-8'));
  return hmac.digest('hex').toUpperCase();

}

const SecureHash = ()=>{
  let unSecureHash= "sv93ug75ww"
    Object.values(payment_array).map((key) => {
      unSecureHash += key+"&";
    })
  unSecureHash = unSecureHash.slice(0,-1);
  unSecureHash = Buffer.from(unSecureHash,'utf-8');
  unSecureHash = unSecureHash.toString('latin1');
  const secretKey = "sv93ug75ww";
  const SecureHash = generateHMAC(secretKey, unSecureHash,'sha256');
  console.log(SecureHash);  
  
} 

SecureHash();
// console.log(payment_array);

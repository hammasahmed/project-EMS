import mongoose from 'mongoose';

// // Define the schema
// const listingSchema = mongoose.Schema({
//     _id: {
//         type: String,
//       },
//       title: {
//         type: String,
//       },
//       description: {
//         type: String,
//       },
//       price: {
//         type: Number,
//       },
//       city: {
//         type: String,
//       },
//       imageUrl: {
//         type: String,
//       },
//       serviceType: {
//         type: String,
//       },
//       serviceType: {
//         type: String,
//       }

    
//         // name: { type: String },
//         // email: { type: String },
//         // password: { type: String }
    

    
// });

// // Create the model
// const listing = mongoose.model('listings', listingSchema); // Model name and schema name should be strings

// // Export the model
// export default listing;



import { Schema, model } from 'mongoose';

const listingSchema = mongoose.Schema({
  _id: {type: String,},
  title: { type: String, required: true },
  description: { type: String },
  lighting: { type: String, enum: ["High", "Medium", "Low"], required: true },
  eventTypes: { type: [String], enum: ["Wedding", "Birthday", "Anniversary", "Mehandi", "Barat", "Walima", "Conference", "Seminar"] },
  groundTypes: { type: [String], enum: ["Football", "Badminton", "Tennis", "Cricket", "Volleyball", "Basketball"] },
  sittingType: { type: String, enum: ["Chevron", "Auditorium", "Banquet", "Boardroom", "Cabaret", "Classroom", "Hollow square", "U-shaped"] },
  venueType: { type: String, enum: ["sports_arena", "banquet_hall", "marquee", "conference_hall", "hotel"], required: true },
  servingType: { type: String, enum: ["Self-Serving", "Full-Serving"] },
  city: { type: String, enum: ["Islamabad", "Ahmed Nager", "Ahmadpur East", "Ali Khan", "Alipur", "Arifwala", "Attock", "Bhera", "Bhalwal", "Bahawalnagar", "Bahawalpur", "Bhakkar", "Burewala"] },
  
  // Newly added fields
  address: { type: String, required: true },
  serviceType: { type: String, enum: ["Indoor", "Outdoor", "Both"] },  // Assuming options for service type
  pricePerPerson: { type: Number, min: 0 },  // Pricing per individual
  servingCapacity: { type: Number, min: 0 },
  parkingCapacity: { type: Number, min: 0 },
  numberOfVIPPersons: { type: Number, min: 0 },
  
  crockery: { type: Boolean, default: false },
  servingStaffAvailability: { type: Boolean, default: false },
  projector: { type: Boolean, default: false },
  acHeating: { type: Boolean, default: false },
  wifi: { type: Boolean, default: false },
  
  imageUrl: { type: String },  // URL of the image
  outdoorCateringAllowance: { type: Boolean, default: false },
  seatingCapacity: { type: Number, min: 0 },

  availability: { type: String, enum: ["Yes", "No"], default: "Yes" },  // Yes or No availability
});

export default model('listing', listingSchema);

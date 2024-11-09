// import mongoose from 'mongoose';

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



// import mongoose from 'mongoose';

// const menuItemSchema = new mongoose.Schema({
//   menu_name: { type: String, required: true },
//   starters: { type: String },
//   mainCourses: { type: String },
//   grilledItems: { type: String },
//   breads: { type: String },
//   desserts: { type: String },
//   beverages: { type: String },
//   menu_price: { type: Number, min: 0 }, // Assuming price is per item
// });

// const listingSchema = new mongoose.Schema({
//   _id: { type: String },
//   title: { type: String, required: true },
//   description: { type: String },
//   address: { type: String, required: true },
//   City: {
//     type: String,
//     enum: [
//       "Islamabad", "Ahmed Nager", "Ahmadpur East", "Ali Khan", "Alipur",
//       "Arifwala", "Attock", "Bhera", "Bhalwal", "Bahawalnagar",
//       "Bahawalpur", "Bhakkar", "Burewala"
//     ]
//   },
//   service_type: { type: String, enum: ["Venue", "Catering"] },
//   venue_type: { type: String, enum: ["sports_arena", "banquet_hall", "marquee", "conference_hall", "hotel"], required: true },
//   event_type: { type: String, required: true },  // Added missing comma and closing brace
//   seating_capacity: { type: Number, min: 0 },
//   sitting_arrangement: { type: String, required: true },  // Added missing comma and closing brace
//   lighting_type: { type: String, enum: ["High", "Medium"], required: true },
//   ServingType: { type: String, enum: ["Self-Serving", "Full-Serving"] },
//   VIP_seats: { type: Number, min: 0 },
//   Inbond_catering: { type: String, enum: ["Yes", "No"], default: "Yes" },
//   outdoor_catering: { type: Boolean, default: false },
//   projector: { type: Boolean, default: false },
//   wifi: { type: Boolean, default: false },
//   ac_heating: { type: Boolean, default: false },
//   parking: { type: Number, min: 0 },
//   serving_capacity: { type: Number, min: 0 },
//   crockery: { type: Boolean, default: false },
//   serving_staff: { type: Boolean, default: false },
//   ground_type: { type: [String], enum: ["Football", "Badminton", "Tennis", "Cricket", "Volleyball", "Basketball"] },
//   price_Per_Person: { type: Number, min: 0 },
//   imageUrl: { type: String },
//   menuItems: { type: [menuItemSchema], default: [] } // Nested schema for menu items
// });

// const listing = mongoose.model('listings', listingSchema);
// export default listing;



import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  reviewer_name: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5, required: true }, // Rating between 1 and 5
  review_content: { type: String, required: true },
  review_date: { type: Date, default: Date.now }
});

const menuItemSchema = new mongoose.Schema({
  menu_name: { type: String },
  starters: { type: String },
  mainCourses: { type: String },
  grilledItems: { type: String },
  breads: { type: String },
  desserts: { type: String },
  beverages: { type: String },
  menu_price: { type: Number }
});

const listingSchema = new mongoose.Schema({
  _id: { type: String },
  title: { type: String },
  description: { type: String },
  address: { type: String },
  City: { type: String },
  service_type: { type: String },
  venue_type: { type: String },
  event_type: { type: String },
  seating_capacity: { type: Number },
  sitting_arrangement: { type: String },
  lighting_type: { type: String },
  ServingType: { type: String },
  VIP_seats: { type: Number },
  Inbond_catering: { type: String },
  outdoor_catering: { type: Boolean },
  projector: { type: Boolean },
  wifi: { type: Boolean },
  ac_heating: { type: Boolean },
  parking: { type: Number },
  serving_capacity: { type: Number },
  crockery: { type: Boolean },
  serving_staff: { type: Boolean },
  ground_type: { type: [String] },
  price_Per_Person: { type: Number },
  imageUrl: { type: String },
  menuItems: { type: [menuItemSchema], default: [] },
  reviews: { type: [reviewSchema], default: [] }  // Adding review functionality
});

const listing = mongoose.model('listings', listingSchema);
export default listing;





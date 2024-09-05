import mongoose from 'mongoose';

// Define the schema
const listingSchema = mongoose.Schema({
    _id: {
        type: String,
      },
      title: {
        type: String,
      },
      description: {
        type: String,
      },
      price: {
        type: Number,
      },
      city: {
        type: String,
      },
      imageUrl: {
        type: String,
      },
      serviceType: {
        type: String,
      },
      serviceType: {
        type: String,
      }

    
        // name: { type: String },
        // email: { type: String },
        // password: { type: String }
    

    
});

// Create the model
const listing = mongoose.model('listings', listingSchema); // Model name and schema name should be strings

// Export the model
export default listing;

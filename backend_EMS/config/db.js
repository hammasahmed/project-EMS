import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const mongoURI = process.env.EMS_DB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected...');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;

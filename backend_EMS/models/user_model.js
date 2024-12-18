import mongoose from "mongoose";
import bcrypt from 'bcrypt';
// import Notification from "./notification.js";
const notificationSchema = new mongoose.Schema({
  message: String,
price: String,
// Add any other fields here
});
const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    role: { type: String, default: 'user' },
    email: String,
    password: String,
    imageUrl: String ,
    notification: { type: [notificationSchema], default: [] } 
  });


  // Pre-save middleware to hash password before saving
userSchema.pre('save', async function (next) {
  const user = this;

  if (user.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  }

  next();
});


  // Create the model
const user = mongoose.model('users', userSchema); // Model name and schema name should be strings

// Export the model
export default user;
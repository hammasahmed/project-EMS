// import { Router } from 'express';
// import user from '../models/user_model.js';
// const router = Router();

// // Define a route for fetching a user by ID
// router.post('/signup', async (req, res) => {
//   try {
//     // Check if the user already exists based on the email
//     const existingUser = await user.findOne({ email: req.body.email });
    
//     if (existingUser) {
//       return res.status(400).send({ error: 'Email already in use' });
      
//     }

//     // If no user is found, proceed to create the new user
//     const newUser = new user(req.body);
//     await newUser.save();
//     res.status(201).send(newUser);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ error: 'Internal server error' });
//   }
// });

// export default router;


import { Router } from 'express';
import jwt from 'jsonwebtoken';  // Import jsonwebtoken to generate JWT
import User from '../models/user_model.js';
const router = Router();

// Define a secret key for signing JWTs
const JWT_SECRET = 'your_jwt_secret_key';  // Use a strong secret key and store it securely

// Define a route for user signup
router.post('/signup', async (req, res) => {
  try {
    // Check if the user already exists based on the email
    const existingUser = await User.findOne({ email: req.body.email });
    
    if (existingUser) {
      return res.status(400).send({ error: 'Email already in use' });
    }

    // If no user is found, proceed to create the new user
    const newUser = new User(req.body);
    await newUser.save();

    // Generate a JWT after the user is created
    const token = jwt.sign({ id: newUser._id, email: newUser.email }, JWT_SECRET, { expiresIn: '1h' });

    // Send the token back to the client
    res.status(201).send({ message: 'Signup successful', token });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Internal server error' });
  }
});

export default router;

// import { Router } from 'express';
// import bcrypt from 'bcrypt';  // Import bcrypt to compare passwords
// import User from '../models/user_model.js';  // Import your User model

// const router = Router();

// // Define a route for user login
// router.post('/login', async (req, res) => {
//   try {
//     // Find the user by email
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(400).send({ error: 'Invalid email or password' });
//     }

//     // Compare the provided password with the stored hashed password
//     const isMatch = await bcrypt.compare(password, user.password);

//     if (!isMatch) {
//       return res.status(400).send({ error: 'Invalid email or password' });
//     }

//     // If everything is good, send a success response
//     // Here you might also want to generate a JWT token and send it
//     res.status(200).send({ message: 'Login successful', user });

//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ error: 'Internal server error' });
//   }
// });

// export default router;


import { Router } from 'express';
import bcrypt from 'bcrypt';  // Import bcrypt to compare passwords
import jwt from 'jsonwebtoken';  // Import jsonwebtoken to generate JWT
import User from '../models/user_model.js';  // Import your User model

const router = Router();

// Define a secret key for signing JWTs
const JWT_SECRET = 'your_jwt_secret_key';  // Use a strong secret key and store it securely

// Define a route for user login
router.post('/login', async (req, res) => {
  try {
    // Find the user by email
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).send({ error: 'Invalid email or password' });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).send({ error: 'Invalid email or password' });
    }

    // If everything is good, generate a JWT
    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });

    // Send the token back to the client
    res.status(200).send({ message: 'Login successful', token });

  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Internal server error' });
  }
});



router.get('/user/:id', async (req, res) => {
  try {
      const userId = req.params.id;
      const user = await User.findById(userId);

      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }

      res.json(user);
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
  }
});

export default router;

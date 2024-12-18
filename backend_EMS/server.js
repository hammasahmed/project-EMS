import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import bodyParser from 'body-parser';

// IMPORTING ROUTES
import userSignup from './routes/user_signup.js';
import userLogin from './routes/user_login.js'
import listingsRoutes from './routes/listings_routes.js';
import bookings from './routes/user_bookings.js'
import { configDotenv } from 'dotenv';

const app = express();

// Connect to MongoDB
connectDB();

// USING MIDDLEWARES
app.use(cors()); // Use CORS before routes
app.use(express.json()); // Built-in middleware for JSON parsing

// Optionally, use body-parser for URL-encoded data
//  Using Middllware 


app.use(bodyParser.urlencoded({ extended: true }));

// USING ROUTES
app.use('/', userSignup);
app.use('/', listingsRoutes);
app.use('/',userLogin )

app.use('/',bookings)

app.get('/',  (req, res)=> {
  res.send('hell is bad');
});

const port = process.env.PORT || 3000
app.listen( port, () => {
  console.log(`Server is running on port ${port}`);
});
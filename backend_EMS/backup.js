// import express from 'express';
// import path from 'path';
// import cors from 'cors';
// import { fileURLToPath } from 'url';  // Necessary for __dirname in ES modules
// import { dirname } from 'path';
// import mongodb from 'mongodb'
// import { MongoClient } from 'mongodb';

// import dotenv from 'dotenv'

// const app = express();
// //middlewares:
// app.use(cors());
// app.use(express.json())

// dotenv.config()
// const MongoClient = mongodb.MongoClient
// MongoClient.connect(process.env.EMS_DB_URI,
//     {   
//         maxPoolSize:50,
//         wtimeout:2500,
//         useNewUrlParser: true,
//     },
// )
// .catch(err => {console.error(err.stack)
//     process.exit(1)
// })
// // Setting up __dirname in ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// app.get('/listings', (req, res) => {
//     const filePath = path.join(__dirname, 'listings.json');  // Use path to create the file path
//     res.sendFile(filePath, (err) => {
//         if (err) {
//             res.status(500).json({ error: 'Failed to send the file' });
//         }
//     });
// });

// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

import express, { Router } from 'express';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';  // Necessary for __dirname in ES modules
import { dirname } from 'path';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import { send } from 'process';
import mongoose from 'mongoose';

dotenv.config();

const app = express();

mongoose.connect('')

const userschema = mongoose.Schema({
    username: string,
     email: string,
    
     message: string,

})
mongoose.model(user, userschema)
// Middlewares
app.use(cors());
app.use(express.json());


// MongoDB Connection
const uri = process.env.EMS_DB_URI;

if (!uri) {
    console.error("EMS_DB_URI is not defined in the .env file.");
    process.exit(1);
}

const client = new MongoClient(uri, {
    maxPoolSize: 50,
    wtimeoutMS: 2500,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

async function connectToDatabase() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");

        // Start server after successful DB connection
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (err) {
        console.error("Failed to connect to MongoDB", err);
        process.exit(1);
    }
}
Router.post("/crud", function(req,res)
{
    const {username, email, message} = req.body

    

})



// Call the async function to connect to the database and start the server
connectToDatabase();

// Setting up __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Route to send listings.json
app.get('/listings', (req, res) => {
    const filePath = path.join(__dirname, 'listings.json');  // Use path to create the file path
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({ error: 'Failed to send the file' });
        }
    });
});

import { Router } from 'express';
import listing from '../models/listing_model.js';

const router = Router();

// ROUTE FOR GETTING ALL listings
router.get('/listings', async (req, res) => {
  try {
    const listings = await listing.find();  // Fetching all listings from the database
    res.json(listings);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
// ROUTE FOR GETTING A SPECIFIC listing BY ID
router.get('/listings/:id', async (req, res) => { // change `:_id` to `:id`
  try {
    const listingId = req.params.id;
    const listing = await listing.findById(listingId);
    
    if (!listing) {
      return res.status(404).send('Listing not found');
    }
    
    res.json(listing);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Route for creating a new listing
router.post('/listings', async (req, res) => {
    try {
        const listings = new listing(req.body);
        await listings.save();
        res.status(201).send(listings);
    } catch (error) {
        res.status(400).send(console.log(error));
    }
});

// Route for updating a listing by ID
router.put('/listing/:id', (req, res) => {
  const listingId = req.params.id;
  res.send(`listing ID: ${listingId} updated`);
});

// Route for deleting a listing by ID
router.delete('/listing/:id', (req, res) => {
  const listingId = req.params.id;
  res.send(`listing ID: ${listingId} deleted`);
});

export default router;

import { Router } from 'express';
import listing from '../models/listing_model.js';
import user from '../models/user_model.js';

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
        // listing.populate({path: 'vendor_id', model: 'user', select: 'name'});
        const listings = new listing(req.body);
        await listings.save();
        console.log(listings);
        res.status(201).send(listings);
    } catch (error) {
        res.status(400).send(console.log(error));
    }
});

// Route for updating a listing by ID
router.put('/update/:id', async (req, res) => {
  const { id } = req.params; // Get the ID from the route parameter
  const updateData = req.body; // Get the updated data from the request body

  try {
      const updatedDocument = await listing.findByIdAndUpdate(
          id, 
          updateData, 
          { new: true } // `new: true` ensures the returned document is the updated one
      );

      if (!updatedDocument) {
          return res.status(404).json({ message: 'Document not found' });
      }

      res.status(200).json({ message: 'Document updated successfully', updatedDocument });
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
  }
});


// Route for deleting a listing by ID
router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;

  try {
      const result = await listing.findByIdAndDelete(id);

      if (!result) {
          return res.status(404).json({ message: 'Document not found' });
      }

      res.status(200).json({ message: 'Document deleted successfully' });
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
  }
});


router.get('/listings/vendor/:vendor_id', async (req, res) => {
  const { vendor_id } = req.params;  // Extract vendor_id from route parameters

  try {
    const listings = await listing.find({ vendor_id }); // Find listings with matching vendor_id
    res.json(listings);
  } catch (error) {
    res.status(500).send(error.message);
  }
});


router.post('/listings/:id/add-review', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, comment, stars } = req.body;
    console.log(req.body);
    // Validate that stars are within the allowed range
    if (stars < 0 || stars > 5) {
      return res.status(400).json({ message: 'Stars must be between 0 and 5' });
    }

    // Find listing by ID and add a new review
    const updatedListing = await listing.findByIdAndUpdate(
      id,
      {
        $push: {                                                                                              
          reviews: { name, comment, stars }
        }
      },
      { new: true }
    );

    res.json(updatedListing);
  } catch (error) {
    console.error("Error adding review:", error);
    res.status(500).json({ message: 'Internal server error' });
  }
});



export default router;

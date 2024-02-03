  const express = require('express');
  const router = express.Router();
  const Complaint = require('../models/ComplaintSent'); // Import your Complaint model here

  // Route 1: Get all complaints
  router.get('/fetchallcomplaints', async (req, res) => {
    try {
      const complaints = await Complaint.find();
      res.json(complaints);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  // Route 2: Add a new complaint
  router.post('/addcomplaint', async (req, res) => {
    try {
      const {
        name,
        block,
        roomNumber,
        mobileNumber,
        email,
        issueType,
        description,
      } = req.body;

      // Basic validation to check required fields
      // if (!name || !block || !roomNumber || !mobileNumber || !email || !issueType || !description) {
      //   return res.status(400).json({ error: 'All fields are required.' });
      // }

      // Additional validation can be added based on your requirements

      const complaint = new Complaint({
        name,
        block,
        roomNumber,
        mobileNumber,
        email,
        issueType,
        description,
      });
      const savedComplaint = await complaint.save();
      res.json(savedComplaint);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
// Route 3: Delete a complaint by ID
router.delete('/deletecomplaint/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Check if the complaint with the given ID exists
    const existingComplaint = await Complaint.findById(id);
    if (!existingComplaint) {
      return res.status(404).json({ error: 'Complaint not found' });
    }

    // Delete the complaint
    await existingComplaint.remove();
     await existingComplaint.findByIdAndDelete(req.params.id)


    res.json({ message: 'Complaint deleted successfully' });
  } catch (error) {
        console.log("Deleting process")

    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

  module.exports = router;

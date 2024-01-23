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
      console.log('Received issueType:', issueType);

      const savedComplaint = await complaint.save();
      res.json(savedComplaint);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  module.exports = router;

const mongoose = require('mongoose');
const { Schema } = mongoose;

const validIssueTypes = ['Missing Item', 'Electricity Issue', 'Cleanliness Issue', 'Water Leak', 'Other']; // Define your valid issue types

const ComplaintSchema = new Schema({
  name: { type: String, required: true },
  block: { type: String, required: true },
  roomNumber: { type: Number, required: true},
  mobileNumber: { type: Number, required: true},
  email: { type: String, required: true },
  issueType: {
    type: [{
      type: String,
      enum: validIssueTypes, // Specify the valid issue types using enum
    }],
    required: true,
  },
  description: { type: String },
}, { timestamps: true }); // Adds createdAt and updatedAt fields

const Complaint = mongoose.model('Complaint', ComplaintSchema);

module.exports = Complaint;

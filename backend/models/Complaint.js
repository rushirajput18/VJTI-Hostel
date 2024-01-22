const mongoose = require('mongoose');

const ComplaintSchema = new mongoose.Schema({
  name: { type: String, required: true },
  block: { type: String, required: true },
  roomNumber: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  emailID: { type: String, required: true },
  issueType: { type: [String], required: true },
  description: { type: String, required: true },
  availability: { type: Date, default: Date.now },
});

const Complaint = mongoose.model('Complaint', ComplaintSchema);

module.exports = Complaint;

const mongoose = require('mongoose');
const { Schema } = mongoose;

const ComplaintSchema = new Schema({
  name: { type: String, required: true },
  block: { type: String, required: true },
  roomNumber: { type: Number, required: true},
  mobileNumber: { type: Number, required: true},
  email: { type: String, required: true },
  issueType: { type: String, required: true },
  description: { type: String },
}, { timestamps: true }); // Adds createdAt and updatedAt fields

const Complaint = mongoose.model('Complaint', ComplaintSchema);

module.exports = Complaint;

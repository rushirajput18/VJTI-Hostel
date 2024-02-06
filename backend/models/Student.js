const mongoose = require('mongoose');
const { Schema } = mongoose;

const StudentSchema = new Schema({
  Student_ID: { type: String, required: true, unique: true },
  Name: { type: String, required: true },
  Email:{type: String},
  Gender: { type: String },
  Home_Address: { type: String },
  Phone_Number: { type: String },
  Parent_Phone_Number: { type: String },
  Hostel_Room_No: { type: String }
});

module.exports = mongoose.model('Students', StudentSchema);
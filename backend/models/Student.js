const mongoose = require('mongoose');
const { Schema } = mongoose;

const StudentSchema = new Schema({
  Student_ID: { type: Number, required: true, unique: true },
  Name: { type: String, required: true },
  Gender: { type: String },
  Home_Address: { type: String },
  Phone_Number: { type: String },
  Parent_Phone_Number: { type: String },
  Hostel_Block: { type: String }
});

module.exports = mongoose.model('Students', StudentSchema);

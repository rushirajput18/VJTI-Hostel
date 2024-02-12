const mongoose = require('mongoose');
const { Schema } = mongoose;

const AdmissionSchema = new Schema({
  email:{type: String, required:true},
  fullName: { type: String, required: true },
  dateOfBirth:{type: Date, required: true },
  gender:{type: String, required: true},
  mobileNumber:{type: Number, required: true},
  regId: { type: Number, required: true },
  year:{type: String, required: true},
  branch:{type: String, required: true},
  homeAddress:{type: String, required: true},

  status:{type: String}
});

module.exports = mongoose.model('Admissions',AdmissionSchema);

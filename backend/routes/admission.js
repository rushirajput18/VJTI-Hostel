const express = require('express');
const router = express.Router();
const Student = require('../models/Admission'); // Import your Student model here
const Admissions = require('../models/Admission');

// Route 1: Get all students
router.get('/fetchallstudents', async (req, res) => {
  try {
    const students = await Admissions.find();
    res.json(students);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route 2: Add a new student
router.post('/addadmission', async (req, res) => {
  try {
    const { email, fullName, dateOfBirth, gender, mobileNumber, regId, year, branch, homeAddress } = req.body;
    const student = new Admissions({
      email,
      fullName,
      dateOfBirth,
      gender,
      mobileNumber,
      regId,
      year,
      branch,
      homeAddress,
    });
    const savedStudent = await student.save();
    res.json(savedStudent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route 3: Update an existing student
router.put('/updatestudent/:id', async (req, res) => {
  const {status } = req.body;

  try {
    const updatedStudent = {
      status
    };
    
    const student = await Student.findByIdAndUpdate(req.params.id, updatedStudent, { new: true });

    if (!student) {
      return res.status(404).send('Student not found');
    }

    res.json(student);
  } catch (error) {
    // console.error(error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// // Route 4: Delete an existing student
// router.delete('/deletestudent/:id', async (req, res) => {
//   try {
//     const student = await Student.findByIdAndDelete(req.params.id);

//     if (!student) {
//       return res.status(404).send('Student not found');
//     }

//     res.json({ success: 'Student has been deleted', student });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

module.exports = router;
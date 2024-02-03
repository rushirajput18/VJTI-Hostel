const express = require('express');
const router = express.Router();
const Student = require('../models/Student'); // Import your Student model here

// Route 1: Get all students
router.get('/fetchallstudents', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route 2: Add a new student
router.post('/addstudent', async (req, res) => {
  try {
    const { Student_ID, Name,Email, Gender, Home_Address, Phone_Number, Parent_Phone_Number, Hostel_Room_No } = req.body;
    
    const student = new Student({
      Student_ID,
      Name,
      Email,
      Gender,
      Home_Address,
      Phone_Number,
      Parent_Phone_Number,
      Hostel_Room_No,
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
  const { Student_ID, Name, Email, Gender, Home_Address, Phone_Number, Parent_Phone_Number, Hostel_Room_No } = req.body;

  try {
    const updatedStudent = {
      Student_ID,
      Name,
      Email,
      Gender,
      Home_Address,
      Phone_Number,
      Parent_Phone_Number,
      Hostel_Room_No,
    };

    const student = await Student.findByIdAndUpdate(req.params.id, updatedStudent, { new: true });

    if (!student) {
      return res.status(404).send('Student not found');
    }

    res.json(student);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route 4: Delete an existing student
router.delete('/deletestudent/:id', async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);

    if (!student) {
      return res.status(404).send('Student not found');
    }

    res.json({ success: 'Student has been deleted', student });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
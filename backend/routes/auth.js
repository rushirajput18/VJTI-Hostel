const express = require("express");
const router = express.Router();
// const User = require("../models/User");
const User = require("../models/Admin");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const session = require("express-session");
var fetchuser = require("../middleware/fetchuser");
const app = express();
const JWT_SECRET = "Harryisagoodb$oy";
const secret = 'asdfqwertyuiop';

router.use(
  session({
    secret: "Harryisagoodb$oy",
    resave: false,
    saveUninitialized: true,
  })
);

router.post('/register', async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const salt = await bcrypt.genSalt(10); // Generate salt before hashing
    const hashedPassword = await bcrypt.hash(password, salt); // Hash the password using the generated salt
    
    const userDoc = await User.create({ 
      name,
      email, 
      password: hashedPassword, // Use the hashed password
      role
    });

    res.json(userDoc);
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
});
// authenticate a user
router.post('/login', async (req, res) => {
  const { email, password, role } = req.body;
  try {
    const userDoc = await User.findOne({ email });
    if (!userDoc) {
      return res.status(404).json({ message: "User not found" });
    }
    
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (!passOk) {
      return res.status(401).json({ message: "Invalid password" });
    }
    
    // Check if the entered role matches the user's role
    if (role && role !== userDoc.role) {
      return res.status(401).json({ message: "Invalid role" });
    }
    
    const tokenPayload = {
      email,
      id: userDoc._id,
      role: userDoc.role,
    };
    console.log(secret)
    jwt.sign(tokenPayload, secret, {}, (err, token) => {
      if (err) {
        console.error(err); // Log the error
        return res.status(500).json({ message: "Internal server error" }); // Return an error response
      }
      res.cookie('token', token).json({
        id: userDoc._id,
        email,
        role: userDoc.role,
      });
    });
  } catch (error) {
    console.error(error); // Log any unexpected errors
    res.status(400).json({ message: "An error occurred" });
  }
});

//route 3 getting logged in user details
router.post("/getuser", fetchuser, async (req, res) => {
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});
module.exports = router;

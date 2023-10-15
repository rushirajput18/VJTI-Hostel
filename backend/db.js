const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/VJTIhostel"; //dont use localhost as the link provided by mongodb compass 

const connectToMongo = async () => { //new method old one doesnt work
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectToMongo;

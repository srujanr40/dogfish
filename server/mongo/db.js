const mongoose = require('mongoose');
require('dotenv').config();

const user = "edvin"
const password = "455love"

// Connect to MongoDB database
const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${user}:${password}@cluster0.hmoaarw.mongodb.net/?retryWrites=true&w=majority`);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed', error);
    // Exit process if unable to connect to the database
    process.exit(1);
  }
};

module.exports = connectDB;
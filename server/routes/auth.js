const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const Profile = require('../mongo/models/profileModel.js')



router.post('/', async (req, res) => {
    try {
      const { email, password } = req.body;

      const existingProfile = await Profile.findOne({ email });
      if (existingProfile) {
        return res.status(400).json({ error: 'Email already registered' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

    
      const newProfile = new Profile({
        email,
        password: hashedPassword,
        name: '',
        equipment: [],
        interests: [],
        location: '',
        image: ''
      });
  
      await newProfile.save();
  
      res.status(200).json({ message: 'Account created successfully', profile: newProfile });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });

  router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const profile = await Profile.findOne({ email });
      if (!profile) {
        return res.status(400).json({ error: 'Invalid email or password' });
      }
  
      // Compare the provided password with the hashed password stored in the database
      const passwordMatch = await bcrypt.compare(password, profile.password);
      if (!passwordMatch) {
        return res.status(400).json({ error: 'Invalid email or password' });
      }
  
      res.status(200).json({ message: 'Login successful', profile });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });  
  
  module.exports = router;

module.exports = router;

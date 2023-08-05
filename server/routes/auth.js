const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const sgMail = require('@sendgrid/mail');


const SENDGRID_API_KEY = process.env.REACT_APP_SENDGRID_API;

sgMail.setApiKey(SENDGRID_API_KEY);


const Profile = require('../mongo/models/profileModel.js')



router.post('/', async (req, res) => {
    try {
      const { email, password } = req.body;

      const existingProfile = await Profile.findOne({ email });
      if (existingProfile) {
        return res.status(400).json({ error: 'Email already registered' });
      }

      const msg = {
        to: email,
        from: 'grewaltaqdeer1@gmail.com', // Set your sender email here
        subject: 'Welcome to Our Website Dogfish',
        html: `<h1>Welcome to dogFish!</h1><p> We are <strong>excited</strong> to have you on board.</p>`,
      };

    await sgMail.send(msg);

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
  
      res.status(201).json({ message: 'Account created successfully and verification email sent to your email' });
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
      console.log(profile);
  
      // Compare the provided password with the hashed password stored in the database
      const passwordMatch = await bcrypt.compare(password, profile.password);
      if (!passwordMatch) {
        return res.status(400).json({ error: 'Invalid email or password' });
      }
  
      res.status(200).json({ message: 'Login successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });  
  
  module.exports = router;

module.exports = router;

const express = require('express');
const profileQueries = require('../mongo/queries/profileQueries');
const router = express.Router();

var oldProfile = {
    name: 'Taqdeer',
    equipment: ['Rackets'],
    interests: ['Handball', 'Badminton'],
    location: 'Vancouver',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTiYqZov0ldg_3RvHvEAnc98CAcPe9XrCcOFdzguShdQ&s"
} 

var profile = {
    name: '',
    equipment: [],
    interests: [],
    location: '',
    image: ""
}


// GET profile data
router.get('/', async function (req, res, next) {
    const email = req.query.email;

    if (!email) {
        return res.status(400).send('Email parameter is missing.');
    }

    try {
        const profile = await profileQueries.getProfileByEmail(email);
        if (!profile) {
            return res.status(404).send('Profile not found.');
        }
        return res.status(200).send(profile);
    } catch (err) {
        return res.status(500).send('Internal server error.');
    }
});


// UPDATE profile data
router.patch('/', async function (req, res, next) {
    profile = {
        name: req.body.name,
        equipment: req.body.equipment,
        interests: req.body.interests,
        location: req.body.location,
        image: req.body.image
    }
    await profileQueries.updateProfile(req.body);
    return res.status(201).send(profile);
});

module.exports = router;
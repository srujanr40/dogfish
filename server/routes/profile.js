const express = require('express');
const router = express.Router();

var profile = {
    name: 'Taqdeer',
    equipment: ['Rackets'],
    interests: ['Handball', 'Badminton'],
    location: 'Vancouver',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTiYqZov0ldg_3RvHvEAnc98CAcPe9XrCcOFdzguShdQ&s"
} 


// GET profile data
router.get('/', function (req, res, next) {
    return res.status(200).send(profile);
});

// UPDATE profile data
router.patch('/', function (req, res, next) {
    profile = req.body
    return res.status(201).send(profile);
});

module.exports = router;
const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    equipment: {
        type: [String],
        required: true,
    },
    interests: {
        type: [String],
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
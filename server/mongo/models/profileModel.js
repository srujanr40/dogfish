const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: false
    },
    equipment: {
        type: [String],
        required: false,
    },
    interests: {
        type: [String],
        required: false,
    },
    location: {
        type: String,
        required: false,
    },
    image: {
        type: String,
        required: false,
    },
    verificationCode: {
        type: String,
        required: false,
    }
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
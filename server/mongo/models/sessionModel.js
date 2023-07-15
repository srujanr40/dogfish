const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    equipment: {
        type: [String],
        required: true,
    },
    playersNeeded: {
        type: Number,
        required: true,
    },
    groupId: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
    },
    sport: {
        type: String,
        required: true,
    },
    members: {
        type: [String],
        required: true,
    },
    dateTime: {
        type: Date,
        required: true,
    }
});

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;
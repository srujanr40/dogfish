const mongoose = require('mongoose');
const { Schema } = mongoose;

const sessionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false,
    },
    city: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    location_coordinates: {
        // Use the GeoJSON Point type for geospatial coordinates
        type: {
            type: String,
            enum: ['Point'],
            default: 'Point',
            required: true,
        },
        coordinates: {
            type: [Number], // Array of [longitude, latitude]
            required: true,
        },
    },
    equipment: {
        type: [Schema.Types.Mixed],
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
        type: [],
        required: true,
    },
    owner: {
        type: String,
        required: false
    },
    dateTime: {
        type: Date,
        required: true,
    }
});

// Create a 2dsphere index on the location field for geospatial queries
sessionSchema.index({ location: '2dsphere' });

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;

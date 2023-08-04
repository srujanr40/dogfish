const Session = require('../models/sessionModel');
const getGeocode = require('../queries/apis/google_api')

const sessionQueries = {
    getSessions: async function (filter) {
        let sessions;
        if (filter.filter === '') {
          sessions = await Session.find();
        } else {
          const regex = new RegExp(filter.filter, 'i');
          sessions = await Session.find({ sport: { $regex: regex } });
        }
        if (!sessions || sessions.length === 0) {
          sessions = [];
        }
        return sessions;
      },
    getNearBySessions: async function(location) {
        const geocodeResult = await getGeocode(location.location);
        if (!geocodeResult) {
          console.error('Invalid location data.');
          return [];
        }
      
        try {
          const distanceThreshold = 10000;
          const userLongitude = geocodeResult.longitude;
          const userLatitude = geocodeResult.latitude;
      
          // Convert the distance in meters to radians (for use with $geoWithin)
          const distanceInRadians = distanceThreshold / 6371000; // 6371000 is the approximate radius of the Earth in meters
      
          const sessions = await Session.find({
            location_coordinates: {
              $geoWithin: {
                $centerSphere: [[userLongitude, userLatitude], distanceInRadians]
              }
            }
          });
          return sessions;
        } catch (error) {
          console.error('Error fetching nearby sessions:', error);
          return null;
        }
    },      
    addSession: async function (session) {
        const geocodeResult = await getGeocode(session.location);
        if (!geocodeResult) {
          console.error('Invalid location data.');
        }
      
        const { longitude, latitude } = geocodeResult;
      
        const newSession = new Session({
          name: session.name,
          description: session.description,
          city: session.city,
          location: session.location,
          location_coordinates: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          equipment: session.equipment,
          playersNeeded: session.playersNeeded,
          groupId: session.groupId,
          image: session.image,
          sport: session.sport,
          members: session.members,
          dateTime: session.dateTime,
        });
      
        newSession
          .save()
          .then((savedSession) => {
            console.log('Session saved:', savedSession);
          })
          .catch((error) => {
            console.error('Error saving session:', error);
          });
    },
    updateSession: async function (session) {
        Session.findOneAndUpdate(
            { groupId: session.groupId },
            {
                name: session.name,
                description: session.description,
                city: session.city,
                location: session.location,
                location_coordinates: session.location_coordinates,
                equipment: session.equipment,
                playersNeeded: session.playersNeeded,
                image: session.image,
                sport: session.sport,
                members: session.members,
                owner: session.owner,
                dateTime: session.date
            },
            { new: true })
            .then((updatedSession) => {
                console.log('Session updated:', updatedSession);
            })
            .catch((error) => {
                console.error('Error updating session:', error);
            });
    },
    deleteSession: async function (groupId) {
        Session.findOneAndDelete({ groupId: groupId })
            .then((deletedSession) => {
                console.log('Session deleted:', deletedSession);
            })
            .catch((error) => {
                console.error('Error deleting session:', error);
            });
    }
}


module.exports = sessionQueries;
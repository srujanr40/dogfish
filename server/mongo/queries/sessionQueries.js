const Session = require('../models/sessionModel');
const axios = require('axios');

const getGeocode = async (address) => {
    try {
      const apiUrl = 'https://maps.googleapis.com/maps/api/geocode/json';
  
      const response = await axios.get(apiUrl, {
        params: {
          address,
          key: "AIzaSyDK3owllk7Xn-ZzsAHRjZ3YzZx_4DRMVV0",
        },
      });
  
      if (response.data.status === 'OK') {
        const result = response.data.results[0];
        const { lat, lng } = result.geometry.location;
        return { latitude: lat, longitude: lng };
      } else {
        throw new Error('Geocoding API returned an error.');
      }
    } catch (error) {
      console.error('Error getting geocode:', error.message);
      return null;
    }
  };

const sessionQueries = {
    getSessions: async function (filter) {
        let sessions;
        if(filter.filter == ''){
            sessions = await Session.find()
        }
        else{      
            sessions = await Session.find({ sport: filter.filter });
        }
        if (sessions === null) {
            profile = [];
        }
        return sessions;
    },
    getNearBySessions: async function() {
        console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&")
        const geocodeResult = await getGeocode('Vancouver');
        if (geocodeResult) {
            console.log(geocodeResult.latitude)
            console.log(geocodeResult.longitude)
        } else return [];
        try {
            const distanceThreshold = 5000;
            const userLongitude = geocodeResult.longitude;
            const userLatitude = geocodeResult.latitude;
          
            // Convert the distance in meters to radians (for use with $geoWithin)
            const distanceInRadians = distanceThreshold / 6371000; // 6371000 is the approximate radius of the Earth in meters
          
            const sessions = await Session.find({
              city: {
                $geoWithin: {
                  $centerSphere: [[userLongitude, userLatitude], distanceInRadians]
                }
              }
            });
            console.log(sessions)
            return sessions;
          } catch (error) {
            console.error('Error fetching nearby sessions:', error);
            return null;
          }
        // let sessions = await Session.find();
        // return sessions;
    },
    addSession: async function (session) {
        const newSession = new Session({
            name: session.name,
            description: session.description,
            city: session.city,
            location: session.location,
            equipment: session.equipment,
            playersNeeded: session.playersNeeded,
            groupId: session.groupId,
            image: session.image,
            sport: session.sport,
            members: session.members,
            dateTime: session.dateTime
        });
        newSession.save()
            .then((savedSession) => {
                console.log('Session saved:', savedSession);
            })
            .catch((error) => {
                console.error('Error saving session:', error);
            })
    },
    updateSession: async function (session) {
        Session.findOneAndUpdate(
            { groupId: session.groupId },
            {
                name: session.name,
                description: session.description,
                city: session.city,
                location: session.location,
                equipment: session.equipment,
                playersNeeded: session.playersNeeded,
                image: session.image,
                sport: session.sport,
                members: session.members,
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
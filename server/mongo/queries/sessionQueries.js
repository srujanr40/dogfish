const Session = require('../models/sessionModel');

const sessionQueries = {
    getSessions: async function (filter) {
        let sessions = await Session.find(filter);
        if (sessions === null) {
            profile = [];
        }
        return sessions;
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
            owner: session.owner,
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
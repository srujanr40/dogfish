const Chat = require('../models/chatModel');

const sessionQueries = {
    getChats: async function (filter) {
        let chats = await Chat.find(filter);
        if (chats === null) {
            chats = [];
        }
        return chats;
    },
    addChat: async function (chat) {
        const newChat = new Chat({
            lastModified: chat.lastModified,
            groupId: chat.groupId,
            chats: chat.chats
        });
        newChat.save()
            .then((savedSession) => {
                console.log('Chat saved:', savedSession);
            })
            .catch((error) => {
                console.error('Error saving chat:', error);
            })
    },
    updateChat: async function (chat) {
        Chat.findOneAndUpdate(
            { groupId: chat.groupId },
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
    }
}


module.exports = sessionQueries;
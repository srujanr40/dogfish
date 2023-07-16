const Chat = require('../models/chatModel');

const chatQueries = {
    getChats: async function (filter) {
        let chats = await Chat.find(filter);
        if (chats === null) {
            chats = [];
        }
        return chats;
    },
    createNewChat: async function (chat) {
        const newChat = new Chat({
            lastModified: chat.lastModified,
            groupId: chat.groupId,
            chats: chat.chats
        });
        newChat.save()
            .then((savedChat) => {
                console.log('Chat saved:', savedChat);
            })
            .catch((error) => {
                console.error('Error saving chat:', error);
            })
    },
    updateChat: async function (chat) {
        const newChat = chat.chat
        Chat.findOne({groupId: chat.groupId})
            .then(chatGroup => {
                if(chatGroup === null) {
                    chatGroup = []
                }
                chatGroup.chats.push(newChat); // Add the new chat to the chats array
                chatGroup.lastModified = new Date()

                chatGroup.save()
                    .then(updatedChatGroup => {
                        console.log('Chat updated:', updatedChatGroup);
                    })
                    .catch(error => {
                        console.error('Error updating chat:', error);
                    })
                    .catch(error => {
                        console.error(error);
                    });
            })
    }
}


module.exports = chatQueries;
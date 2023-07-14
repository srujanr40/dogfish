const Chat = require('../models/chatModel');

const chatQueries = {
    getChats: async function (filter) {
        console.log('heller')
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
        // console.log("create new")
        // console.log(chat)
        newChat.save()
            .then((savedSession) => {
                console.log('Chat saved:', savedSession);
            })
            .catch((error) => {
                console.error('Error saving chat:', error);
            })
    },
    updateChat: async function (chat) {
        const newChat = chat.chat

        console.log(chat.groupId)
        Chat.findOne({groupId: chat.groupId})
            .then(chatGroup => {
                if(chatGroup === null) {
                    chatGroup = []
                    console.log('anani')
                }
                chatGroup.chats.push(newChat); // Add the new chat to the chats array
                chatGroup.lastModified = new Date()

                console.log("updated")

                console.log(chatGroup)
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
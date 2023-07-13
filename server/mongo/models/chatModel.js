const mongoose = require('mongoose');

const chatsSchema = new mongoose.Schema({
    position: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
});


const chatSchema = new mongoose.Schema({
    lastModified: {
        type: Date,
        required: true
    },
    groupId: {
        type: String,
        required: true,
    },
    chats: {
        type: chatsSchema,
        required: true,
    }
});


const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;
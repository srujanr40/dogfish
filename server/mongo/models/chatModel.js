const mongoose = require('mongoose');

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
        type: Array,
        required: true,
    }
});


const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;
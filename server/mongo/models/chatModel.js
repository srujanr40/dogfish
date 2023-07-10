const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    groupId: {
        type: Number,
        required: true
    },
    chat: {
        type: [],
        required: true,
    }
});

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;
const mongoose = require('mongoose');

const forumSchema = new mongoose.Schema({
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


const Forum = mongoose.model('Forum', forumSchema);

module.exports = Forum;
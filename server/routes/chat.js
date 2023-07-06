const express = require('express');
const router = express.Router();

let chats = [
    {
        groupId: 1,
        chat: [
            {
                position: "left",
                type: "text",
                title: "Kursat",
                text: "Hey everyone!",
                date: new Date()
            },
            {
                position: 'left',
                type: 'text',
                title: "Bob",
                text: 'Hello, I have some equipment we can use',
                date: new Date(),
            },
            {
                position: 'left',
                type: 'text',
                title: "Michael",
                text: 'Great, good to hear!',
                date: new Date()
            }
        ]
    },
    {
        groupId: 2,
        chat: [
            {
                position: "left",
                type: "text",
                title: "Richard",
                text: "Hello!",
                date: new Date()
            },
            {
                position: 'left',
                type: 'text',
                title: "Keith",
                text: 'Hi!',
                date: new Date()
            },
            {
                position: 'left',
                type: 'text',
                title: "Michael",
                text: 'Heyy',
                date: new Date()
            }
        ]
    }
]

// GET chat
router.get('/', function (req, res, next) {
    return res.status(200).send(chats);
});

// ADD chat
router.post('/', function (req, res, next) {
    chats = chats.map(chatGroup => {
        if (chatGroup.groupId == req.body.groupId) {
            return {
                ...chatGroup,
                chat: [...chatGroup.chat, req.body.chat]
            };
        }
        return chatGroup;
    })

    return res.status(200).send(chats);
});

module.exports = router;

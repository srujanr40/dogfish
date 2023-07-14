const express = require('express');
const chatQueries = require("../mongo/queries/chatQueries");
const profileQueries = require("../mongo/queries/profileQueries");
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
router.get('/', async function (req, res, next) {
    if (req.query.groupId) {
        let filteredChat = await chatQueries.getChats({groupId: req.query.groupId});
        return res.status(200).send(filteredChat);
    }
    let chats = await chatQueries.getChats({});
    // console.log("getChats")
    // console.log(chats)
    return res.status(200).send(chats);
});

// ADD chat
router.post('/', async function (req, res, next) {
    const newChat = req.body;

    await chatQueries.createNewChat(newChat);
    return res.status(200).send(newChat);
});

// UPDATE chat
router.patch('/', async function (req, res, next) {
    const newMessage = req.body;
    const updatedChat = await chatQueries.updateChat(newMessage);
    return res.status(201).send(updatedChat);
});

module.exports = router;

const express = require('express');
const chatQueries = require("../mongo/queries/chatQueries");
const router = express.Router();

// GET chat
router.get('/', async function (req, res, next) {
    if (req.query.groupId) {
        let filteredChat = await chatQueries.getChats({groupId: req.query.groupId});
        return res.status(200).send(filteredChat);
    }
    let chats = await chatQueries.getChats({});
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

const express = require('express');
const forumQueries = require("../mongo/queries/forumQueries");
const router = express.Router();

// GET forum
router.get('/', async function (req, res, next) {
    if (req.query.groupId) {
        let filteredForum = await forumQueries.getForums({groupId: req.query.groupId});
        return res.status(200).send(filteredForum);
    }
    let forums = await forumQueries.getForums({});
    return res.status(200).send(forums);
});

// ADD forum
router.post('/', async function (req, res, next) {
    const newForum = req.body;

    await forumQueries.createNewForum(newForum);
    return res.status(200).send(newForum);
});

// UPDATE forum
router.patch('/', async function (req, res, next) {
    const newMessage = req.body;

    const updatedForum = await forumQueries.updateForum(newMessage);
    return res.status(201).send(updatedForum);
});

module.exports = router;

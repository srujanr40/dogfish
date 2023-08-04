const sessionRecommendationAlgorithm = require('../algorithms/sessionRecommendationAlgorithm');

const express = require('express');
const sessionQueries = require('../mongo/queries/sessionQueries');
const router = express.Router();

// GET all sessions
router.get('/', async function (req, res, next) {
    let sessions = []
    if(req.query.filter === 'near_you'){
        sessions = await sessionQueries.getNearBySessions();
    }
    else sessions = await sessionQueries.getSessions({filter: req.query.filter});
    return res.status(200).send(sessions);
});

// ADD a new session
router.post('/', async function (req, res, next) {
    let new_session = req.body;
    await sessionQueries.addSession(new_session);

    return res.status(200).send(new_session);
});

// UPDATE a session
router.patch('/', async function (req, res, next) {
    let session = req.body;
    await sessionQueries.updateSession(session);

    return res.status(200).send(session);
});

// GET featured sessions
router.post('/featured', function (req, res, next) {
    let profile = req.body.profile;
    let sessions = req.body.sessions;

    let featuredSessions = sessionRecommendationAlgorithm(profile, sessions, 3);

    return res.status(200).send(featuredSessions);
});

// GET Recommended session for magic join
router.post('/recommended', function (req, res, next) {
    let profile = req.body.profile;
    let sessions = req.body.sessions;

    let session = sessionRecommendationAlgorithm(profile, sessions, 1)[0];

    return res.status(200).send(session);
});

// DELETE a session
router.delete('/:groupId', async function (req, res, next) {
    let groupId = req.params.groupId;

    try {
        await sessionQueries.deleteSession(groupId);
        return res.status(200).send(groupId);
    } catch(err) {
        return res.status(500).send('Internal server error.');
    }
});

module.exports = router;

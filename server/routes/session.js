const sessionRecommendationAlgorithm = require('../algorithms/sessionRecommendationAlgorithm');

const express = require('express');
const sessionQueries = require('../mongo/queries/sessionQueries');
const router = express.Router();

// GET all sessions
router.get('/', async function (req, res, next) {
    if (req.query.sport) {
        let filteredSessions = await sessionQueries.getSessions({sport: req.query.sport});
        return res.status(200).send(filteredSessions);
    }
    let sessions = await sessionQueries.getSessions({});
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

module.exports = router;

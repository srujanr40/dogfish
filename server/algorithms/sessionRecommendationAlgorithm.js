const pointValues = require('./sessionRecommendationPointValues');

function sessionRecommendationAlgorithm(profile, sessions, number) {
    let sessionScores = [];
    let counter = 0;
    let ret = [];

    sessions.forEach(session => {
        let sessionScore = 0;

        profile.equipment.forEach((item) => {
            if (session.equipment[0].includes(item)) {
                sessionScore = sessionScore + pointValues.MATCHING_EQUIPMENT;
            }
        })

        if (session.city === profile.location) {
            sessionScore = sessionScore + pointValues.SAME_LOCATION;
        }

        if (session.playersNeeded <= 3 && session.playersNeeded > 0) {
            sessionScore = sessionScore + pointValues.PLAYER_COUNT - session.playersNeeded;
        }

        if (profile.interests.includes(session.sport)) {
            sessionScore = sessionScore + pointValues.MATCHING_INTEREST;
        }

        sessionScores[counter] = sessionScore;
        counter++;
    });

    for (let i = 0; i < number; i++) {
        let index = sessionScores.indexOf(Math.max(...sessionScores));
        sessionScores[index] = 0;
        ret[i] = sessions[index];
    }

    return ret;
}

module.exports = sessionRecommendationAlgorithm;
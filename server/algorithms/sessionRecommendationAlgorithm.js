const pointValues = require('./sessionRecommendationPointValues');

function sessionRecommendationAlgorithm(profile, sessions, number) {
    let sessionScores = [];
    let counter = 0;
    let ret = [];

    const previousSessions = sessions.filter(
        (session) => session.members && session.members.includes(profile.name)
    );

    const availableSessions = sessions.filter(
        (session) => session.members && !session.members.includes(profile.name) && session.playersNeeded > 0
    );

    availableSessions.forEach(session => {
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

        previousSessions.forEach((prevSession) => {
            if (session.city === prevSession.city) {
                sessionScore = sessionScore + pointValues.HISTORY_SIMILARITY;

                if (session.location === prevSession.location) {
                    sessionScore = sessionScore + pointValues.HISTORY_SIMILARITY;
                }
            }

            sessionScore = sessionScore + prevSession.members.filter(member => session.members.includes(member)).length * pointValues.HISTORY_SIMILARITY;

            if (session.sport === prevSession.sport) {
                sessionScore = sessionScore + pointValues.HISTORY_SIMILARITY;
            }
        });

        sessionScores[counter] = sessionScore;
        counter++;
    });

    for (let i = 0; i < number; i++) {
        let index = sessionScores.indexOf(Math.max(...sessionScores));
        sessionScores[index] = 0;
        ret[i] = availableSessions[index];
    }

    return ret;
}

module.exports = sessionRecommendationAlgorithm;
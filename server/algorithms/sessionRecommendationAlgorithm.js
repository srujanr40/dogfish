const pointValues = require('./sessionRecommendationPointValues');

function sessionRecommendationAlgorithm(profile, sessions, number) {
    let sessionScores = [];
    let counter = 0;
    let ret = [];

    if (!sessions) {
        return ret;
    }

    if (!profile) {
        let size = sessions.length > number ? number : sessions.length;
        for (let i = 0; i < size; i++) {
            ret[i] = sessions[i];
        }
        return ret;
    }

    const previousSessions = sessions.filter(
        (session) => session.members && session.members.some(member => member && member.email === profile.email)
    );

    const availableSessions = sessions.filter(
        (session) => session.members && !session.members.some(member => member && member.email === profile.email) && session.playersNeeded && session.playersNeeded > 0
    );

    availableSessions.forEach(session => {
        let sessionScore = 0;

        if (profile.equipment) {
            profile.equipment.forEach((item) => {
                if (session.equipment) {
                    if (session.equipment.some(sessionItem => sessionItem && sessionItem[1] && sessionItem[1] === item)) {
                        sessionScore = sessionScore + pointValues.MATCHING_EQUIPMENT;
                    }
                }
            })
        }

        if (session.city && profile.location && session.city === profile.location) {
            sessionScore = sessionScore + pointValues.SAME_LOCATION;
        }

        if (session.playersNeeded && session.playersNeeded <= 3 && session.playersNeeded > 0) {
            sessionScore = sessionScore + pointValues.PLAYER_COUNT - session.playersNeeded;
        }

        if (profile.interests && session.sport && profile.interests.includes(session.sport)) {
            sessionScore = sessionScore + pointValues.MATCHING_INTEREST;
        }

        previousSessions.forEach((prevSession) => {
            if (session.city && prevSession.city && session.city === prevSession.city) {
                sessionScore = sessionScore + pointValues.HISTORY_SIMILARITY;

                if (session.location && prevSession.location && session.location === prevSession.location) {
                    sessionScore = sessionScore + pointValues.HISTORY_SIMILARITY;
                }
            }

            if (prevSession.members && session.members) {
                sessionScore = sessionScore + prevSession.members.filter(prevMember => session.members.some(member => member && member.email === prevMember.email)).length * pointValues.HISTORY_SIMILARITY;
            }

            if (session.sport && prevSession.sport && session.sport === prevSession.sport) {
                sessionScore = sessionScore + pointValues.HISTORY_SIMILARITY;
            }
        });

        sessionScores[counter] = sessionScore;
        counter++;
    });

    let size = availableSessions.length > number ? number : availableSessions.length;
    for (let i = 0; i < size; i++) {
        let index = sessionScores.indexOf(Math.max(...sessionScores));
        sessionScores[index] = 0;
        ret[i] = availableSessions[index];
    }

    return ret;
}

module.exports = sessionRecommendationAlgorithm;
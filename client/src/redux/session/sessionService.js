const getSessions = async (sport) => {
    var response = {}
    if (sport !== "") {
        response = await fetch('http://localhost:3001/session' + '?sport=' + sport)
    } else {
        response = await fetch('http://localhost:3001/session')
    }

    return await response.json()
}

const getFeaturedSessions = async () => {
    const response = await fetch('http://localhost:3001/session/featured')

    return await response.json()
}

const createNewSession = async (new_session) => {
    var response = await fetch('http://localhost:3001/session', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(new_session)
    })

    return await response.json()
}

export default {
    getSessions,
    getFeaturedSessions,
    createNewSession
};
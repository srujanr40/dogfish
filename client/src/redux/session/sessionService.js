const getSessions = async (sport = '') => {
    var response = {}
    if (sport !== "") {
        response = await fetch(`${process.env.REACT_APP_REST_API_URL}/session` + '?sport=' + sport)
    } else {
        response = await fetch(`${process.env.REACT_APP_REST_API_URL}/session`)
    }

    return await response.json()
}

const getFeaturedSessions = async (profile, sessions) => {
    let body = {
        profile: profile,
        sessions: sessions
    }

    const response = await fetch(`${process.env.REACT_APP_REST_API_URL}/session/featured`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })

    return await response.json()
}

const getRecommendedSession = async (profile, sessions) => {
    let body = {
        profile: profile,
        sessions: sessions
    }
    const response = await fetch(`${process.env.REACT_APP_REST_API_URL}/session/recommended`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })

    return await response.json()
}

const createNewSession = async (new_session) => {
    var response = await fetch(`${process.env.REACT_APP_REST_API_URL}/session`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(new_session)
    })

    return await response.json()
}

const updateSession = async (session) => {
    var response = await fetch(`${process.env.REACT_APP_REST_API_URL}/session`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(session)
    })

    return await response.json()
}

const deleteSession = async (groupId) => {
    var response = await fetch(`${process.env.REACT_APP_REST_API_URL}/session/${groupId}`, {
        method: "DELETE"
    })

    return await response.json()
}

export default {
    getSessions,
    getFeaturedSessions,
    getRecommendedSession,
    createNewSession,
    updateSession,
    deleteSession
};
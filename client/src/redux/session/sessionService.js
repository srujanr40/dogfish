const getSessions = async (filter = '') => {
    const queryParams = new URLSearchParams({ filter: filter });
    const url = `${process.env.REACT_APP_REST_API_URL}/session?${queryParams}`;
    var response = {}  
    response = await fetch(url)
    response = await response.json()
    return response
}

const getSessionsNearYou = async (location) => {
    const queryParams = new URLSearchParams({ filter: location });
    const url = `${process.env.REACT_APP_REST_API_URL}/session/near_youS?${queryParams}`;
    var response = {}  
    response = await fetch(url)
    response = await response.json()
    return response
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
    getSessionsNearYou,
    getFeaturedSessions,
    getRecommendedSession,
    createNewSession,
    updateSession,
    deleteSession
};
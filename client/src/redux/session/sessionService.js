const getSessions = async (filter) => {

    console.log(filter)
    const queryParams = new URLSearchParams({ filter: filter });
    const url = `http://localhost:3001/session?${queryParams}`;
    var response = {}  
    response = await fetch(url)
    response = await response.json()
    // console.log("^^^^^^^^^^^^^^^^^^^")
    // console.log(response)
    return response
}

const getFeaturedSessions = async (profile, sessions) => {
    let body = {
        profile: profile,
        sessions: sessions
    }

    const response = await fetch('http://localhost:3001/session/featured', {
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
    const response = await fetch('http://localhost:3001/session/recommended', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })

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

const updateSession = async (session) => {
    var response = await fetch('http://localhost:3001/session', {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(session)
    })

    return await response.json()
}

export default {
    getSessions,
    getFeaturedSessions,
    getRecommendedSession,
    createNewSession,
    updateSession
};
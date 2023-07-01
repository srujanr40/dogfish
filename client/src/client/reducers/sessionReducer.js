
async function getSessions() {
    let getSessionsResponse = await fetch('http://localhost:3001/session');
    let data = await getSessionsResponse.json();
    return data;
}

async function getFeaturedSessions() {
    let getSessionsResponse = await fetch('http://localhost:3001/session/featured');
    let data = await getSessionsResponse.json();
    return data;
}

var initialState = {
    sessions: await getSessions(),
    featuredSessions: await getFeaturedSessions(),
}


export const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_NEW_SESSION':
            return {
                ...state,
                sessions: [...state.sessions, action.payload]
            }
        case 'GET_SESSIONS':
            return {
                ...state,
                sessions: action.payload
            }
        case 'GET_FEATURED_SESSIONS':
            return {
                ...state,
                featuredSessions: action.payload
            }
        default:
            return state;
    }
}
import { getSessions, getFeaturedSessions, createNewSession, updateProfile } from "../actions"

export const getSessionsAsync = () => {
  return async (dispatch) => {
    // TODO: add support for query params
    const response = await fetch('http://localhost:3001/session')
    let data = await response.json()
    dispatch(getSessions(data))
  }
}

export const getFeaturedSessionsAsync = () => {
  return async (dispatch) => {
    const response = await fetch('http://localhost:3001/session/featured')
    let data = await response.json()
    dispatch(getFeaturedSessions(data))
  }
}

export const createNewSessionAsync = (new_session) => {
  return async (dispatch) => {
    const response = await fetch('http://localhost:3001/session', {
      method: "POST",
      headers: {
         "Content-Type": "application/json"
      },
      body: JSON.stringify(new_session)
    })

    dispatch(createNewSession(new_session))
  }
}

export const updateProfileAsync = (new_details) => {
  return async (dispatch) => {
    const response = await fetch('http://localhost:3001/profile', {
      method: "PATCH",
      headers: {
         "Content-Type": "application/json"
      },
      body: JSON.stringify(new_details)
    })

    dispatch(updateProfile(new_details))
  }
}



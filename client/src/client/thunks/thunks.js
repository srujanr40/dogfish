import { getSessions, getFeaturedSessions, createNewSession, updateProfile } from "../actions"

export const getSessionsAsync = (sport = "") => {
  return async (dispatch) => {
    var response = {}
    if (sport !== "") {
      response = await fetch('http://localhost:3001/session' + '?sport=' + sport)
    } else {
      response = await fetch('http://localhost:3001/session')
    }
    let data = await response.json()
    dispatch(getSessions(data))
  }
}

export const getFeaturedSessionsAsync = () => {
  return async (dispatch) => {
    var response = await fetch('http://localhost:3001/session/featured')
    let data = await response.json()
    dispatch(getFeaturedSessions(data))
  }
}

export const createNewSessionAsync = (new_session) => {
  return async (dispatch) => {
    var response = await fetch('http://localhost:3001/session', {
      method: "POST",
      headers: {
         "Content-Type": "application/json"
      },
      body: JSON.stringify(new_session)
    })

    let data = await response.json()
    dispatch(createNewSession(data))
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

    let data = await response.json()
    dispatch(updateProfile(data))
  }
}



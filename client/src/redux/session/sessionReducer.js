import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATE } from '../utils';
import { getAllSessionsAsync, getSessionsAsync, getSessionsNearYouAsync, getFeaturedSessionsAsync, getRecommendedSessionAsync, createNewSessionAsync, updateSessionAsync, deleteSessionAsync } from './sessionThunks';
import sessionService from './sessionService';
import profileService from '../profile/profileService'

let sessions = await sessionService.getSessions();
let profile = await profileService.getProfile();
let featuredSessions = await Promise.all([sessions, profile]).then(async (values) => {
    return sessionService.getFeaturedSessions(values[1], values[0])
});

const INITIAL_STATE = {
    sessions: sessions,
    featuredSessions: await featuredSessions,
    recommendedSession: featuredSessions[0],
    getAllSessions: REQUEST_STATE.IDLE,
    getSessions: REQUEST_STATE.IDLE,
    getSessionsNearYou: REQUEST_STATE.IDLE,
    getFeaturedSessions: REQUEST_STATE.IDLE,
    getRecommendedSession: REQUEST_STATE.IDLE,
    createNewSession: REQUEST_STATE.IDLE,
    updateSession: REQUEST_STATE.IDLE,
    deleteSession: REQUEST_STATE.IDLE,
    error: null
};

const sessionSlice = createSlice({
    name: 'sessions',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllSessionsAsync.pending, (state) => {
                return {
                    ...state,
                    getAllSessions: REQUEST_STATE.PENDING,
                    error: null
                }
            })
            .addCase(getAllSessionsAsync.fulfilled, (state, action) => {
                return {
                    ...state,
                    getAllSessions: REQUEST_STATE.FULFILLED,
                    sessions: action.payload
                }
            })
            .addCase(getAllSessionsAsync.rejected, (state, action) => {
                return {
                    ...state,
                    getAllSessions: REQUEST_STATE.REJECTED,
                    error: action.error
                }
            })
            .addCase(getSessionsAsync.pending, (state) => {
                return {
                    ...state,
                    getSessions: REQUEST_STATE.PENDING,
                    error: null
                }
            })
            .addCase(getSessionsAsync.fulfilled, (state, action) => {
                return {
                    ...state,
                    getSessions: REQUEST_STATE.FULFILLED
                }
            })
            .addCase(getSessionsAsync.rejected, (state, action) => {
                return {
                    ...state,
                    getSessions: REQUEST_STATE.REJECTED,
                    error: action.error
                }
            })
            .addCase(getSessionsNearYouAsync.pending, (state) => {
                return {
                    ...state,
                    getSessions: REQUEST_STATE.PENDING,
                    error: null
                }
            })
            .addCase(getSessionsNearYouAsync.fulfilled, (state, action) => {
                return {
                    ...state,
                    getSessions: REQUEST_STATE.FULFILLED
                }
            })
            .addCase(getSessionsNearYouAsync.rejected, (state, action) => {
                return {
                    ...state,
                    getSessions: REQUEST_STATE.REJECTED,
                    error: action.error
                }
            })
            .addCase(getFeaturedSessionsAsync.pending, (state) => {
                return {
                    ...state,
                    getFeaturedSessions: REQUEST_STATE.PENDING,
                    error: null
                }
            })
            .addCase(getFeaturedSessionsAsync.fulfilled, (state, action) => {
                return {
                    ...state,
                    getFeaturedSessions: REQUEST_STATE.FULFILLED,
                    featuredSessions: action.payload
                }
            })
            .addCase(getFeaturedSessionsAsync.rejected, (state, action) => {
                return {
                    ...state,
                    getFeaturedSessions: REQUEST_STATE.REJECTED,
                    error: action.error
                }
            })
            .addCase(getRecommendedSessionAsync.pending, (state) => {
                return {
                    ...state,
                    getRecommendedSession: REQUEST_STATE.PENDING,
                    error: null
                }
            })
            .addCase(getRecommendedSessionAsync.fulfilled, (state, action) => {
                return {
                    ...state,
                    getRecommendedSession: REQUEST_STATE.FULFILLED,
                    recommendedSession: action.payload
                }
            })
            .addCase(getRecommendedSessionAsync.rejected, (state, action) => {
                return {
                    ...state,
                    getRecommendedSession: REQUEST_STATE.REJECTED,
                    error: action.error
                }
            })
            .addCase(createNewSessionAsync.pending, (state) => {
                return {
                    ...state,
                    createNewSession: REQUEST_STATE.PENDING,
                    error: null
                }
            })
            .addCase(createNewSessionAsync.fulfilled, (state, action) => {
                return {
                    ...state,
                    createNewSession: REQUEST_STATE.FULFILLED,
                    sessions: [...state.sessions, action.payload]
                }
            })
            .addCase(createNewSessionAsync.rejected, (state, action) => {
                return {
                    ...state,
                    createNewSession: REQUEST_STATE.REJECTED,
                    error: action.error
                }
            })
            .addCase(updateSessionAsync.pending, (state) => {
                return {
                    ...state,
                    updateSession: REQUEST_STATE.PENDING,
                    error: null
                }
            })
            .addCase(updateSessionAsync.fulfilled, (state, action) => {
                const updatedSession = action.payload[0];
                const featuredBool = action.payload[1];
                const updatedSessions = state.sessions.map(session => {
                    if (session.groupId === updatedSession.groupId) {
                        return updatedSession;
                    }
                    return session;
                });
                
                if (!featuredBool) {

                    return {
                        ...state,
                        updateSession: REQUEST_STATE.FULFILLED,
                        sessions: updatedSessions
                    };
                } else {
                    let updatedFeaturedSessions = state.featuredSessions.map(featuredSession => {
                        if (featuredSession.groupId === updatedSession.groupId) {
                            return updatedSession;
                        }
                        return featuredSession;
                    });

                    return {
                        ...state,
                        updateSession: REQUEST_STATE.FULFILLED,
                        sessions: updatedSessions,
                        featuredSessions: updatedFeaturedSessions
                    };
                }
            })
            .addCase(updateSessionAsync.rejected, (state, action) => {
                return {
                    ...state,
                    updateSession: REQUEST_STATE.REJECTED,
                    error: action.error
                }
            })
            .addCase(deleteSessionAsync.pending, (state) => {
                return {
                    ...state,
                    deleteSession: REQUEST_STATE.PENDING,
                    error: null
                }
            })
            .addCase(deleteSessionAsync.fulfilled, (state, action) => {
                const groupId = action.payload;
                const updatedSessions = state.sessions.filter(
                    (session) => session.groupId !== groupId
                );

                return {
                    ...state,
                    deleteSession: REQUEST_STATE.FULFILLED,
                    sessions: updatedSessions
                };
            })
            .addCase(deleteSessionAsync.rejected, (state, action) => {
                return {
                    ...state,
                    deleteSession: REQUEST_STATE.REJECTED,
                    error: action.error
                }
            });
    }
});


export default sessionSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATE } from '../utils';
import { getSessionsAsync, getFeaturedSessionsAsync, getRecommendedSessionAsync, createNewSessionAsync } from './sessionThunks';
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
    recommendedSession: {},
    getSessions: REQUEST_STATE.IDLE,
    getFeaturedSessions: REQUEST_STATE.IDLE,
    getRecommendedSession: REQUEST_STATE.IDLE,
    createNewSession: REQUEST_STATE.IDLE,
    error: null
};

const sessionSlice = createSlice({
    name: 'sessions',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder
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
                    getSessions: REQUEST_STATE.FULFILLED,
                    sessions: action.payload
                }
            })
            .addCase(getSessionsAsync.rejected, (state, action) => {
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
            });
    }
});


export default sessionSlice.reducer;
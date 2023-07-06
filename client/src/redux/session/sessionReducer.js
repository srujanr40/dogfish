import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATE } from '../utils';
import { getSessionsAsync, getFeaturedSessionsAsync, createNewSessionAsync } from './sessionThunks';

async function getFeaturedSessions() {
    let getSessionsResponse = await fetch('http://localhost:3001/session/featured');
    let data = await getSessionsResponse.json();
    return data;
}

const INITIAL_STATE = {
    sessions: [],
    featuredSessions: [],
    getSessions: REQUEST_STATE.IDLE,
    getFeaturedSessions: REQUEST_STATE.IDLE,
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
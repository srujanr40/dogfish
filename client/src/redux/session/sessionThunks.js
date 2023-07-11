import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import sessionService from "./sessionService"

export const getSessionsAsync = createAsyncThunk(
    actionTypes.GET_SESSIONS,
    async (filter = '') => {
        return await sessionService.getSessions(filter);
    }
);

export const getFeaturedSessionsAsync = createAsyncThunk(
    actionTypes.GET_FEATURED_SESSIONS,
    async () => {
        return await sessionService.getFeaturedSessions();
    }
);

export const getRecommendedSessionAsync = createAsyncThunk(
    actionTypes.GET_RECOMMENDED_SESSION,
    async (profile, sessions) => {
        return await sessionService.getRecommendedSession(profile, sessions);
    }
);

export const createNewSessionAsync = createAsyncThunk(
    actionTypes.CREATE_NEW_SESSION,
    async (new_session) => {
        return await sessionService.createNewSession(new_session);
    }
);
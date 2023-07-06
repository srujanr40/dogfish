import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actions/actionTypes';
import profileService from "./profileService"

export const getProfileAsync = createAsyncThunk(
    actionTypes.GET_PROFILE,
    async () => {
        return await profileService.getProfile();
    }
);

export const updateProfileAsync = createAsyncThunk(
    actionTypes.UPDATE_PROFILE,
    async (new_details) => {
        return await profileService.updateProfile(new_details);
    }
);
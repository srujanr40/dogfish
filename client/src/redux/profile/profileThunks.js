import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
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

export const addProfileAsync = createAsyncThunk(
    actionTypes.ADD_PROFILE,
    async (new_profile) => {
        return await profileService.addProfile(new_profile);
    }
);

export const changeProfileAsync = createAsyncThunk(
    actionTypes.CHANGE_PROFILE,
    async (profile) => {
        return await profile.json();
    }
);
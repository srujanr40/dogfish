import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATE } from '../utils';
import { getProfileAsync, updateProfileAsync, addProfileAsync, changeProfileAsync } from './profileThunks';
import profileService from './profileService'

const INITIAL_STATE = {
    profile: await profileService.getProfile(),
    getProfile: REQUEST_STATE.IDLE,
    updateProfile: REQUEST_STATE.IDLE,
    addProfile: REQUEST_STATE.IDLE,
    changeProfile: REQUEST_STATE.IDLE,
    error: null
};

const profileSlice = createSlice({
    name: 'profile',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProfileAsync.pending, (state) => {
                return {
                    ...state,
                    getProfile: REQUEST_STATE.PENDING,
                    error: null
                }
            })
            .addCase(getProfileAsync.fulfilled, (state, action) => {
                return {
                    ...state,
                    getProfile: REQUEST_STATE.FULFILLED,
                    profile: action.payload
                }
            })
            .addCase(getProfileAsync.rejected, (state, action) => {
                return {
                    ...state,
                    getProfile: REQUEST_STATE.REJECTED,
                    error: action.error
                }
            })
            .addCase(updateProfileAsync.pending, (state) => {
                return {
                    ...state,
                    updateProfile: REQUEST_STATE.PENDING,
                    error: null
                }
            })
            .addCase(updateProfileAsync.fulfilled, (state, action) => {
                return {
                    ...state,
                    updateProfile: REQUEST_STATE.FULFILLED,
                    profile: action.payload
                }
            })
            .addCase(updateProfileAsync.rejected, (state, action) => {
                return {
                    ...state,
                    updateProfile: REQUEST_STATE.REJECTED,
                    error: action.error
                }
            })
            .addCase(addProfileAsync.pending, (state) => {
                return {
                    ...state,
                    addProfile: REQUEST_STATE.PENDING,
                    error: null
                }
            })
            .addCase(addProfileAsync.fulfilled, (state, action) => {
                return {
                    ...state,
                    addProfile: REQUEST_STATE.FULFILLED,
                    profile: action.payload
                }
            })
            .addCase(addProfileAsync.rejected, (state, action) => {
                return {
                    ...state,
                    addProfile: REQUEST_STATE.REJECTED,
                    error: action.error
                }
            })
            .addCase(changeProfileAsync.pending, (state) => {
                return {
                    ...state,
                    changeProfile: REQUEST_STATE.PENDING,
                    error: null
                }
            })
            .addCase(changeProfileAsync.fulfilled, (state, action) => {
                return {
                    ...state,
                    changeProfile: REQUEST_STATE.FULFILLED,
                    profile: action.payload
                }
            })
            .addCase(changeProfileAsync.rejected, (state, action) => {
                return {
                    ...state,
                    changeProfile: REQUEST_STATE.REJECTED,
                    error: action.error
                }
            });
    }
});


export default profileSlice.reducer;
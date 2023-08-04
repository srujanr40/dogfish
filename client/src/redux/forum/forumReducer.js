import {createSlice} from '@reduxjs/toolkit';
import {REQUEST_STATE} from '../utils';
import {getForumAsync, createNewForumAsync, updateForumAsync} from './forumThunks';
import forumService from './forumService';

const INITIAL_STATE = {
    chats: await forumService.getForum(),
    getForum: REQUEST_STATE.IDLE,
    createNewForum: REQUEST_STATE.IDLE,
    updateForum: REQUEST_STATE.IDLE,
    error: null
};

const forumSlice = createSlice({
    name: 'forum',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getForumAsync.pending, (state) => {
                return {
                    ...state,
                    getForum: REQUEST_STATE.PENDING,
                    error: null
                }
            })
            .addCase(getForumAsync.fulfilled, (state, action) => {
                return {
                    ...state,
                    getForum: REQUEST_STATE.FULFILLED,
                    chats: action.payload
                }
            })
            .addCase(getForumAsync.rejected, (state, action) => {
                return {
                    ...state,
                    getForum: REQUEST_STATE.REJECTED,
                    error: action.error
                }
            })
            .addCase(createNewForumAsync.pending, (state) => {
                return {
                    ...state,
                    createNewForum: REQUEST_STATE.PENDING,
                    error: null
                }
            })
            .addCase(createNewForumAsync.fulfilled, (state, action) => {
                return {
                    ...state,
                    createNewForum: REQUEST_STATE.FULFILLED,
                    chats: [...state.chats, action.payload]
                }
            })
            .addCase(createNewForumAsync.rejected, (state, action) => {
                return {
                    ...state,
                    createNewForum: REQUEST_STATE.REJECTED,
                    error: action.error
                }
            })
            .addCase(updateForumAsync.pending, (state) => {
                return {
                    ...state,
                    updateForum: REQUEST_STATE.PENDING,
                    error: null
                }
            })
            .addCase(updateForumAsync.fulfilled, (state, action) => {
                return {
                    ...state,
                    updateForum: REQUEST_STATE.FULFILLED,
                    chats: action.payload
                }
            })
            .addCase(updateForumAsync.rejected, (state, action) => {
                return {
                    ...state,
                    updateForum: REQUEST_STATE.REJECTED,
                    error: action.error
                }
            });
    }
});


export default forumSlice.reducer;
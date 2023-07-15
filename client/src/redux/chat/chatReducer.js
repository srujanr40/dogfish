import {createSlice} from '@reduxjs/toolkit';
import {REQUEST_STATE} from '../utils';
import {getChatAsync, createNewChatAsync, updateChatAsync} from './chatThunks';
import chatService from './chatService';

const INITIAL_STATE = {
    chats: await chatService.getChat(),
    getChat: REQUEST_STATE.IDLE,
    createNewChat: REQUEST_STATE.IDLE,
    updateChat: REQUEST_STATE.IDLE,
    error: null
};

const chatSlice = createSlice({
    name: 'chat',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getChatAsync.pending, (state) => {
                return {
                    ...state,
                    getChat: REQUEST_STATE.PENDING,
                    error: null
                }
            })
            .addCase(getChatAsync.fulfilled, (state, action) => {
                return {
                    ...state,
                    getChat: REQUEST_STATE.FULFILLED,
                    chats: action.payload
                }
            })
            .addCase(getChatAsync.rejected, (state, action) => {
                return {
                    ...state,
                    getChat: REQUEST_STATE.REJECTED,
                    error: action.error
                }
            })
            .addCase(createNewChatAsync.pending, (state) => {
                return {
                    ...state,
                    createNewChat: REQUEST_STATE.PENDING,
                    error: null
                }
            })
            .addCase(createNewChatAsync.fulfilled, (state, action) => {
                return {
                    ...state,
                    createNewChat: REQUEST_STATE.FULFILLED,
                    chats: [...state.chats, action.payload]
                }
            })
            .addCase(createNewChatAsync.rejected, (state, action) => {
                return {
                    ...state,
                    createNewChat: REQUEST_STATE.REJECTED,
                    error: action.error
                }
            })
            .addCase(updateChatAsync.pending, (state) => {
                return {
                    ...state,
                    updateChat: REQUEST_STATE.PENDING,
                    error: null
                }
            })
            .addCase(updateChatAsync.fulfilled, (state, action) => {
                return {
                    ...state,
                    updateChat: REQUEST_STATE.FULFILLED,
                    chats: action.payload
                }
            })
            .addCase(updateChatAsync.rejected, (state, action) => {
                return {
                    ...state,
                    updateChat: REQUEST_STATE.REJECTED,
                    error: action.error
                }
            });
    }
});


export default chatSlice.reducer;
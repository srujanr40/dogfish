import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATE } from '../utils';
import { getChatAsync, addChatAsync } from './chatThunks';
import chatService from './chatService';

const INITIAL_STATE = {
    chats: await chatService.getChat(),
    getChat: REQUEST_STATE.IDLE,
    addChat: REQUEST_STATE.IDLE,
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
            .addCase(addChatAsync.pending, (state) => {
                return {
                    ...state,
                    addChat: REQUEST_STATE.PENDING,
                    error: null
                }
            })
            .addCase(addChatAsync.fulfilled, (state, action) => {
                return {
                    ...state,
                    addChat: REQUEST_STATE.FULFILLED,
                    chats: action.payload
                }
            })
            .addCase(addChatAsync.rejected, (state, action) => {
                return {
                    ...state,
                    addChat: REQUEST_STATE.REJECTED,
                    error: action.error
                }
            });
    }
});


export default chatSlice.reducer;
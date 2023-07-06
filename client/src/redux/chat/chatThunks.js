import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import chatService from "./chatService"

export const getChatAsync = createAsyncThunk(
    actionTypes.GET_CHAT,
    async () => {
        return await chatService.getChat();
    }
);

export const addChatAsync = createAsyncThunk(
    actionTypes.ADD_CHAT,
    async (chat) => {
        return await chatService.addChat(chat);
    }
);
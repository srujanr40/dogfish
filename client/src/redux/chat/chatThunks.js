import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import chatService from "./chatService"

export const getChatAsync = createAsyncThunk(
    actionTypes.GET_CHAT,
    async () => {
        return await chatService.getChat();
    }
);

export const createNewChatAsync = createAsyncThunk(
    actionTypes.CREATE_NEW_CHAT,
    async (chat) => {
        return await chatService.createNewChat(chat);
    }
);

export const updateChatAsync = createAsyncThunk(
    actionTypes.UPDATE_CHAT,
    async (chat) => {
        return await chatService.updateChat(chat);
    }
);


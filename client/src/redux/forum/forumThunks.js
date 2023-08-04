import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import forumService from "./forumService"

export const getForumAsync = createAsyncThunk(
    actionTypes.GET_FORUM,
    async () => {
        return await forumService.getForum();
    }
);

export const createNewForumAsync = createAsyncThunk(
    actionTypes.CREATE_NEW_FORUM,
    async (forum) => {
        return await forumService.createNewForum(forum);
    }
);

export const updateForumAsync = createAsyncThunk(
    actionTypes.UPDATE_FORUM,
    async (forum) => {
        return await forumService.updateForum(forum);
    }
);


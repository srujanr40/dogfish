import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from '../actionTypes/actionTypes';
import Service from '../services/service';

export const getItemsAsync = createAsyncThunk(
  actionTypes.GET_SESSIONS,
  async () => {
    return await Service.getSessions();
  }
);
export const filterItemsAsync = createAsyncThunk(
  actionTypes.FILTER_SESSIONS,
  async (item) => {
    return await Service.filterSessions({ item });
  }
)
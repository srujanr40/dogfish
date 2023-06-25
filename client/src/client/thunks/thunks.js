import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from '../actionTypes/actionTypes';
import Service from '../services/service';

export const getSessionsAsync = createAsyncThunk(
  actionTypes.GET_SESSIONS,
  async () => {
    return await Service.getSessions();
  }
);
export const filterSessionsAsync = createAsyncThunk(
  actionTypes.FILTER_SESSIONS,
  async (filter) => {
    return await Service.filterSessions({ filter });
  }
)
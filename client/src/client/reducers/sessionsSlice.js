import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATE } from '../utils';
import { getSessionsAsync, filterSessionsAsync } from '../thunks/thunks';

const INITIAL_STATE = {
  list: [],
  getItems: REQUEST_STATE.IDLE,
  filterItems: REQUEST_STATE.IDLE,
  error: null
};

const sessionsSlice = createSlice({
  name: 'sessions',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSessionsAsync.pending, (state) => {
        state.getItems = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(getSessionsAsync.fulfilled, (state, action) => {
        state.getItems = REQUEST_STATE.FULFILLED;
        state.list = action.payload;
      })
      .addCase(getSessionsAsync.rejected, (state, action) => {
        state.getItems = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
      .addCase(filterSessionsAsync.pending, (state) => {
        state.filterItems = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(filterSessionsAsync.fulfilled, (state, action) => {
        state.filterItems = REQUEST_STATE.FULFILLED;
        state.list = action.payload
      })
      .addCase(filterSessionsAsync.rejected, (state, action) => {
        state.filterItems = REQUEST_STATE.REJECTED;
        state.error = action.error;
      });
  }
});

export default sessionsSlice.reducer;

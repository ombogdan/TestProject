import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  serialsData: {},
  authed: false,
  lastWatchingData: {
    serial: {},
    episodeIndex: 0,
    episodeTime: 0,
  },
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    saveSerials(state, {payload}) {
      state.serialsData = payload;
    },
    saveLastWatching(state, {payload}) {
      state.lastWatchingData = payload;
    },
  }
});

export const appActions = appSlice.actions;
export const appReducer = appSlice.reducer;

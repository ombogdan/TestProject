import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  serialsData: {},
  authed: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    saveSerials(state, { payload }) {
      state.serialsData = payload;
    },
  }
});

export const appActions = appSlice.actions;
export const appReducer = appSlice.reducer;

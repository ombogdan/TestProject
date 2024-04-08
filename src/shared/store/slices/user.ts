import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: null,
  authed: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin(state, { payload }) {
      state.userData = payload;
      state.authed = true;
    },
    userLogout(state) {
      state.userData = null;
      state.authed = false;
    },
  }
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;

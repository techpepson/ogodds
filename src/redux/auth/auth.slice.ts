import {createSlice } from "@reduxjs/toolkit";
import { CreateSession, GetUser, GetUsers, LoginUser, RegisterUser } from "./auth.reducer";

const initialState = {
  data:{},
  users:[{}],
  error: false,
  loading: false,
  success: false,
};

const authSlice:any = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.error = false;
      state.loading = false;
      state.success = false;
    },
  },

  extraReducers(builder) {
    builder
      .addCase(RegisterUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(RegisterUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(RegisterUser.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.success = false;
      })
      .addCase(LoginUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(LoginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(LoginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.success = false;
      })
      .addCase(CreateSession.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(CreateSession.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(CreateSession.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.success = false;
      })
      .addCase(GetUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(GetUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(GetUser.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.success = false;
      })
      .addCase(GetUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(GetUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.users = action.payload;
      })
      .addCase(GetUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.success = false;
      })
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
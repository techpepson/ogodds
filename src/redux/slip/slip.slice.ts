import { createSlice } from "@reduxjs/toolkit";
import { GetAllSlips, LatestSlip } from "./slip.reducer";

const initialState = {
  loading: false,
  error: false,
  success: false,
  latestSlip: {},
  slips: [{}],
};

const slipSlice = createSlice({
  name: "slip",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.error = false;
      state.success = false;
      state.latestSlip = {
      }
      state.slips = [{}];
    },
  },

  extraReducers(builder) {
    builder
      .addCase(LatestSlip.pending, (state) => {
        state.loading = true;
      })
      .addCase(LatestSlip.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.success = true;
        state.latestSlip = action.payload;
      })
      .addCase(LatestSlip.rejected, (state) => {
        state.loading = false;
        state.error = true;
        state.success = false;
      })
      .addCase(GetAllSlips.pending, (state) => {
        state.loading = true;
      })
      .addCase(GetAllSlips.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.success = true;
        state.slips = action.payload;
      })
      .addCase(GetAllSlips.rejected, (state) => {
        state.loading = false;
        state.error = true;
        state.success = false;
      });
  },
});

export const { reset } = slipSlice.actions;
export default slipSlice.reducer;

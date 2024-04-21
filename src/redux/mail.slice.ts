import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  success: false,
  error: false,
  loading: false,
  data: {},
};

const url = "https://ogsoo-engine.onrender.com";

export const SendSMS = createAsyncThunk("sms", async (data: any, thunkAPi) => {
  const res = await axios({
    method: "post",
    url: `${url}/sms/send`,
    headers: {
      "Content-Type": "application/json",
    },
    data,
  });

  console.log(res.data);

  return res.data;
});

const smsSlice = createSlice({
  name: "sms",
  initialState,
  reducers: {
    reset: (state) => {
      (state.success = true),
        (state.error = true),
        (state.loading = true),
        (state.data = {});
    },
  },
  extraReducers(builder){
    builder.addCase(SendSMS.pending,(state) => {
        state.loading = true
    })
    builder.addCase(SendSMS.fulfilled,(state,action) => {
        state.loading = false
        state.success = true
        state.error = false
        state.data = action.payload
    })
    builder.addCase(SendSMS.rejected,(state) => {
        state.loading = false
        state.success = false
        state.error = true
    })
  }
});


export const {reset} = smsSlice.actions
export default smsSlice.reducer
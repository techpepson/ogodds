import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://ogsoo-engine.onrender.com";
const amount = "5300";
const _token = localStorage.getItem("token");
const token = _token?.replace(/^"(.*)"$/, "$1");

export const InitializePayment = createAsyncThunk(
  "payment/initialize",
  async (data: any, thunkApi) => {
    try {
      const { email } = data;

      const res = await axios({
        method: "post",
        url: `${url}/payment/create`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: {
          email,
          amount,
          currency: "GHS",
          channels: ["card", "mobile_money"],
          callback_url: "https://ogodds.vercel.app/vip",
        },
      });

      return res.data;
    } catch (e) {
      console.log(e);
      return thunkApi.rejectWithValue({ error: e });
    }
  }
);

export const VerifyPayment = createAsyncThunk(
  "payment/verify",
  async (reference: any, thunkApi) => {
    try{
        const res = await axios({
      method: "post",
      url: `${url}/payment/verify`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: {
        reference,
      },
    });

    return res.data;
    }catch(e){
        console.log(e)
        return thunkApi.rejectWithValue({error:e})
    }
  }
);

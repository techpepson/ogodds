import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const url = "https://ogsoo-engine.onrender.com";

// register user
export const RegisterUser = createAsyncThunk(
  "register",
  async (data: any, thunkAPI) => {
    console.log(data)
    try {
      const res = await axios({
        method: "post",
        url: `${url}/auth/register`,
        headers: {
          "Content-Type": "application/json",
        },
        data,
      });

      return res.data
    } catch (e) {
      return thunkAPI.rejectWithValue({ error: e });
    }
  }
);

// create session
export const CreateSession = createAsyncThunk(
  "session",
  async (data: any, thunkAPI) => {
    try {
      const res = await axios({
        method: "post",
        url: `${url}/auth/session/create`,
        headers: {
          "Content-Type": "application/json",
        },
        data:{
          _id:data._id
        },
      });
      
      console.log("session",res.data)
      return res.data
    } catch (e) {
      return thunkAPI.rejectWithValue({ error: e });
    }
  }

);

// user
export const GetUser = createAsyncThunk(
  "user",
  async (_: any, thunkAPI) => {
    try {
      const res = await axios({
        method: "get",
        url: `${url}/auth/me`,
        headers: {
          "Content-Type": "application/json",
        }
      });

      return res.data
    } catch (e) {
      return thunkAPI.rejectWithValue({ error: e });
    }
  }

);

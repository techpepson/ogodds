import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://ogsoo-engine.onrender.com"

export const LatestSlip:any = createAsyncThunk("latest/slip",async(token:any,thunkAPI) => {
    try{
        const _token = token?.replace(/^"(.*)"$/, "$1")
        const res = await axios(
        {
            method:"get",
            url:`${url}/slip/latest`,
            headers:{
                "Content-Type":"application/json",
                Authorization: `Bearer ${_token}`
            }
        }
    )

    return res.data
    }catch(e){
        console.log(e)
        return thunkAPI.rejectWithValue({error:e})
    }
});


export const GetAllSlips:any = createAsyncThunk("all/slips", async (token:any,thunkAPI) => {
    try{
        const _token = token?.replace(/^"(.*)"$/, "$1")
        const res = await axios(
        {
            method:"get",
            url:`${url}/slip/all`,
            headers:{
                "Content-Type":"application/json",
                Authorization: `Bearer ${_token}`
            }
        }
    )

      console.log("slips",res.data);
    return res.data
    }catch(e){
        console.log(e)
        return thunkAPI.rejectWithValue({error:e})
    }
})

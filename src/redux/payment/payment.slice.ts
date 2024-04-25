import { createSlice } from "@reduxjs/toolkit"
import { InitializePayment, PaymentsSum, VerifyPayment } from "./payment.reducer"

const initialState = {
    success:false,
    error:false,
    loading:false,
    initializedPayment:false,
    sum:"",
    data:{},
    url:""
}

const paymentSlice = createSlice({
    name:"payment",
    initialState,
    reducers: {
        reset: (state) => {
            state.success = false
            state.error = false
            state.data = {}
            state.loading = false
            state.url = ""
        },
        initializePayment: (state) => {
            state.initializedPayment = true
        }
    },
    extraReducers(builder){
        builder
        .addCase(InitializePayment.pending, (state) => {
            state.loading = true
        })
        .addCase(InitializePayment.fulfilled, (state,action) => {
            state.loading = false
            state.success = true
            state.error = false
            state.data = action.payload
            state.url = action.payload?.data?.data?.authorization_url
        })
        .addCase(InitializePayment.rejected, (state) => {
            state.loading = false
            state.success = false
            state.error = true
        })
        .addCase(VerifyPayment.pending, (state) => {
            state.loading = true
        })
        .addCase(VerifyPayment.fulfilled, (state,action) => {
            state.loading = false
            state.success = true
            state.error = false
            state.data = action.payload
        })
        .addCase(VerifyPayment.rejected, (state) => {
            state.loading = false
            state.success = false
            state.error = true
        })
        .addCase(PaymentsSum.pending, (state) => {
            state.loading = true
        })
        .addCase(PaymentsSum.fulfilled, (state,action) => {
            state.loading = false
            state.success = true
            state.error = false
            state.sum = action.payload
        })
        .addCase(PaymentsSum.rejected, (state) => {
            state.loading = false
            state.success = false
            state.error = true
        })
    }
})

export const {reset,initializePayment} = paymentSlice.actions
export default paymentSlice.reducer
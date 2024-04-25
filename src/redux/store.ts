import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./auth/auth.slice"
import slipSlice from "./slip/slip.slice";
import paymentSlice from "./payment/payment.slice";
import smsSlice from "./mail.slice"

const store = configureStore({
    reducer:{
        auth:authSlice,
        slips:slipSlice,
        payment:paymentSlice,
        sms:smsSlice
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>;
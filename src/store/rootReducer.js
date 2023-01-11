import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "../redux/slice";

export const rootReducer = combineReducers({
    auth: authSlice.reducer // authSlice object reducer function
})

console.log("auth clice", authSlice);
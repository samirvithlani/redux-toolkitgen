import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux/CartSlice";
import userReducer from "./redux/UserSlice";

export const store = configureStore({
    reducer:{
        //reducerName
        cart: cartReducer,
        user: userReducer
    }
})
import { configureStore } from '@reduxjs/toolkit';
import CartSlice from "./Slices/cartSlice"

export const store = configureStore({
    reducer:{
        cart:CartSlice,
    }
})












// import {configureStore} from "@reactjs/toolkit"
// import cartSlice from "./Slices/cartSlice"


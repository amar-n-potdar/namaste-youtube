import { configureStore } from "@reduxjs/toolkit";
import appslice from "./appslice"
import chatSlice from "./chatSlice"
 const store=configureStore({
    reducer:{
          app:appslice,
          Livechat:chatSlice,
    }
 })
 export default store;
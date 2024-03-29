import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import userSlice from "./userSlice";

const store = configureStore({
    reducer: {
        counterState: counterSlice.reducer,
        userState: userSlice.reducer
    } 
});

export default store
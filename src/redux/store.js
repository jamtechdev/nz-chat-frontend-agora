import { configureStore } from "@reduxjs/toolkit";
import { chatReducer, userReducer } from "./reducers/userReducer";

const store = configureStore({
    reducer:{
        user : userReducer,
        currentChat : chatReducer
    }
});

export default store;
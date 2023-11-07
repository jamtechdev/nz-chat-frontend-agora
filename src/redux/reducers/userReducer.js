import { createReducer } from "@reduxjs/toolkit";

const userInitialState = {
    isAuthenticated: false
}

export const userReducer = createReducer(
    userInitialState,
    {
        authRequest: (state, action) => {
            state.loading = true;
        },
        authSuccess: (state, action) => {
            state.loading = false;
            state.uid = action.payload.uid;
            state.name = action.payload.data.name;
            state.phone = action.payload.data.phone;
            state.photo = action.payload.data.photo;
            state.status = action.payload.data.status;
            state.thumbImg = action.payload.data.thumbImg;
            state.isAuthenticated = true;
            state.message = "Authentication Successful"
        },
        authFailure: (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.error = "Failed to authenticate";
        },
        logoutRequest: (state, action) => {
            state.loading = true;
        },
        logoutSuccess: (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = null;
            state.message = "Logout Successfully";
        },
        logoutFailure: (state, action) => {
            state.loading = false;
            state.error = "Logout failed";
        },

    }
);


export const chatReducer = createReducer(
    {},
    {
        // chatRequest: (state, action) => {
        //     state.isLoading = true;
        // },
        currentChat: (state, action) => {
            // state.isLoading = false;
            state.uid = action.payload.userId;
            state.name = action.payload.name;
            state.photo = action.payload.photo;
            state.userType = action.payload.userType;
            // state.phone = action.payload.phone;
            // state.status = action.payload.status;
            // state.thumbImg = action.payload.thumbImg;
        },
        // chatFailure: (state, action) => {
        //     state.isLoading = false;
        // },
    }
);
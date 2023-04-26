import { createSlice } from "@reduxjs/toolkit";
import {
    loginThunk, logoutThunk, registerThunk,
    profileThunk, updateUserThunk,
} from "../services/auth-thunks";


const authSlice = createSlice({
    name: "auth",
    initialState: { currentUser: null },
    reducers: {},
    extraReducers: {
        [loginThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
            localStorage.setItem('user', JSON.stringify(state.currentUser));
            console.log("Setting Current User to ", JSON.stringify(state.currentUser));
        },
        [logoutThunk.fulfilled]: (state) => {
            state.currentUser = null;

        },
        [profileThunk.fulfilled]: (state, { payload }) => {
            // state.currentUser = payload;
        },
        [updateUserThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
            localStorage.setItem('user', JSON.stringify(state.currentUser));
            console.log("Updating Current User to ", JSON.stringify(state.currentUser));
        },
        [registerThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
            localStorage.setItem('user', JSON.stringify(state.currentUser));
            console.log("Setting Current User to ", JSON.stringify(state.currentUser));
        },
    },
});
export default authSlice.reducer;
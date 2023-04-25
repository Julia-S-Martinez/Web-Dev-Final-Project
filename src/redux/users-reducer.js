const { createSlice } = require("@reduxjs/toolkit");
const {
    findAllUsersThunk,
    findUserByIdThunk,
    createUserThunk,
    deleteUserThunk,
    updateUserThunk,
    loginThunk,
    logoutThunk,
    profileThunk,
    registerThunk,
} = require("../services/users-thunks");

const initialState = {
    users: [],
    loading: false,
    error: null,
    currentUser: null,
};

const usersSlice = createSlice({
    name: "users",
    initialState: { currentUser: null },
    reducers: {},
    extraReducers: {
        [updateUserThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload;
            // state.users = state.users.map((user) =>
            //   user.id === action.payload.id ? action.payload : user
            // );
        },
    },
});

export default usersSlice.reducer;
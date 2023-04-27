import * as userService from "./users-service";
import * as authService from "./auth-service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const findAllUsersThunk = createAsyncThunk("users/findAll", async () => {
  const users = await userService.findAllUsers();
  return users;
});

export const findUserByIdThunk = createAsyncThunk(
  "users/findById",
  async (id) => {
    const response = await userService.findUserById(id);
    return response.data;
  }
);

export const createUserThunk = createAsyncThunk(
  "users/create",
  async (user) => {
    const response = await userService.createUser(user);
    return response;
  }
);
// updateProfileThunk
export const updateUserThunk = createAsyncThunk(
  "users/update",
  async (user) => {
    await userService.updateUser(user);
    return user;
  }
);

export const deleteUserThunk = createAsyncThunk("users/delete", async (id) => {
  await userService.deleteUser(id);
  return id;
});
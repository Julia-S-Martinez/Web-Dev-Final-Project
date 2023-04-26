import {api_object} from "./api-setup";
const USERS_API_URL = process.env.REACT_APP_SERVER_API_URL + "/user";

const api = api_object;

export const findAllUsers = async () => {
  const response = await api.get(USERS_API_URL);
  return response.data;
};

export const findUserById = async (id) => {
  const response = await api.get(`${USERS_API_URL}/${id}`);
  return response.data;
};

export const createUser = (user) => {
  return api.post(USERS_API_URL, user);
};

export const updateUser = (newUser) => {
  return api.put(`${USERS_API_URL}/${newUser._id}`, newUser);
};

export const deleteUser = (id) => {
  return api.delete(`${USERS_API_URL}/${id}`);
};
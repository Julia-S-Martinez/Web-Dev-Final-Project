import axios from "axios";
const USERS_API_URL = process.env.REACT_APP_SERVER_API_URL + "/user";

const api = axios.create({
  withCredentials: true,
});

export const findAllUsers = async () => {
  const response = await axios.get(USERS_API_URL);
  return response.data;
};

export const findUserById = async (id) => {
  const response = await axios.get(`${USERS_API_URL}/${id}`);
  return response.data;
};

export const findLikesByUserId = async (id) => {
  const response = await axios.get(`${USERS_API_URL}/${id}`);
  return response.data.liked_songs;
};

export const createUser = (user) => {
  return axios.post(USERS_API_URL, user);
};

export const updateUser = (newUser) => {
  return api.put(`${USERS_API_URL}/${newUser._id}`, newUser);
};

export const deleteUser = (id) => {
  return axios.delete(`${USERS_API_URL}/${id}`);
};
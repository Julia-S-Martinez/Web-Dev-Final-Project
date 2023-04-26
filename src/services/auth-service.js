import {api_object} from "./api-setup";

const USERS_URL = process.env.REACT_APP_SERVER_API_URL + "user";

const api = api_object;


export const login = async ({ username, password }) => {
    const response = await api.post(`${USERS_URL}/login`, {
        username,
        password,
    });
    const user = response.data;
    return user;
};

export const logout = async () => {
    const response = await api.post(`${USERS_URL}/logout`);
    return response.data;
};

export const profile = async () => {
    const response = await api.get(`${USERS_URL}/profile`);
    return response.data;
};


export const updateUser = async (user) => {
    const currentUser = JSON.parse(localStorage.getItem("user"));
    const response = await api.put(`${USERS_URL}/${currentUser.id}`);
    return response.data;
};


export const register = async ({ username, password, role }) => {
    const response = await api.post(`${USERS_URL}/register`, {
        username,
        password,
        role
    });
    console.log("User registered!")
    return response.data;
};
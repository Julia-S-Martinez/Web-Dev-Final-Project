import axios from "axios";
import {api_object} from "./api-setup";

const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
const USERS_URL = `${SERVER_API_URL}/users`;


// const api = axios.create({ withCredentials: true });
const api = api_object;


export const login = async ({ username, password }) => {
    const response = await api.post(`${USERS_URL}/login`, {
        username,
        password,
    }, {withCredentials : true, origin: "http://localhost:3000"});
    const user = response.data;
    return user;
};

export const logout = async () => {
    const response = await api.post(`${USERS_URL}/logout`,
        {withCredentials : true, origin: "http://localhost:3000"});
    return response.data;
};

export const profile = async () => {
    const response = await api.get(`${USERS_URL}/profile`,
        {withCredentials : true, origin: "http://localhost:3000"});
    return response.data;
};


export const updateUser = async (user) => {
    const response = await api.put(`${USERS_URL}`, user,
        {withCredentials : true, origin: "http://localhost:3000"});
    return response.data;
};


export const register = async ({ username, password, role }) => {
    const response = await api.post(`${USERS_URL}/register`, {
        username,
        password,
        role
    }, {withCredentials : true, origin: "http://localhost:3000"});
    console.log("User registered!")
    return response.data;
};
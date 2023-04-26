import axios from "axios";

export const api_object = axios.create({
    withCredentials: true,
});
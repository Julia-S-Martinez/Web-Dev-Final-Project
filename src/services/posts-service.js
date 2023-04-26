import axios from "axios";
import {api_object} from "./api-setup";
const POSTS_API_URL = process.env.REACT_APP_SERVER_API_URL + "post";


{/*
const api = axios.create({
    withCredentials: true,
});
*/}
const api = api_object;

export const findPosts = async (currentUser) => {
    let response = '';
    (currentUser?  response = await api.get(POSTS_API_URL + '/home/' + currentUser)
: response = await axios.get(POSTS_API_URL + '/home'))

    return response.data;
};
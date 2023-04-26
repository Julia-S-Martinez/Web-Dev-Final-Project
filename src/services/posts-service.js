import {api_object} from "./api-setup";
import axios from "axios";
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
: response = await api.get(POSTS_API_URL + '/home'))

    return response.data;
};

export const findPostByTrackId = async (sid) => {
    const response = await axios.get(process.env.REACT_APP_API + '/track/' + sid);
    return response.data;
}

export const findAllPosts = async () => {
    const response = await axios.get(POSTS_API_URL + '/');
    // console.log(response);
    return response.data;
}

export const likePost = async (post, currentUser) => {
    const response = await axios.put(process.env.REACT_APP_API + '/like/post/' + post.id, {
        userId: currentUser.id
    });
    return response.data;
}
import axios from "axios";
const POSTS_API_URL = process.env.REACT_APP_API + "post";

const api = axios.create({
    withCredentials: true,
});

export const findPosts = async (currentUser) => {
    let response = '';
    (currentUser?  response = await axios.get(POSTS_API_URL + '/home/' + currentUser.id)
: response = await axios.get(POSTS_API_URL + '/home'))

    return response.data;
};

export const findAllPosts = async () => {
    const response = await axios.get(POSTS_API_URL + '/');
    // console.log(response);
    return response.data;
}
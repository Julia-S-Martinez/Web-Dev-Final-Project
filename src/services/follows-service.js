import {api_object} from "./api-setup";

const USERS_API = process.env.REACT_APP_SERVER_API_URL + "users";

const api = api_object;


export const userFollowsUser = async (followerId, followedId) => {
    const response = await api.post(
        `${USERS_API}/${followerId}/follows/${followedId}`
    );
    return response.data;
};

export const userUnfollowsUser = async (followerId, followedId) => {
    const response = await api.delete(
        `${USERS_API}/${followerId}/follows/${followedId}`
    );
    return response.data;
};

export const findFollowsByFollowedId = async (followed) => {
    const response = await api.get(`${USERS_API}/followers/${followed}`);
    return response.data;
};

export const findFollowsByFollowerId = async (follower) => {
    const response = await api.get(`${USERS_API}/following/${follower}`);
    return response.data;
};
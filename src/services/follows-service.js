import axios from "axios";

const USERS_API = "http://localhost:4000/api/users";

export const userFollowsUser = async (followerId, followedId) => {
    const response = await axios.post(
        `${USERS_API}/${followerId}/follows/${followedId}`
    );
    return response.data;
};

export const userUnfollowsUser = async (followerId, followedId) => {
    const response = await axios.delete(
        `${USERS_API}/${followerId}/follows/${followedId}`
    );
    return response.data;
};

export const findFollowsByFollowedId = async (followed) => {
    const response = await axios.get(`${USERS_API}/followers/${followed}`);
    return response.data;
};

export const findFollowsByFollowerId = async (follower) => {
    const response = await axios.get(`${USERS_API}/following/${follower}`);
    return response.data;
};
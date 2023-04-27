import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import SongList from "../song_list";
import {useDispatch} from "react-redux";
import {findFollowsByFollowedId, findFollowsByFollowerId, userFollowsUser} from "../services/follows-service";
import {profileThunk, updateUserThunk, logoutThunk} from "../services/auth-thunks";
import {findUserById} from "../services/users-service";


const Profile = () => {
    const { userId } = useParams();
    const currentUser = JSON.parse(localStorage.getItem("user"));
    const [profile, setProfile] = useState(currentUser);
    const [likes, setLikes] = useState(currentUser.likes);
    const [following, setFollowing] = useState([]);
    const [follows, setFollows] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const fetchFollowing = async () => {
        const following = await findFollowsByFollowerId(profile._id);
        setFollowing(following);
    };
    const fetchFollowers = async () => {
        const follows = await findFollowsByFollowedId(profile._id);
        setFollows(follows);
    };

    const fetchProfile = async () => {
        if (userId) {
            const user = await findUserById(userId);
            setProfile(user);
            return;
        }
        const response = await dispatch(profileThunk());
        console.log("Received Profile Response Payload", response.payload);
        setProfile(response.payload);
    };
    const loadScreen = async () => {
        // if (!profile) {
        await fetchProfile();
        // }
        //await fetchFollowing();
        //await fetchFollowers();
        if (userId) {
            const user = await findUserById(userId);
            setProfile(user);
        }
    };
    const followUser = async () => {
        await userFollowsUser(currentUser._id, profile._id);
    };
    const updateProfile = async () => {
        await dispatch(updateUserThunk(profile));
    };

    useEffect(() => {
        loadScreen();
    }, [userId]);
    return(
        <>
        {<div>
            <h1>
                {
                    userId !== undefined &&
                    <button onClick={followUser} className="btn btn-primary float-end">
                        Follow
                    </button>
                }
                Profile {typeof userId !== undefined ? "me" : userId}
            </h1>
            {profile &&
                <div className="row pt-3">
                    <div className="col-3">
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-9">
                                <h1>{profile.username}</h1>
                                <div onClick={() => navigate('/edit-profile')}>Edit Profile</div>
                            </div>
                        </div>
                        <h1 className="pt-3">Recently Liked</h1>
                        <SongList songsArray={likes}/>
                    </div>
                    <div className="col-3">
                    </div>
                </div>}
            {follows && (
                <div>
                    <h2>Followers</h2>
                    <ul className="list-group">
                        {follows.map((follow) => (
                            <li className="list-group-item">
                                <Link to={`/profile/${follow.follower.username}`}>
                                    <h3>{follow.follower.username}</h3>
                                    <h3>{follow.follower._id}</h3>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {following && (
                <div>
                    <h2>Following</h2>
                    <ul className="list-group">
                        {following.map((follow) => (
                            <li className="list-group-item">
                                <Link to={`/profile/${follow.followed.username}`}>
                                    <h3>{follow.followed.username}</h3>
                                    <h3>{follow.followed._id}</h3>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {currentUser && (
                <>
                    <div>

                        <div>
                            <h2>
                                Welcome {currentUser.username} {currentUser._id}
                            </h2>
                        </div>

                    </div>
                    <button
                        className="btn btn-danger"
                        onClick={() => {
                            dispatch(logoutThunk());
                            localStorage.clear();
                            navigate("/login");
                        }}
                    >
                        Logout
                    </button> </>
            )}npm
        </div>
        }
        </>
    );
};

export default Profile;
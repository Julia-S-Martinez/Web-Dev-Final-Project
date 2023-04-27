import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import SongList from "../song_list";
import {useDispatch} from "react-redux";
import {findFollowsByFollowedId, findFollowsByFollowerId, userFollowsUser} from "../services/follows-service";
import {profileThunk, updateUserThunk, logoutThunk} from "../services/auth-thunks";
import {findUserById} from "../services/users-service";
import {findAllPosts} from "../services/posts-service";
import {getTrack} from "../spotify/spotify-service";
import SongItemWithName from "../song_list/song_item_with_name";
import SongItem from "../song_list/song_item";


const Profile = () => {
    const { userId } = useParams();
    const currentUser = JSON.parse(localStorage.getItem("user"));
    const [profile, setProfile] = useState(currentUser);
    const [likes, setLikes] = useState();
    const [songs, setSongs] = useState();
    const [following, setFollowing] = useState([]);
    const [follows, setFollows] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const fetchFollowing = async () => {
        const following = await findFollowsByFollowerId(profile._id);
        setFollowing(following);
    };
    const fetchFollowers = async () => {
        const promises = profile.followers.map( async (userId) => {
                const user = await findUserById(userId);
                return user;
            }
        )
        const followers = await Promise.all(promises);
        setFollows(followers);
    };

    const fetchProfile = async () => {
        if (userId) {
            const user = await findUserById(userId);
            //console.log("set other user ", user)
            setProfile(user);
            const recommendedList = await findAllPosts();
            setLikes(recommendedList.filter((item) => (item.likedUsers.includes(profile._id))));

            return;
        }
        const response = await dispatch(profileThunk());
        //console.log("Received Profile Response Payload", response.payload);
        setProfile(response.payload);
        const recommendedList = await findAllPosts();
        //console.log(recommendedList[recommendedList.length - 1].likedUsers.includes(profile._id), profile._id)
        setLikes(recommendedList.filter((item) => (item.likedUsers.includes(profile._id))));

    };
    const loadScreen = async () => {
        // if (!profile) {
        await fetchProfile();
        // }
        //await fetchFollowing();
        await fetchFollowers();
        if (userId) {
            const user = await findUserById(userId);
            //console.log("set other user ", user)
            setProfile(user);
        }
    };
    const followUser = async () => {
        await userFollowsUser(currentUser._id, profile._id);
        fetchFollowers()
    };
    const updateProfile = async () => {
        await dispatch(updateUserThunk(profile));
    };
    const fetchSongs = async () => {
        //console.log("likes",likes);
        const promises = likes.map(async (post) => {
            let song = await getTrack(post.trackId);
            //console.log("song image: ", typeof song.album.images[0].url);
            return song;
        });
        const s = await Promise.all(promises);
        setSongs(s);
        //console.log("songs list:", s);
    }

    useEffect(() => {
        loadScreen();
    }, [userId]);

    useEffect(() => {
        (likes && fetchSongs())
    }, [likes]);

    if(!currentUser && !userId) {
        return(<h1>Please log in or select a user</h1>)
    }

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
                        <h1 className="pt-3">{profile.role=="LISTENER" ? "Recently Liked" : "Claimed Songs"}</h1>
                        {songs && songs.map((song) =>
                            <SongItem song={song}/>
                        ).reverse()}
                    </div>
                    <div className="col-3">
                    </div>
                </div>}
            {follows && (
                <div>
                    <h2>Followers</h2>
                    <ul className="list-group">
                        {follows.map((follow) => (
                            <li className="list-group-item" key={follow._id}>
                                <Link to={`/profile/${follow.username}`}>
                                    <h3>{follow.username}</h3>
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
            {(currentUser && !userId) && (
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
            )}
        </div>
        }
        </>
    );
};

export default Profile;
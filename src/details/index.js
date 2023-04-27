import {useParams} from "react-router-dom";
import { getTrack} from "../spotify/spotify-service";
import {useEffect, useState} from "react";
import {Heart, HeartFill} from "react-bootstrap-icons";
import {useDispatch, useSelector} from "react-redux";
import {createPostThunk, updatePostThunk} from "../services/posts-thunks";
import {findPostByTrackId} from "../services/posts-service";
import {createPost} from "../services/posts-service"
import {profile} from "../services/auth-service";
import store from "../redux/store";

function Details() {
    let currentUser = JSON.parse(localStorage.getItem("user"));
    const { sid } = useParams();
    console.log(sid);
    const [song, setSong] = useState();
    const [post, setPost] = useState();
    const [heart, setHeart] = useState(<Heart></Heart>);
    const [claimed, setClaimed] = useState(<div className="badge bg-warning" style={{fontSize: "20px"}}>Claim this song</div>);
    const searchSpotify = async () => {
        const results = await getTrack(sid);
        setSong(results);
        return;
    };
    const findPost = async () => {
        const results = await findPostByTrackId(sid);
        console.log("setting post: ", results[results.length - 1])
        if (results.length > 0) {
            setPost(results[results.length - 1]);
            console.log("post set!")
        } else {
            setPost(null);
        }
        return;
    }

    const updateHeart = () => {
        console.log("Post: ", post);
        console.log("Current user: ", currentUser);
            if(post && post.likedUsers.includes(currentUser._id)) {
                setHeart(<HeartFill></HeartFill>);
                setClaimed(<div className="badge bg-warning" style={{fontSize: "20px"}}>Song claimed!</div>)
            } else {
                setHeart(<Heart></Heart>);
                setClaimed(<div className="badge bg-success" style={{fontSize: "20px"}}>Claim this song</div>)
            }
    }

    // console.log(song);
    useEffect(() => {
        searchSpotify()
        findPost()
        updateHeart()
    }, [sid]);


    useEffect(() => {
        updateHeart()
        updateUser()
    }, [post]);

    const dispatch = useDispatch();
    const updateUser = async () => {
        const newUser = await profile();
        console.log("Currently Signed in User", newUser);
        localStorage.setItem('user', JSON.stringify(currentUser));
    }

    const likeButton = async () => {
        if (currentUser) {
            console.log(sid);
            // console.log("Attempting to Create Artist with name: ", song.artists[0].name);
            // const response = store.dispatch(createPostThunk({trackId: sid, userId: song.artists[0].name}));
            if (post === null) {
                const response = await createPost(sid, song.artists[0].name);
                console.log("Response: ", response);
                await dispatch(updatePostThunk({post: response, currentUser: currentUser}));
            } else {
                await dispatch(updatePostThunk({post: post, currentUser: currentUser}));
            }
            await findPost();
            updateHeart();
            await updateUser();
        } else {
            alert("Please login to like this song!")
        }
    }
    return(
        <>
            {/*bigger screens*/}
            <div className="container card d-none d-lg-none d-xl-block">
                <div className="row">
                    <div className="" style={{padding: 'initial'}}>
                        {song && (
                            <div className="w-100 w-md-50 m-auto">
                                <div className="d-flex">
                                    <div>
                                        <img className="" src={song.album.images[0].url} />
                                    </div>
                                    <div className="ms-4 mt-4">
                                        <div className="fw-bold d-flex" style={{ fontSize: "50px" }}>
                                            <div className="pe-2" onClick={likeButton}>
                                                {currentUser && currentUser.role=="ARTIST" ? claimed : heart}
                                            </div>
                                            {song.name}
                                        </div>
                                        <div className="fw-bold mb-3" style={{fontSize: '30px'}}>
                                            {song.artists.map((artist, index) => (
                                                <span key={artist.id}>
                                                    {artist.name}
                                                    {index < song.artists.length - 1 ? ', ' : ''}
                                                </span>
                                            ))}
                                        </div>
                                        <div style={{fontSize: '25px'}}>from the album: <span className="fw-bold">{song.album.name}</span></div>
                                        <div style={{fontSize: '25px'}}>released on: <span className="fw-bold">{song.album.release_date}</span></div>
                                        <div style={{fontSize: '25px'}}>{song.album.album_type}</div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {/*smaller screens*/}
            <div className="container card d-block d-xl-none">
                <div className="row">
                    <div className="" style={{padding: 'initial'}}>
                        {song && (
                            <div className="w-100 w-md-50 m-auto">
                                <div className="">
                                    <div>
                                        <img className="w-100" src={song.album.images[0].url} />
                                    </div>
                                    <div className="ms-4 mt-2 pb-3">
                                        <div className="fw-bold d-flex" style={{ fontSize: "50px" }}>
                                            <div className="pe-2" onClick={likeButton}>
                                                {currentUser && currentUser.role=="ARTIST" ? claimed : heart}
                                            </div>
                                            {song.name}
                                        </div>
                                        <div className="fw-bold mb-3" style={{fontSize: '30px'}}>
                                            {song.artists.map((artist) => artist.name + " ")}
                                        </div>
                                        <div style={{fontSize: '30px'}}>from the album: {song.album.name}</div>
                                        <div style={{fontSize: '30px'}}>released: {song.album.release_date}</div>
                                        <div style={{fontSize: '30px'}}>{song.album.album_type}</div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>)
};

export default Details;
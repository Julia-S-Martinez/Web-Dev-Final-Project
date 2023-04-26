import {useParams} from "react-router-dom";
import { getTrack} from "../spotify/spotify-service";
import {useEffect, useState} from "react";
import Comment from "../comments/comment"
import {Heart, HeartFill} from "react-bootstrap-icons";
import {useDispatch, useSelector} from "react-redux";
import {updatePostThunk} from "../services/posts-thunks";
import {findPostByTrackId} from "../services/posts-service";

function Details() {
    const { sid } = useParams();
    console.log(sid);
    const [song, setSong] = useState();
    const [post, setPost] = useState();
    const [heart, setHeart] = useState(<Heart></Heart>);
    const searchSpotify = async () => {
        const results = await getTrack(sid);
        setSong(results);
        return;
    };
    const findPost = async () => {
        const results = await findPostByTrackId(sid);
        setPost(results);
        setHeart(post.likedUsers.includes(currentUser.userId) ? <HeartFill></HeartFill> : <Heart></Heart>);
        return;
    }

    // console.log(song);
    useEffect(() => {
        searchSpotify()
        findPost()
    }, [sid]);


    const { currentUser } = useSelector((state) => state.currentUser);
    const dispatch = useDispatch();

    const likeButton = () => {
        if (currentUser) {
            dispatch (updatePostThunk({post}));
            findPost();
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
                                                {heart}
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
                                                {heart}
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
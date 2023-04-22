import {useParams} from "react-router-dom";
import { getTrack} from "../spotify/spotify-service";
import {useEffect, useState} from "react";
import Comment from "../comments/comment"

function Details() {
    const { sid } = useParams();
    console.log(sid);
    const [song, setSong] = useState();
    const searchSpotify = async () => {
        const results = await getTrack(sid);
        setSong(results);
        return;
    };

    // console.log(song);
    useEffect(() => {
        searchSpotify()
    }, [sid]);

    console.log(song);

    return(
        <>
            {/*bigger screens*/}
            <div className="container card d-none d-lg-none d-xl-block">
                <div className="row">
                    <div className="">
                        {song && (
                            <div className="w-100 w-md-50 m-auto">
                                <div className="d-flex">
                                    <div>
                                        <img className="" src={song.images[0].url} />
                                    </div>
                                    <div className="ms-4 mt-4">
                                        <div className="fw-bold" style={{ fontSize: "50px" }}>
                                            {song.name}
                                        </div>
                                        <div className="mb-2">
                                            {song.artists.map((artist) => artist.name + " ")}
                                        </div>
                                        <div>{song.release_date}</div>
                                        <div className="mb-3">
                                            <h2>Comments</h2>
                                            <Comment />
                                        </div>
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
                    <div className="">
                        {song && (
                            <div className="w-100 w-md-50 m-auto">
                                <div className="">
                                    <div>
                                        <img className="w-100" src={song.images[0].url} />
                                    </div>
                                    <div className="ms-4 mt-4">
                                        <div className="fw-bold" style={{ fontSize: "50px" }}>
                                            {song.name}
                                        </div>
                                        <div className="mb-2">
                                            {song.artists.map((artist) => artist.name + " ")}
                                        </div>
                                        <div>{song.release_date}</div>
                                        <div className="mb-3">
                                            <h2>Comments</h2>
                                            <Comment />
                                        </div>
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
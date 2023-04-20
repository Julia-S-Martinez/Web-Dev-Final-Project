import {useParams} from "react-router-dom";
import {fullTextSearch, getTrack} from "../spotify/spotify-service";
import {useEffect, useState} from "react";
import Comment from "../comments/comment"

function Details() {
    const { sid } = useParams();
    console.log(sid);
    const [song, setSong] = useState([]);
    const searchSpotify = async () => {
        const results = await getTrack(sid);
        setSong(results);
        return;
    };

    // console.log(song);
    useEffect(() => {
        searchSpotify()
    }, []);

    console.log(song);

    return(
        <>
            {song && <div className="card w-50 m-auto">
                <div className="d-flex">
                    <div>
                        {song && <img className="" src={song.images[0].url}/>}
                    </div>
                    <div className="ms-4 mt-4">
                        <div className="fw-bold" style={{fontSize: '50px', }}>{song.name}</div>
                        {song && <div className="mb-5">{song.artists.map((artist) => artist.name + ' ')}</div>}
                        <div>{song.release_date}</div>
                        <div>
                            <h2>Comments</h2>
                            <Comment />
                        </div>
                    </div>
                </div>
            </div>}
        </>)
};

export default Details;
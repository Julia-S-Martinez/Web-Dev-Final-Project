import React from "react";
import {Chat, ArrowRepeat, HeartFill, Heart, Share, HandThumbsDown, HandThumbsDownFill} from "react-bootstrap-icons";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
const SongItemWithName = (
    {
        song = { name: 'Honeybee', artists: 'Unknown Mortal Orchestra', image: 'umo.png', username: 'test'}
    }
) => {
    return(
        <div className="p-1 ps-0">
            <p>{song.username} recommends</p>
            <Link to={`/details/${song.id}`} style={{ textDecoration: 'none' }}>
                <div className="d-flex border border-white border-1 rounded-3 p-1">
                    <img className="rounded-2" style={{width: "150px", height: "150px"}} src={ song.album.images[0].url }/>
                    <div className="ps-2">
                        <h4 className="mb-0 pt-1 text-decoration-none">{song.name}</h4>
                        <div>
                            {song.artists.map((artist, index) => (
                                <span key={artist.id}>
                                                        {artist.name}
                                    {index < song.artists.length - 1 ? ', ' : ''}
                                                    </span>
                            ))}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};
export default SongItemWithName;
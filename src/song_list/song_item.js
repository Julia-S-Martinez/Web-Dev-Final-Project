import React from "react";
import {Chat, ArrowRepeat, HeartFill, Heart, Share, HandThumbsDown, HandThumbsDownFill} from "react-bootstrap-icons";
import {Link} from "react-router-dom";
const SongItem = (
    {
        song = { name: 'Honeybee', artists: 'Unknown Mortal Orchestra', image: 'umo.png'}
    }
) => {
    return(
        <div className="p-1 ps-0" >
            <div className="d-flex border border-white border-1 rounded-3 p-1">
                <img className="rounded-2" style={{width: "150px", height: "150px"}} src={ song.album.images[0].url }/>
                <div className="ps-2">
                    <h4 className="mb-0 pt-1">{song.name}
                        {/*<Heart/>*/}
                        {/*<HeartFill color="red"/>*/}
                        {/*<i className="bi bi-heart ps-1 pe-2"></i>*/}
                    </h4>
                    <Heart/>
                    <div>{song.artists.map((artist) => artist.name)}</div>
                    <Link to={`/details/${song.id}`}>
                        See Details
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default SongItem;
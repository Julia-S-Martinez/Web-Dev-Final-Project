import React from "react";
import SongItem from "./song_item";
const SongList = (
    {songsArray = []}
) => {
    return(
        <div className="col-md-12">
            {songsArray.length === 0 && <h3>No Songs Liked Yet!</h3>}
            {
                songsArray.map(song =>
                    <SongItem song={song}/> )
            }
        </div>
    );
};
export default SongList;
import React from "react";
import songsArray from './songs.json';
import SongItem from "./song_item";
const SongList = () => {
    return(
        <div className="col-md-12">
            {
                songsArray.map(song =>
                    <SongItem song={song}/> )
            }
        </div>
    );
};
export default SongList;
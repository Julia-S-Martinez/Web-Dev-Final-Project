import React, { useState, useEffect } from "react";
import SongItem from "../song_list/song_item";
import {useSelector} from "react-redux";
import {findPosts} from "../services/posts-service";
import {getTrack} from "../spotify/spotify-service";

function Recommended() {
    const { currentUser } = useSelector((state) => state.currentUser);
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        const fetchSongs = async () => {
            const songIds = await findPosts(currentUser);
            const songs = songIds.map(async (id) =>
                await getTrack(id));
            setSongs(songs);
            console.log(songs);
        }
        fetchSongs()
    }, []);
    return (
        <div className="w-50 m-auto">
            {songs && songs.map((result) =>
                <SongItem key= {result.trackId} song={result}/>
            )}
        </div>
    );
}

export default Recommended;
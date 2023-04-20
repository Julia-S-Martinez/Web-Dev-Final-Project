import React, { useState, useEffect } from "react";
import { fullTextSearch } from "./spotify-service";
import SongItem from "../song_list/song_item";
import {useSelector} from "react-redux";
import {findPosts} from "../services/posts-service";
function Recommended() {
    const { currentUser } = useSelector((state) => state.users);
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        const fetchSongs = async () => {
            const songs = await findPosts(currentUser);
            setSongs(songs);
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
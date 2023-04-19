import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fullTextSearch } from "./spotify-service";
import SongItem from "../song_list/song_item";
function SpotifySearchScreen() {
    const query = useParams().query;
    const [songs, setSongs] = useState([]);
    const searchSpotify = async () => {
        const results = await fullTextSearch(query);
        setSongs(results);
        return;
    };
    useEffect(() => {
        searchSpotify()
    }, []);
    return (
        <div className="w-50 m-auto">
            {songs && songs.map((result) =>
                <SongItem key= {result.trackId} song={result}/>
            )}
        </div>
    );
}

export default SpotifySearchScreen;
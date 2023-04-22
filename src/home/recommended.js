import React, { useState, useEffect } from "react";
import SongItem from "../song_list/song_item";
import {useSelector} from "react-redux";
import {findPosts} from "../services/posts-service";
import {getTrack} from "../spotify/spotify-service";
import SongItemWithName from "../song_list/song_item_with_name";
import songArray from "./home-songs.json";

function Recommended() {
    const { currentUser } = useSelector((state) => state.currentUser);
    const [songs, setSongs] = useState();
    const fetchSongs = async () => {
        const recommendedList = songArray;
        const promises = recommendedList.map(async (id) => {
            let song = await getTrack(id.sid);
            song.username = id.username;
            console.log(song);
            return song;
        });
        const s = await Promise.all(promises);
        // console.log("s before setSongs" + (s.map(song => song.images[0].url)));
        console.log("recommendedList: " + recommendedList);
        setSongs(s);
        console.log("songs list:" + s);
    }
    useEffect(() => {
        fetchSongs()
    }, []);
    return (
        <div className="w-50 m-auto">
            {songs && songs.map((result) =>
                <SongItemWithName song={result}/>
            )}
        </div>
    );
}

export default Recommended;
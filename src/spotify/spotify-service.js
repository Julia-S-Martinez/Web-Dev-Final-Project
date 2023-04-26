import axios from "axios";
import {api_object} from "../services/api-setup";

export const SPOTIFY_API = "https://api.spotify.com/v1";
export const SPOTIFY_KEY = process.env.REACT_APP_SPOTIFY_API_KEY;
// export const ALBUM_API = "http://localhost:4000/api/albums";


{/*
const api = axios.create({
    withCredentials: true,
});
*/}
const api  = api_object;

export const fullTextSearch = async (query) => {
    const response = await api.get(
        `${SPOTIFY_API}/search?q=${query}&type=track&limit=10&&access_token=${SPOTIFY_KEY}`
    );
    const json = await response.data;
    return json.tracks.items;
};

export const getAlbum = async (albumId) => {
    const response = await api.get(
        `${SPOTIFY_API}/albums/${albumId}?apikey=${SPOTIFY_KEY}`
    );
    const json = await response.data;
    return json.albums[0];
};

export const getTracks = async (albumId) => {

    console.log(`${SPOTIFY_API}/albums/${albumId}/tracks?apikey=${SPOTIFY_KEY}`);
    const response = await api.get(
        `${SPOTIFY_API}/albums/${albumId}/tracks?apikey=${SPOTIFY_KEY}`
    );
    const json = await response.data;
    return json.tracks;
};

export const getTrack = async (songId) => {
    const response = await api.get(
        `${SPOTIFY_API}/tracks/${songId}?access_token=${SPOTIFY_KEY}`
    )
    const json = await response.data;
    return json;
}

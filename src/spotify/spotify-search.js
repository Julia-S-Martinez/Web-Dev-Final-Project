import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fullTextSearch } from "./spotify-service";
import { useNavigate } from "react-router-dom";
import SongItem from "../song_list/song_item";
function SpotifySearchScreen() {
    const { searchTerm } = useParams();
    const navigate = useNavigate();
    const [search, setSearch] = useState(searchTerm);
    const [results, setResults] = useState([]);
    const searchSpotify = async () => {
        const results = await fullTextSearch(search);
        // console.log(results);
        setResults(results);
        navigate(`/spotify/search/${search}`);
    };
    useEffect(() => {
        // searchspotify();
        if (searchTerm) {
            setSearch(searchTerm);
            searchSpotify();
        }
    }, [searchTerm]);
    return (
        <div>
            <h1>Spotify Search Screen {searchTerm}</h1>
            <div className="form-group">
                <label>Search</label>
                <input
                    type="text"
                    className="form-control"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button onClick={searchSpotify} className="btn btn-primary">
                    Search
                </button>
                <div className="table-responsive">
                    <table className="table">
                        <tbody>
                        <tr>
                            {/*${console.log(results)}*/}
                            {results.items.map((result) => {
                                const songItemProps = {
                                    name: result.name,
                                    artist: result.album.artist,
                                    image: result.image,
                                }
                                return (
                                    <td>
                                        <SongItem song={songItemProps}/>
                                        {/*<Link to={`/spotify/album/${result.id}`}>*/}
                                        {/*    <img*/}
                                        {/*        src={`https://api.spotify.com/imageserver/v2/albums/${result.id}/images/300x300.jpg`}*/}
                                        {/*    />*/}
                                        {/*    <br />*/}
                                        {/*    <h2>{result.name}</h2>*/}
                                        {/*</Link>*/}
                                    </td>
                                );
                            })}
                        </tr>
                        </tbody>
                    </table>
                </div>

                <pre>{JSON.stringify(results, null, 2)}</pre>
            </div>
        </div>
    );
}

export default SpotifySearchScreen;
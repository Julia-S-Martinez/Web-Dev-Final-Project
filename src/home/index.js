import Recommended from "./recommended";
import SpotifySearchScreen from "../spotify/spotify-search";
import HomeFeed from "./recommended";

const Home = () => {
    return(
        <>
            <div className="col-6 m-auto">
                <h2>Recently Liked Songs</h2>
            </div>
            <Recommended />
        </>
    )
};

export default Home;
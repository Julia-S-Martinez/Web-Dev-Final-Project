import Navigation from "./navigation";
import Login from "./login";
// import Search from "./search";
import Home from "./home";

import {BrowserRouter, Routes, Route} from "react-router-dom";

import MyProfile from "./profile/my-profile";
import EditProfile from "./profile/edit-profile";
import SpotifySearchScreen from "./spotify/spotify-search";
import Profile from "./profile";
import Details from "./details";
import store from "./redux/store";
import {Provider} from "react-redux";

function App() {
  return (
      <div className="container-fluid">
          <Provider store={store}>
          <BrowserRouter>
              <Navigation/>
              <Routes>
                  <Route index element={<Home/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/my-profile" element={<MyProfile/>}/>
                  <Route path="/edit-profile" element={<EditProfile/>}/>
                  <Route path="/search/:query" element={<SpotifySearchScreen/>}/>
                  <Route path="/profile/:uid" element={<Profile/>}/>
                  <Route path="/details/:sid" element={<Details />}/>
              </Routes>
          </BrowserRouter>
          </Provider>
      </div>
  );
}

export default App;
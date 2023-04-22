import Navigation from "./navigation";
import Login from "./login";
// import Search from "./search";
import Home from "./home";

import {BrowserRouter, Routes, Route} from "react-router-dom";

import MyProfile from "./profile/profile";
import EditProfile from "./profile/edit-profile";
import SpotifySearchScreen from "./spotify/spotify-search";
import Profile from "./profile";
import Details from "./details";
import {Provider} from "react-redux";
import store from "./redux/store";
import CurrentUserContext from "./services/current-user-context";

function App() {
  return (
      <Provider store={store}>
          <CurrentUserContext>
      <div className="container-fluid">
          <Provider store={store}>
          <BrowserRouter>
              <Navigation/>
              <Routes>
                  <Route index element={<Home/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/profile" element={<Profile/>}/>
                  <Route path="/edit-profile" element={<EditProfile/>}/>
                  <Route path="/search/:query" element={<SpotifySearchScreen/>}/>
                  <Route path="/profile/:uid" element={<Profile/>}/>
                  <Route path="/details/:sid" element={<Details />}/>
              </Routes>
          </BrowserRouter>
          </Provider>
      </div>
              </CurrentUserContext>
      </Provider>
  );
}

export default App;
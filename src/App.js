import Navigation from "./navigation";
import Login from "./login";
import {useState} from "react";
import Post from "./post";

function App() {

  return (
    <div className="App mt-2">
      <Navigation></Navigation>
      <Login></Login>
      <Post></Post>
    </div>
  );
}

export default App;

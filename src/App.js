import Navigation from "./navigation";
import Login from "./login";
import Search from "./search";
import Home from "./home";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Nav} from "react-bootstrap";

function App() {
  return (
      <div className="container-fluid">
          <BrowserRouter>
              <Navigation/>
              <Routes>
                  <Route index element={<Home/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/search/:query" element={<Search/>}/>
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
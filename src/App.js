import Navigation from "./navigation";
import Login from "./login";
import Search from "./search";

import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
      <div>
          <BrowserRouter>
              <Routes>
                  <Route index element={<Navigation/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/search/:query" element={<Search/>}/>
              </Routes>
          </BrowserRouter>
          <div className="App mt-2">
              {/* <Navigation></Navigation>*/}
              <Login></Login>
          </div>
      </div>
  );
}

export default App;

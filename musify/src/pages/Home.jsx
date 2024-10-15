import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Library from "./Library";
import Feed from "./Feed";
import Favorites from "./Favorites";
import Player from "./Player";
import Trending from "./Trending";
import Sidebar from "../components/sidebar/Sidebar";
import Login from "./auth/login";
import { useState, useEffect } from "react";
import { setClientToken } from "../spotify";
import Logout from "./Logout";

function Home() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";

    if (!token && hash) {
      const token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", token);
      setToken(token);
      setClientToken(token);
    } else {
      setToken(token);
    }
  }, []);

  return !token ? (
    <Login />
  ) : (
    <Router>
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/library" element={<Library />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/player" element={<Player />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Home;

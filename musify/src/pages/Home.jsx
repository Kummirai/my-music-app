import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Library from "./Library";
import Feed from "./Feed";
import Favorites from "./Favorites";
import Player from "./Player";
import Trending from "./Trending";
import Sidebar from "../components/sidebar/Sidebar";

function Home() {
  return (
    <Router>
      <Sidebar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/player" element={<Player />} />
          <Route path="/trending" element={<Trending />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Home;

import APIKit from "../spotify";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Featured() {
  const [featured, setFeatured] = useState(null);

  useEffect(() => {
    APIKit.get("/browse/featured-playlists")
      .then((response) => {
        setFeatured(response.data.playlists.items);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  const navigate = useNavigate();

  const showFeatured = (feturedPlaylist) => {
    navigate("/player", { state: { id: feturedPlaylist } });
  };

  return (
    <div className="page-container">
      <div className="library-container">
        {featured?.map((playlist) => (
          <div
            key={playlist.id}
            onClick={() => {
              showFeatured(playlist.id);
            }}
          >
            <div className="playlist-card">
              <img src={playlist.images?.[0]?.url} alt={playlist.name} />
              <p className="title">{playlist.name}</p>
              <p className="sub-title">{playlist.popularity}</p>
              <p className="sub-title">{playlist.tracks.total} Songs</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Featured;

import APIKit from "../spotify";
import { useState, useEffect } from "react";
import "./library.css";

function Library() {
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    APIKit.get("me/playlists").then((response) => {
      setPlaylists(response.data.items);
      console.log(response.data.items);
    });
  }, []);

  return (
    <div className="page-container">
      <div className="library-container">
        {playlists?.map((playlist) => (
          <div key={playlist.id}>
            <div className="playlist-card">
              <img src="milton.jpg" alt={playlist.name} />
              <p className="title">{playlist.name}</p>
              <p className="sub-title">{playlist.tracks.total} Songs</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Library;

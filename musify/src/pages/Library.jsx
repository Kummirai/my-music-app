import APIKit from "../spotify";
import { useState, useEffect } from "react";
import "./library.css";
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Library() {
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    APIKit.get("me/playlists")
      .then((response) => {
        setPlaylists(response.data.items);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  const navigate = useNavigate();

  const playPlayList = (playlistId) => {
    navigate("/player", { state: { id: playlistId } });
  };

  return (
    <div className="page-container">
      <div className="library-container">
        {playlists?.map((playlist) => (
          <div
            key={playlist.id}
            onClick={() => {
              playPlayList(playlist.id);
            }}
          >
            <div className="playlist-card">
              <img src={playlist.images?.[0]?.url} alt={playlist.name} />
              <p className="title">{playlist.name}</p>
              <p className="sub-title">{playlist.name} Songs</p>
              <div className="playlist-fade">
                <IconContext.Provider value={{ size: "50px", color: "white" }}>
                  <AiFillPlayCircle />
                </IconContext.Provider>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Library;

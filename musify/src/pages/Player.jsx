import { useEffect } from "react";
import "./player.css";
import { useLocation } from "react-router-dom";
import apiClient from "../spotify";
import { useState } from "react";
import SongCard from "../components/songCard/SongCard";
import Queue from "../components/queue/Queue";

function Player() {
  const location = useLocation();
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  useEffect(() => {
    if (location.state) {
      apiClient
        .get("playlists/" + location.state?.id + "/tracks")
        .then((response) => {
          setTracks(response.data.items);
          setCurrentTrack(response.data?.items[0]?.track);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [location.state]);

  useEffect(() => {
    if (tracks.length > 0) {
      setCurrentTrack(tracks[currentTrackIndex].track);
    }
  }, [currentTrackIndex, tracks]);

  return (
    <div className="page-container">
      <div className="flex">
        <div className="left-player-container">
          <h1>Left</h1>
        </div>
        <div className="right-player-container">
          <SongCard song={currentTrack.album} />
          <Queue tracks={tracks} setCurrentTrackIndex={setCurrentTrackIndex} />
        </div>
      </div>
    </div>
  );
}

export default Player;

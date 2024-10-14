import "./audioPlayer.css";
import ProgressCircle from "./ProgressCircle";
import PropTypes from "prop-types";

function AudioPlayer({ currentTrack }) {
  const artists = [];
  currentTrack?.album?.artists.forEach((artist) => {
    artists.push(artist.name);
  });

  return (
    <div className="player-body">
      <div className="player-left-body">
        <ProgressCircle
          percentage={75}
          isPlaying={currentTrack?.album?.images[0]?.url}
          image={currentTrack?.album?.images[0]?.url}
          size={300}
          color="#fbfbfb"
        />
      </div>
      <div className="player-right-body">
        <p className="song-title">{currentTrack?.name}</p>
        <p className="song-artist">{artists.join(" | ")}</p>
        <div className="player-right-bottom">
          <div className="song-duration">
            <p className="duration">00:01</p>
            {/* <WaveAnimation /> */}
            <p className="duration">00:31</p>
          </div>
          <Controls
          isPlaying = {isPLaying}
          setIsPlaying = {setIsPlaying}
          handleNext = {handleNext}
          handlePrev = {handlePrev}
          total = {total}
          />
        </div>
      </div>
    </div>
  );
}

//props validation
AudioPlayer.propTypes = {
  currentTrack: PropTypes.object,
};

export default AudioPlayer;

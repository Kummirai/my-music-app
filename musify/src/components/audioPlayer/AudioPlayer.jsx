import "./audioPlayer.css";
import ProgressCircle from "./ProgressCircle";
import PropTypes from "prop-types";

function AudioPlayer({ currentTrack }) {
  return (
    <div className="player-body">
      <div className="player-left-body">
        <ProgressCircle
          percentage={75}
          isPlaying={true}
          image={currentTrack?.tracks}
          size={300}
          color="#fbfbfb"
        />
      </div>
      <div className="player-right-body"></div>
    </div>
  );
}

//props validation
AudioPlayer.propTypes = {
  currentTrack: PropTypes.object,
};

export default AudioPlayer;

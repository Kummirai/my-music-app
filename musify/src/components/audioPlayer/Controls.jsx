import { IoPlay, IoPlaySkipBack, IoPlaySkipForward } from "react-icons/io5";
import "./controls.css";
import { IconContext } from "react-icons";
import PropTypes from "prop-types";
import { FaPause } from "react-icons/fa";

function Controls({ isPlaying, setIsPlaying, handleNext, handlePrev }) {
  return (
    <IconContext.Provider value={{ size: "35px", color: "#c4d0e3" }}>
      <div className="controls-wrapper">
        <div className="action-btn" onClick={handlePrev}>
          <IoPlaySkipBack />
        </div>
        <div
          className="play-pause-btn"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? <FaPause /> : <IoPlay />}
        </div>
        <div className="action-btn" onClick={handleNext}>
          <IoPlaySkipForward />
        </div>
      </div>
    </IconContext.Provider>
  );
}

Controls.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  setIsPlaying: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  handlePrev: PropTypes.func.isRequired,
};

export default Controls;

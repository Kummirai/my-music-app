import "./Queue.css";
import PropTypes from "prop-types";

function Queue({ tracks, setCurrentTrackIndex }) {
  return (
    <div className="queue-container">
      <div className="queue">
        <p className="upNext">Up Next</p>
        <div className="queue-list">
          {tracks.map((track, index) => (
            <div key={index}>
              <p>{track.track.name}</p>
              <p>{track.track.artists[0].name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
Queue.propTypes = {
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      track: PropTypes.shape({
        name: PropTypes.string.isRequired,
        artists: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string.isRequired,
          })
        ).isRequired,
      }).isRequired,
    })
  ).isRequired,
  setCurrentTrackIndex: PropTypes.func.isRequired,
};

export default Queue;

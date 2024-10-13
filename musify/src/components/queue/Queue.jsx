import "./Queue.css";
import PropTypes from "prop-types";

function Queue({ tracks, setCurrentTrackIndex }) {
  console.log(tracks);

  return (
    <div className="queue-container">
      <div className="queue">
        <p className="upNext">Up Next</p>
        <div className="queue-list">
          {tracks.map((track, index) => (
            <div className="queueItem" key={index}>
              <p className="trackName">{track?.track.name}</p>
              <p>00:58</p>
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

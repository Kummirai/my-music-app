import "./albumArt.css";
import PropTypes from "prop-types";

function AlbumArt({ url }) {
  console.log(url);
  return <div>Album Art</div>;
}

AlbumArt.propTypes = {
  url: PropTypes.string.isRequired,
};

export default AlbumArt;

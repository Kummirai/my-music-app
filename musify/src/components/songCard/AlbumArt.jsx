import "./albumArt.css";
import PropTypes from "prop-types";

function AlbumArt({ url }) {
  console.log(url);
  return (
    <div className="albumImage">
      <img src="milton.jpg" alt="album art" className="albumImage-art" />
      <div className="albumImage-shadow">
        <img src="milton.jpg" alt="shadow" className="albumImage-shadow" />
      </div>
    </div>
  );
}

AlbumArt.propTypes = {
  url: PropTypes.string.isRequired,
};

export default AlbumArt;

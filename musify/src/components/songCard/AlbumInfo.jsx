import PropTypes from "prop-types";

function AlbumInfo({ album }) {
  console.log(album);

  return (
    <div>
      <div className="albumName-container">
        <p></p>
      </div>
      <div className="album-info">
        <p></p>
      </div>
      <div className="album-release">
        <p></p>
      </div>
    </div>
  );
}

AlbumInfo.propTypes = {
  album: PropTypes.object.isRequired,
};

export default AlbumInfo;

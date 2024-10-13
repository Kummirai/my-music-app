import PropTypes from "prop-types";
import "./albumInfo.css";

function AlbumInfo({ album }) {
  const artist = [];
  album?.artists.forEach((element) => {
    artist.push(element.name);
  });

  return (
    <div className="albumInfo-card">
      <div className="albumName-container">
        <div className="marquee-content">
          {album?.name + "-" + artist?.join(",")}
        </div>
      </div>
      <div className="album-info">
        <p>{`${album?.name} is an ${album?.album_type} by ${artist?.join(
          ","
        )} with ${album?.total_tracks} tracks `}</p>
      </div>
      <div className="album-release">
        <p>Release Date: {album?.release_date}</p>
      </div>
    </div>
  );
}

AlbumInfo.propTypes = {
  album: PropTypes.object.isRequired,
};

export default AlbumInfo;

import PropTypes from "prop-types";
import "./albumInfo.css";

function AlbumInfo({ album }) {
  console.log(album);

  const artist = [];
  album?.artists.forEach((artist) => {
    artist.push(artist.name);
  });

  return (
    <div className="albumInfo-card">
      <div className="albumName-container">
        <p>{album?.name + "-"+ artist?.join(",")}</p>
      </div>
      <div className="album-info">
        <p>{`${album?.name} is an ${album?.album_type} by ${artist?.join(",")} with ${album?.total_tracks} tracks `}</p>
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

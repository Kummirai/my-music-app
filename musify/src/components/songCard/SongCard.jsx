import "./SongCard.css";
import AlbumArt from "../songCard/AlbumArt";
import AlbumInfo from "../songCard/AlbumInfo";
import PropTypes from "prop-types";

function SongCard({ album }) {
  return (
    <div className="songCard-container">
      <AlbumArt url={album?.images[0]?.url} />

      <AlbumInfo album={album} />
    </div>
  );
}

//props validastion
SongCard.propTypes = {
  album: PropTypes.object.isRequired,
  track: PropTypes.object.isRequired,
};

export default SongCard;

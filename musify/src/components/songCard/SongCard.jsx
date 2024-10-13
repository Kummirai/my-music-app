import "./SongCard.css";
import AlbumArt from "../albumArt/AlbumArt";
import AlbumInfo from "../albumInfo/AlbumInfo";
import PropTypes from "prop-types";

function SongCard(props) {
  return (
    <div className="songCard-container">
      <AlbumArt url={props.album.images[0].url} />
      <AlbumInfo album={props.album} />
    </div>
  );
}

//props validastion
SongCard.propTypes = {
  album: PropTypes.object.isRequired,
};

export default SongCard;

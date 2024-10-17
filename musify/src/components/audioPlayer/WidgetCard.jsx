import "./widgetCard.css";
import PropTypes from "prop-types";
import WidgetEntry from "./WidgetEntry";
import { useNavigate } from "react-router-dom";

function WidgetCard({ title, similar, featured, newRelease }) {
  const navigate = useNavigate();
  const playPlayList = (playlistId) => {
    navigate("/player", { state: { id: playlistId } });
  };

  return (
    <div className="widgetcard-header">
      <p className="widget-title">{title}</p>
      <div className="widgetcard-body">
        {similar
          ? similar.map((artist) => (
              <WidgetEntry
                key={artist.id} // Add a unique key
                title={artist?.name}
                subtitle={`${artist?.followers?.total} followers`}
                image={artist?.images[0]?.url}
              />
            ))
          : featured
          ? featured.map((playlist) => (
              <WidgetEntry
                key={playlist.id} // Add a unique key
                title={playlist?.name}
                subtitle={playlist?.tracks?.total + " songs"}
                image={playlist?.images[0]?.url}
                onClick={() => playPlayList(playlist.id)}
              />
            ))
          : newRelease
          ? newRelease.map((album) => (
              <WidgetEntry
                key={album.id} // Add a unique key
                title={album?.name}
                subtitle={album?.artists[0]?.name}
                image={album?.images[2]?.url}
              />
            ))
          : null}
      </div>
    </div>
  );
}

// Add props validation
WidgetCard.propTypes = {
  title: PropTypes.string,
  similar: PropTypes.array,
  featured: PropTypes.array,
  newRelease: PropTypes.array,
};

export default WidgetCard;

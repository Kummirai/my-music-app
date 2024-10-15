import "./widgets.css";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import apiClient from "../../spotify";
import WidgetCard from "./WidgetCard";

function Widgets({ artistID }) {
  const [similar, setSimilar] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [newRelease, setNewRelease] = useState([]);
  const id = artistID?.artists[0]?.id;
  
  useEffect(() => {
    apiClient
      .get("/search?query=artist_name&offset=0&limit=3&type=artist")
      .then((response) => {
        const otherArtists = response.data?.artists.items.slice(0, 3);
        setSimilar(otherArtists);
        console.log("similar", otherArtists);
        
      })
      .catch((error) => {
        console.error(error);
        error;
      });

    apiClient
      .get(`/browse/featured-playlists`)
      .then((response) => {
        const otherArtists = response.data?.playlists.items.slice(0, 3);
        setFeatured(otherArtists);
      })
      .catch((error) => {
        console.error(error);
        error;
      });

    apiClient
      .get(`/browse/new-releases`)
      .then((response) => {
        const otherArtists = response.data?.albums.items.slice(0, 3);
        setNewRelease(otherArtists);
      })
      .catch((error) => {
        console.error(error);
        error;
      });
  }, [id]);

  return (
    <div className="widget-body">
      <WidgetCard title="Artists" similar={similar} />
      <WidgetCard title="Made For You" featured={featured} />
      <WidgetCard title="New Release" newRelease={newRelease} />
    </div>
  );
}

//props validation
Widgets.propTypes = {
  artistID: PropTypes.object,
};
export default Widgets;

import APIKit from "../spotify";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Artists() {
  const [artists, setArtists] = useState(null);

  useEffect(() => {
    APIKit.get("/search?query=artist_name&offset=0&limit=50&type=artist")
      .then((response) => {
        setArtists(response.data.artists.items);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  const navigate = useNavigate();

  const showArtist = (artistName) => {
    navigate("/artists", { state: { id: artistName } });
  };

  return (
    <div className="page-container">
      <div className="library-container">
        {artists?.map((artist) => (
          <div
            key={artist.id}
            onClick={() => {
              showArtist(artist.id);
            }}
          >
            <div className="playlist-card">
              <img src={artist.images?.[0]?.url} alt={artist.name} />
              <p className="title">{artist.name}</p>
              <p className="sub-title">{artist.followers.total} followers</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Artists;

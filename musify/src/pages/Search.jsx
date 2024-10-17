import APIKit from "../spotify";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    APIKit.get("/search?q=" + query + "&type=track")
      .then((response) => {
        console.log("response.data.tracks.items");

        setSearchResults(response.data.tracks.items);
      })
      .catch((error) => {
        console.log("error", error);
      });

    const delayDebounceFn = setTimeout(() => {
      console.log("query", query);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  const navigate = useNavigate();

  const playPlayList = (trackId) => {
    navigate("/player", { state: { id: trackId } });
  };

  return (
    <div className="page-container">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for songs, artists, albums"
      /> 
      <div className="library-container">
        {searchResults?.map((track) => (
          <div key={track.id} onClick={() => playPlayList(track.id)}>
            <div className="playlist-card">
              <img src={track.album.images?.[0]?.url} alt={track.name} />
              <p className="title">{track.name}</p>
              <p className="sub-title">{track.artists[0].name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;

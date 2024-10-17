import APIKit from "../spotify";
import { useState, useEffect } from "react";
import "./search.css";

function Search() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    APIKit.get("/search?q=" + query + "&type=track,artist,album")
      .then((response) => {
        console.log("response.data.tracks.items");

        setSearchResults(response.data.tracks.items);
      })
      .catch((error) => {
        console.log("error", error);
      });

    return () => {
      setSearchResults([]);
    };
  }, [query]);

  return (
    <div className="page-container">
      <div className="search-container">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for songs, artists, albums"
        />
      </div>
      <div className="list-container">
        {searchResults?.map((track) => (
          <div key={track.id}>
            <div className="list-card">
              <img src={track.album.images?.[0]?.url} alt={track.name} />
              <p className="title">{track.album.name}</p>
              <p className="sub-title artist">{track.name}</p>
              <p className="sub-title">{track.artists[0].name}</p>
              <p className="sub-title">{track.album.release_date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;

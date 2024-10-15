import "./logout.css";
import { useState, useEffect } from "react";

function Logout() {
  const setToken = useState(null)[1];

  useEffect(() => {
    const storedToken = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";

    if (!storedToken && hash) {
      const newToken = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", newToken);
      setToken(newToken);
    } else {
      setToken(storedToken);
    }
  }, [setToken]);

  const logout = () => {
    window.localStorage.removeItem("token");
    setToken(null);
    window.location.reload();
  };
  return (
    <div className="page-container">
      <div className="logout-page">
        <div className="logo-out">
          <img src="sound (1).png" alt="spotify logo" />
          <h1 className="logOut-title">Musify</h1>
        </div>
        <div className="logOut-container">
          <button onClick={logout} className="logOut-btn">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Logout;

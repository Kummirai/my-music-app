import "./sidebar.css";
import SidebarButton from "./SidebarButton";
import { MdFeaturedPlayList } from "react-icons/md";
import { FaPlay, FaSearch, FaUser } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { useEffect, useState } from "react";
import apiClient from "../../spotify";

function Sidebar() {
  const [userImage, setUserImage] = useState(
    "https://cdn.pixabay.com/photo/2023/06/23/11/23/ai-generated-8083323_1280.jpg"
  );
  const [userName, setUserName] = useState("User");

  useEffect(() => {
    apiClient.get("me").then((res) => {
      console.log(res);
      setUserImage(res.data.images[0].url);
    });
  }, []);

  useEffect(() => {
    apiClient.get("me").then((res) => {
      console.log(res);
      setUserName(res.data.display_name);
    });
  }, []);

  return (
    <div className="sidebar-container">
      <div className="profile">
        <img src={userImage} alt={userImage} className="user-image" />
        <p>{userName}</p>
      </div>
      <div className="buttons">
        <SidebarButton title="Search" to="/Search" icon={<FaSearch />} />
        <SidebarButton
          title="Playlists"
          to="/featured"
          icon={<MdFeaturedPlayList />}
        />
        <SidebarButton title="Artists" to="/artists" icon={<FaUser />} />
        <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
        <SidebarButton title="Library" to="/library" icon={<IoLibrary />} />
      </div>
      <SidebarButton
        title="Sign Out"
        to="/my-music-app/"
        icon={<FaSignOutAlt />}
      />
    </div>
  );
}

export default Sidebar;

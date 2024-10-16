import "./sidebar.css";
import SidebarButton from "./SidebarButton";
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
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
        <SidebarButton title="Featured" to="/featured" icon={<MdFavorite />} />
        <SidebarButton title="Artists" to="/artists" icon={<FaGripfire />} />
        <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
        <SidebarButton
          title="Favorites"
          to="/favorites"
          icon={<MdSpaceDashboard />}
        />
        <SidebarButton title="Library" to="/library" icon={<IoLibrary />} />
      </div>
      <SidebarButton title="Sign Out" to="/logout" icon={<FaSignOutAlt />} />
    </div>
  );
}

export default Sidebar;

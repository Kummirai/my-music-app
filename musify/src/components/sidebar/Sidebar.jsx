import "./sidebar.css";
import SidebarButton from "./SidebarButton";

function Sidebar() {
  return (
    <div className="sidebar-container">
      <img src="milton.jpg" alt="user image" className="user-image" />
      <div className="buttons">
        <SidebarButton />
        <SidebarButton />
        <SidebarButton />
        <SidebarButton />
        <SidebarButton />
      </div>
      <SidebarButton />
    </div>
  );
}

export default Sidebar;

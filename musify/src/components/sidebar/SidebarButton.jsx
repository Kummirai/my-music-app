import "./sideBarButton.css";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { IconContext } from "react-icons/lib";

function SidebarButton(props) {
  const location = useLocation();

  const isActive = location.pathname === props.to;

  const btnClass = isActive ? "btn-container active" : "btn-container";

  return (
    <Link to={props.to}>
      <div className={btnClass}>
        <IconContext.Provider value={{ size: "24px", className: "btn-icon" }}>
          {props.icon}
          <p className="title">{props.title}</p>
        </IconContext.Provider>
      </div>
    </Link>
  );
}

//props validation

SidebarButton.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default SidebarButton;

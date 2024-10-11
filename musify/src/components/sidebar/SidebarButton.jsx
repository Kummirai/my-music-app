import "./sideBarButton.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { IconContext } from "react-icons/lib";

function SidebarButton(props) {
  return (
    <Link to={props.to}>
      <div className="btn-container">
        <IconContext.Provider value={{ size: '24px', className:"btn-icon" }}>
          {props.icon}
          <p>{props.title}</p>
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

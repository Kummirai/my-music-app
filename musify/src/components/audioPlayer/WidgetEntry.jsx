import "./widgetEntry.css";
import PropTypes from "prop-types";

function WidgetEntry({ title, subtitle, image }) {
  return (
    <div className="entry-body">
      <img src={image} alt={title} className="entry-image" />
      <div className="entry-right-body">
        <p className="entry-title">{title}</p>
        <p className="entry-subtitle">{subtitle}</p>
      </div>
    </div>
  );
}

// Add props validation
WidgetEntry.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
};

export default WidgetEntry;

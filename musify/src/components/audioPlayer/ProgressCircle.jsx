import "./ProgressCircle.css";
import PropTypes from "prop-types";

const Circle = ({ color, percentage, size, strokeWidth }) => {
  const radius = size / 2 - 10;
  const circumference = 2 * Math.PI * radius - 20;
  const strokePercent = ((100 - Math.round(percentage)) * circumference) / 100;
  return (
    <circle
      r={radius}
      cx="50%"
      cy="50%"
      fill="transparent"
      stroke={strokePercent !== circumference ? color : ""}
      strokeDasharray={circumference}
      strokeDashoffset={percentage ? strokePercent : 0}
      strokeLinecap="round"
    />
  );
};

//props validation
Circle.propTypes = {
  color: PropTypes.string,
  percentage: PropTypes.number,
  size: PropTypes.number,
  strokeWidth: PropTypes.string,
};

function ProgressCircle({ percentage, isPlaying, image, size, color }) {
  return (
    <div className="progress-circle">
      <svg width={size} height={size}>
        <Circle color={"white"} size={size} strokeWidth={"0.4rem"} />
        <Circle
          color={color}
          percentage={percentage}
          size={size}
          strokeWidth={"0.6rem"}
        />
      </svg>
    </div>
  );
}

//props validation
ProgressCircle.propTypes = {
  percentage: PropTypes.number,
  isPlaying: PropTypes.bool,
  image: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};

export default ProgressCircle;

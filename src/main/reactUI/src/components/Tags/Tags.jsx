import PropTypes from "prop-types";
import "./Tags.css";

export default function Tags({ tagArray }) {
  return (
    // <div className="TagParent">
      <div className="Tags">{tagArray.tag}</div>
    // </div>
  );
}
Tags.propTypes = {
  tagArray: PropTypes.object.isRequired,
};

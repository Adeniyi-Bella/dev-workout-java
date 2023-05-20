import PropTypes from "prop-types";
import "./SearchInput.css";

const SearchInput = ({ onFilter }) => {
  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
    onFilter(searchTerm);
  };

  return (
    <div className="search-input-container">
      <input
        className="search-input"
        type="text"
        placeholder="Search..."
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchInput;

SearchInput.propTypes = {
    onFilter: PropTypes.func.isRequired,
    };
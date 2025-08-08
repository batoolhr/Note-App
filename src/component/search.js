import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const Search = ({ handleSearch }) => {
  return (
    <div className="search">
      <FontAwesomeIcon
        className="search-icon"
        icon={faSearch}
      ></FontAwesomeIcon>
      <input
        onChange={(event) => handleSearch(event.target.value)}
        type="text"
        placeholder="type to Search..."
      />
    </div>
  );
};

export default Search;

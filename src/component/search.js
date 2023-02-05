import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const Search = ({ hadnleSearch }) => {
  return (
    <div className="search">
      <FontAwesomeIcon
        className="search-icon"
        icon={faSearch}
      ></FontAwesomeIcon>
      <input
        onChange={(event) => hadnleSearch(event.target.value)}
        type="text"
        placeholder="type to Search..."
      />
    </div>
  );
};

export default Search;

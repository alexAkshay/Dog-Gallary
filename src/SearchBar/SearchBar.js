import "./SearchBar.css";

function SearchBar({ handleChange }) {
  return (
    <input
      className="searchbar"
      type="text"
      placeholder=" Type Here To Filter By Breed"
      onChange={(e) => handleChange(e.target.value)}
    />
  );
}
export default SearchBar;

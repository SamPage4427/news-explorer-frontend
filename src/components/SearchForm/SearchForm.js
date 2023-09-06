import { useState, useContext } from "react";
import NewsSearchContext from "../../contexts/NewsSearchContext.js";
import HasSearchedContext from "../../contexts/HasSearchedContext.js";

function SearchForm() {
  const { handleNewsSearch } = useContext(NewsSearchContext);
  const { setHasSearched } = useContext(HasSearchedContext);
  const [searchInput, setSearchInput] = useState("");
  const [keywords, setKeywords] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNewsSearch(searchInput);
    setHasSearched(true);
    setKeywords(searchInput);
    setSearchInput("");
  };

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <form className="search__form" onSubmit={handleSubmit}>
      <input
        className="search__input"
        type="text"
        placeholder="Enter Topic"
        minLength={2}
        maxLength={30}
        onChange={handleInputChange}
        required
      />
      <button className="search__button" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchForm;

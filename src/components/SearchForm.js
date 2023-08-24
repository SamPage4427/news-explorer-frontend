import { useState, useContext } from "react";
import NewsSearchContext from "../contexts/NewsSearchContext";
import HasSearchedContext from "../contexts/HasSearchedContext";

function SearchForm() {
  const { handleNewsSearch } = useContext(NewsSearchContext);
  const { setHasSearched } = useContext(HasSearchedContext);
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNewsSearch(search);
    setHasSearched(true);
    setSearch("");
  };

  const handleInputChange = (e) => {
    setSearch(e.target.value);
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
        value={search}
      />
      <button className="search__button" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchForm;

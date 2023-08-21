import SearchForm from "./SearchForm.js";

function Search({ handleSearch }) {
  return (
    <div className="search">
      <h2 className="search__title">What's going on in the world?</h2>
      <p className="search__explaination">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <SearchForm handleSearch={handleSearch} />
    </div>
  );
}

export default Search;

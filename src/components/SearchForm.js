function SearchForm({ handleSearch }) {
  return (
    <div className="search">
      <form className="search__form" onSubmit={handleSearch}>
        <input
          className="search__input"
          type="text"
          placeholder="Enter Topic"
          minLength={2}
          maxLength={30}
        ></input>
        <button className="search__button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchForm;

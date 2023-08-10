function SearchBar() {
  return (
    <div className="search">
      <form className="search__form">
        <input
          className="search__input"
          type="text"
          placeholder="Enter Topic"
          minLength={2}
          maxLength={30}
        ></input>
        <button className="search__button">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;

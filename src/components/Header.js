import Navigation from "./Navigation.js";
import Search from "./Search.js";

function Header({ onClick, handleSearch }) {
  return (
    <header className="header">
      <Navigation onClick={onClick} onSearch={handleSearch} />
      <Search />
    </header>
  );
}

export default Header;

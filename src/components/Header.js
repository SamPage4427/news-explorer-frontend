import Navigation from "./Navigation.js";
import Search from "./Search.js";

function Header({ onClick }) {
  return (
    <header className="header">
      <Navigation onClick={onClick} />
      <Search />
    </header>
  );
}

export default Header;

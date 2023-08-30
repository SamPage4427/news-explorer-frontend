import Navigation from "./Navigation.js";
import Search from "./Search.js";

function Header({ onSigninClick, onSignoutClick }) {
  return (
    <header className="header">
      <Navigation
        onSigninClick={onSigninClick}
        onSignoutClick={onSignoutClick}
      />
      <Search />
    </header>
  );
}

export default Header;

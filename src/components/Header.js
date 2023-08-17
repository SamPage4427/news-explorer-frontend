import Navigation from "./Navigation.js";

function Header({ onClick }) {
  return (
    <header className="header">
      <Navigation onClick={onClick} />
    </header>
  );
}

export default Header;

function Header({ onClick }) {
  const isLoggedIn = false;
  const currentUser = "Bill";
  return (
    <header className="header">
      <h1 className="header__name">NewsExplorer</h1>
      <div className="header__button-container">
        <button className="header__home">Home</button>
        {isLoggedIn ? (
          <button className="header__saved">Saved Articles</button>
        ) : (
          ""
        )}
        {isLoggedIn ? (
          <button className="header__profile">{currentUser.name}</button>
        ) : (
          <button className="header__profile" type="button" onClick={onClick}>
            Sign In
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;

import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

function Navigation({ onClick }) {
  const isLoggedIn = false;
  const currentUser = "Sam";
  return (
    <div className="nav">
      <NavLink to="/" className="nav__link">
        <h1 className="nav__title">NewsExplorer</h1>
      </NavLink>
      <div className="nav__button-container">
        <div className="nav__home-container">
          <NavLink to="/" className="nav__link">
            <button className="nav__home">Home</button>
          </NavLink>
          {!isLoggedIn ? <span className="nav__underline"></span> : ""}
        </div>
        {isLoggedIn ? (
          <div className="nav__saved-container">
            <NavLink to="/saved-news" className="nav__link">
              <button className="nav__saved">Saved Articles</button>
            </NavLink>
            <span className="nav__underline_saved"></span>
          </div>
        ) : (
          ""
        )}
        {isLoggedIn ? (
          <button className="nav__profile_signed-in">
            <h2 className="nav__username">{currentUser}</h2>
            <img className="nav__logout" type="button"></img>
          </button>
        ) : (
          <button className="nav__profile" type="button" onClick={onClick}>
            Sign In
          </button>
        )}
      </div>
    </div>
  );
}

export default Navigation;

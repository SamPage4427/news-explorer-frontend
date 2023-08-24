import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { useContext } from "react";
import CurrentPageContext from "../contexts/CurrentPageContext.js";

function Navigation({ onSigninClick, onSignoutClick }) {
  const { currentPage } = useContext(CurrentPageContext);
  const isLoggedIn = true;
  const currentUser = "Sam";

  return (
    <>
      {isLoggedIn && currentPage === "/" ? (
        <div className="nav">
          <NavLink to="/" className="nav__link">
            <h1 className="nav__title">NewsExplorer</h1>
          </NavLink>
          <div className="nav__button-container">
            <div className="nav__home-container">
              <NavLink to="/" className="nav__link">
                <button className="nav__home">Home</button>
              </NavLink>
              <span className="nav__underline"></span>
            </div>
            <div className="nav__saved-container">
              <NavLink to="/saved-news" className="nav__link">
                <button className="nav__saved">Saved Articles</button>
              </NavLink>
            </div>
            <div className="nav__profile_signed-in">
              <h2 className="nav__username">{currentUser}</h2>
              <button
                className="nav__logout"
                type="button"
                onClick={onSignoutClick}
              />
            </div>
          </div>
        </div>
      ) : isLoggedIn && currentPage === "/saved-news" ? (
        <div className="nav">
          <NavLink to="/" className="nav__link">
            <h1 className="nav__title_dark">NewsExplorer</h1>
          </NavLink>
          <div className="nav__button-container">
            <div className="nav__home-container">
              <NavLink to="/" className="nav__link">
                <button className="nav__home_dark">Home</button>
              </NavLink>
            </div>
            <div className="nav__saved-container">
              <NavLink to="/saved-news" className="nav__link">
                <button className="nav__saved_dark">Saved Articles</button>
              </NavLink>
              <span className="nav__underline_saved"></span>
            </div>
            <div className="nav__profile_dark">
              <h2 className="nav__username_dark">{currentUser}</h2>
              <button
                className="nav__logout_dark"
                type="button"
                onClick={onSignoutClick}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="nav">
          <NavLink to="/" className="nav__link">
            <h1 className="nav__title">NewsExplorer</h1>
          </NavLink>
          <div className="nav__button-container">
            <div className="nav__home-container">
              <NavLink to="/" className="nav__link">
                <button className="nav__home">Home</button>
              </NavLink>
              <span className="nav__underline"></span>
            </div>
            <button
              className="nav__profile"
              type="button"
              onClick={onSigninClick}
            >
              Sign In
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navigation;

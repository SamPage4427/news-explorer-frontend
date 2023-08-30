import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { useContext } from "react";
import CurrentPageContext from "../contexts/CurrentPageContext.js";
import MobileContext from "../contexts/MobileContext.js";
import logoutDark from "../images/logout-saved.svg";
import logout from "../images/logout.png";

function Navigation({ onSigninClick, onSignoutClick }) {
  const { currentPage } = useContext(CurrentPageContext);
  const { isMobile, mobileMenuOpen, openMobileMenu } =
    useContext(MobileContext);
  const isLoggedIn = true;
  const currentUser = "Sam";

  return (
    <>
      {isLoggedIn && currentPage === "/" ? (
        <div className="nav">
          <NavLink to="/" className="nav__link">
            <h1 className="nav__title">NewsExplorer</h1>
          </NavLink>
          <button
            className={"nav__mobile"}
            type="button"
            onClick={openMobileMenu}
          />
          <div className="nav__button-container nav__container_hidden">
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
            <button className="nav__profile_signed-in" onClick={onSignoutClick}>
              <h2 className="nav__username">{currentUser}</h2>
              <img src={logout} className="nav__logout" alt="logout" />
            </button>
          </div>
        </div>
      ) : isLoggedIn && currentPage === "/saved-news" ? (
        <div className="nav__dark">
          <NavLink to="/" className="nav__link">
            <h1 className="nav__title_dark">NewsExplorer</h1>
          </NavLink>
          <button
            className={"nav__mobile-dark"}
            type="button"
            onClick={openMobileMenu}
          />
          <div className="nav__button-container nav__container_hidden">
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
            <button className="nav__profile_dark" onClick={onSignoutClick}>
              <h2 className="nav__username_dark">{currentUser}</h2>
              <img src={logoutDark} className="nav__logout" alt="logout" />
            </button>
          </div>
        </div>
      ) : (
        <div className="nav">
          <NavLink to="/" className="nav__link">
            <h1 className="nav__title">NewsExplorer</h1>
          </NavLink>
          <button
            className={"nav__mobile"}
            type="button"
            onClick={openMobileMenu}
          />
          <div className="nav__button-container nav__container_hidden">
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

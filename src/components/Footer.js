import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <p className="footer__copyright">
        &copy; 2023 Supersite, Powered by News API
      </p>
      <div className="footer__socials">
        <NavLink exact to="/" className="footer__link">
          <p className="footer__home">Home</p>
        </NavLink>
        <NavLink to="#" className="footer__link">
          <p className="footer__tripleten">TripleTen</p>
        </NavLink>
        <NavLink to="" className="footer__link">
          <div className="footer__github"></div>
        </NavLink>
        <NavLink to="" className="footer__link">
          <div className="footer__facebook"></div>
        </NavLink>
      </div>
    </div>
  );
}

export default Footer;

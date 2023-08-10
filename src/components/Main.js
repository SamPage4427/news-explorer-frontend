import Header from "./Header.js";
import SearchBar from "./SearchBar.js";
import About from "./About.js";
import Footer from "./Footer.js";

function Main({ signinClick }) {
  return (
    <div className="main">
      <Header onClick={signinClick} />
      <div className="main__search-bar">
        <h2 className="main__title">What's going on in the world?</h2>
        <p className="main__explaination">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <SearchBar />
      </div>
      <div className="main__results"></div>
    </div>
  );
}

export default Main;

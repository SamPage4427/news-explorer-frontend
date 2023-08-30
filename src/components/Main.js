import Header from "./Header.js";
import NewsCardList from "./NewsCardList.js";
import About from "./About.js";
import Footer from "./Footer.js";

function Main({ signinClick, handleSearch }) {
  return (
    <div className="main">
      <Header name="nav" onClick={signinClick} handleSearch={handleSearch} />
      <div className="main__results">
        <NewsCardList />
      </div>
      <About />
      <Footer />
    </div>
  );
}

export default Main;

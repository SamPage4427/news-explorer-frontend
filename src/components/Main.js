import Header from "./Header.js";
import NewsCardList from "./NewsCardList.js";
import SearchForm from "./SearchForm.js";
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
        <SearchForm />
      </div>
      <div className="main__results">
        <NewsCardList />
      </div>
      <About />
      <Footer />
    </div>
  );
}

export default Main;

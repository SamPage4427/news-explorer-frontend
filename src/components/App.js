import "../blocks/App.css";

// react
import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

// components
import Main from "./Main.js";
import SavedNews from "./SavedNews.js";
import SigninModal from "./SigninModal.js";
import SignupModal from "./SignupModal.js";
import SuccessModal from "./SuccessModal.js";

// contexts
import CurrentUserContext from "../contexts/CurrentUserContext.js";
import CurrentPageContext from "../contexts/CurrentPageContext.js";
import SearchResultContext from "../contexts/SearchResultsContext.js";

// API
import { getNews } from "../utils/NewsApi.js";

function App() {
  const [currentUser, setCurrentUser] = useState("");
  const [activeModal, setActiveModal] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState("");
  const location = useLocation();

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location.pathname]);

  const handleOpenModal = (modal) => {
    setActiveModal(modal);
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleAltClick = () => {
    if (activeModal === "signin") {
      handleCloseModal();
      handleOpenModal("signup");
    }
    if (activeModal === "signup") {
      handleCloseModal();
      handleOpenModal("signin");
    }
  };

  const handleNewsSearch = (input) => {
    const searchNews = getNews(input);
    searchNews.then((data) => {
      setSearchResults(data.articles);
    });
  };

  const handleSuccessModalClick = () => {
    handleCloseModal();
    handleOpenModal("signin");
  };

  const handleSigninModal = () => handleOpenModal("signin");

  const handleSignupModal = () => handleOpenModal("signup");

  function handleSignin() {}
  function handleSignup() {
    // if (!user) {
    //   handleOpenModal("success");
    // }
  }

  useEffect(() => {
    if (!activeModal) return;
  });

  return (
    <div className="page">
      <CurrentPageContext.Provider value={{ currentPage }}>
        <CurrentUserContext.Provider value={{ currentUser, isLoggedIn }}>
          <SearchResultContext.Provider value={{ searchResults }}>
            <Route exact path="/">
              <Main
                signinClick={handleSigninModal}
                handleSearch={handleNewsSearch}
              />
            </Route>
            <Route path="/saved-news">
              <SavedNews />
            </Route>
            {activeModal === "signin" && (
              <SigninModal
                isOpen={handleSigninModal}
                onSignin={handleSignin}
                handleClose={handleCloseModal}
                onAltClick={handleAltClick}
              />
            )}
            {activeModal === "signup" && (
              <SignupModal
                isOpen={handleSignupModal}
                onSignup={handleSignup}
                handleClose={handleCloseModal}
                onAltClick={handleAltClick}
              />
            )}
            {activeModal === "success" && (
              <SuccessModal
                name="success"
                onClose={handleCloseModal}
                onClick={handleSuccessModalClick}
              />
            )}
          </SearchResultContext.Provider>
        </CurrentUserContext.Provider>
      </CurrentPageContext.Provider>
    </div>
  );
}

export default App;

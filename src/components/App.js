import "../blocks/App.css";

// react
import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

// components
import Main from "./Main.js";
import SavedNews from "./SavedNews.js";
import Footer from "./Footer.js";
import SigninModal from "./SigninModal.js";
import SignupModal from "./SignupModal.js";
import SuccessModal from "./SuccessModal.js";
import {
  ESC_KEYCODE,
  currentDate,
  getPreviousWeek,
} from "../utils/constants.js";

// contexts
import CurrentUserContext from "../contexts/CurrentUserContext.js";
import CurrentPageContext from "../contexts/CurrentPageContext.js";
import SearchResultContext from "../contexts/SearchResultsContext.js";
import HasSearchedContext from "../contexts/HasSearchedContext.js";
import NewsSearchContext from "../contexts/NewsSearchContext.js";
import IsLoadingContext from "../contexts/IsLoadingContext.js";
import SavedCardsContext from "../contexts/SavedCardsContext.js";

// API
import { getNews } from "../utils/NewsApi.js";

function App() {
  const [currentUser, setCurrentUser] = useState("");
  const [activeModal, setActiveModal] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState("/");
  const [keywords, setKeywords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [saveCards, setSavedCards] = useState([]);
  const location = useLocation();

  console.log(currentDate);
  console.log(getPreviousWeek());

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
    setIsLoading(true);
    const searchNews = getNews(input);
    searchNews
      .then((data) => {
        setHasSearched(true);
        setSearchResults(data.articles);
        console.log(data.articles);
        setIsLoading(false);
      })
      .then(console.log(searchResults));
  };

  const handleSuccessModalClick = () => {
    handleCloseModal();
    handleOpenModal("signin");
  };

  const handleSigninModal = () => handleOpenModal("signin");

  const handleSignupModal = () => handleOpenModal("signup");

  function handleSignin() {}
  function handleSignup() {
    // if (!existingUser) {
    //   handleOpenModal("success");
    // }
  }
  function handleSignout() {
    setCurrentUser("");
    setLoggedIn(false);
    setCurrentPage("/");
  }

  useEffect(() => {
    if (!activeModal) return;
    const handleEscClose = (e) => {
      if (e.which === ESC_KEYCODE) {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => document.removeEventListener("keydown", handleEscClose);
  }, [activeModal]);

  return (
    <div className="page">
      <CurrentPageContext.Provider value={{ currentPage }}>
        <CurrentUserContext.Provider value={{ currentUser, isLoggedIn }}>
          <NewsSearchContext.Provider value={{ handleNewsSearch }}>
            <IsLoadingContext.Provider value={{ isLoading, setIsLoading }}>
              <SearchResultContext.Provider value={{ searchResults }}>
                <HasSearchedContext.Provider
                  value={{ hasSearched, setHasSearched }}
                >
                  <SavedCardsContext.Provider
                    value={{ saveCards, setSavedCards }}
                  >
                    <Route exact path="/">
                      <Main
                        signinClick={handleSigninModal}
                        signoutClick={handleSignout}
                      />
                    </Route>
                    <Route path="/saved-news">
                      <SavedNews />
                    </Route>
                    <Footer />
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
                  </SavedCardsContext.Provider>
                </HasSearchedContext.Provider>
              </SearchResultContext.Provider>
            </IsLoadingContext.Provider>
          </NewsSearchContext.Provider>
        </CurrentUserContext.Provider>
      </CurrentPageContext.Provider>
    </div>
  );
}

export default App;

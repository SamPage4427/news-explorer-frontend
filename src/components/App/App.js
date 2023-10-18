import "./App.css";

// react
import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

// components
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";
import Main from "../Main/Main.js";
import SavedNews from "../SavedNews/SavedNews.js";
import Footer from "../Footer/Footer.js";
import SigninModal from "../SigninModal/SigninModal.js";
import SignupModal from "../SignupModal/SignupModal.js";
import SuccessModal from "../SuccessModal/SuccessModal.js";
import { ESC_KEYCODE } from "../../utils/constants.js";
import MobileMenu from "../MobileMenu/MobileMenu.js";

// contexts
import CurrentUserContext from "../../contexts/CurrentUserContext.js";
import CurrentPageContext from "../../contexts/CurrentPageContext.js";
import SearchResultContext from "../../contexts/SearchResultsContext.js";
import HasSearchedContext from "../../contexts/HasSearchedContext.js";
import NewsSearchContext from "../../contexts/NewsSearchContext.js";
import IsLoadingContext from "../../contexts/IsLoadingContext.js";
import SavedCardsContext from "../../contexts/SavedCardsContext.js";
import MobileContext from "../../contexts/MobileContext.js";

// API
import { getNews } from "../../utils/NewsApi.js";
import * as auth from "../../utils/auth.js";
import Api from "../../utils/MainApi.js";
import KeywordsContext from "../../contexts/KeywordsContext";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState("/");
  const [keyword, setKeyword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [savedCards, setSavedCards] = useState([]);
  const [token, setToken] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [serverErrors, setServerErrors] = useState({});

  const handleOpenModal = (modal) => {
    setActiveModal(modal);
  };

  const handleCloseModal = () => {
    setActiveModal("");
    setServerErrors({});
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
    searchNews.then((data) => {
      setHasSearched(true);
      setSearchResults(data.articles);
      setIsLoading(false);
    });
  };

  const handleSuccessModalClick = () => {
    handleCloseModal();
    handleOpenModal("signin");
  };

  const handleSigninModal = () => handleOpenModal("signin");

  const handleSignupModal = () => handleOpenModal("signup");

  const handleSuccessModal = () => handleOpenModal("success");

  function handleSignin({ email, password }) {
    auth
      .login({ email, password })
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        if (data.token) {
          return auth.validateToken(data.token);
        }
        setToken(data.token);
      })
      .then((res) => {
        const data = res.data;
        setLoggedIn(true);
        setCurrentUser(data);
        handleCloseModal();
      })
      .catch((err) => {
        console.error(`Error ${err} in signing in user`);
      });
  }

  function handleSignup({ email, password, name }) {
    auth
      .signup({ email, password, name })
      .then((res) => {
        if (res) {
          handleCloseModal();
          handleSuccessModal();
          setServerErrors({});
        } else {
          setServerErrors({
            ...serverErrors,
            conflictError: "This email is not available",
          });
        }
      })
      .catch((e) => {
        console.error(`Error signing user up. Error: ${e}`);
      });
  }

  function handleSignout() {
    localStorage.removeItem("jwt");
    setCurrentUser("");
    setLoggedIn(false);
    setCurrentPage("/");
    setToken("");
  }

  const openMobileMenu = () => {
    setMobileMenuOpen(true);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleMobileMenuOverlay = () => {
    handleSigninModal();
    closeMobileMenu();
  };

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location.pathname]);

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

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      auth
        .validateToken(jwt)
        .then((res) => {
          setCurrentUser(res.data);
          setToken(jwt);
          setLoggedIn(token !== "" ? true : false);
        })
        .then(() => {
          Api.getSavedArticles(jwt).then((data) => {
            setSavedCards(data);
          });
        })
        .catch((e) => {
          console.error(`Token validation in useEffect has error: ${e}`);
        });
    }
  }, [token]);

  return (
    <div className="page">
      <CurrentPageContext.Provider value={{ currentPage, activeModal }}>
        <CurrentUserContext.Provider value={{ currentUser, isLoggedIn }}>
          <NewsSearchContext.Provider value={{ handleNewsSearch }}>
            <IsLoadingContext.Provider value={{ isLoading, setIsLoading }}>
              <SearchResultContext.Provider value={{ searchResults }}>
                <HasSearchedContext.Provider
                  value={{ hasSearched, setHasSearched }}
                >
                  <SavedCardsContext.Provider
                    value={{ savedCards, setSavedCards }}
                  >
                    <KeywordsContext.Provider
                      value={{
                        keyword,
                        setKeyword,
                      }}
                    >
                      <MobileContext.Provider
                        value={{
                          mobileMenuOpen,
                          openMobileMenu,
                        }}
                      >
                        <Route exact path="/">
                          <Main
                            signinClick={handleSigninModal}
                            signoutClick={handleSignout}
                          />
                        </Route>
                        <ProtectedRoute path="/saved-news">
                          <SavedNews onSignoutClick={handleSignout} />
                        </ProtectedRoute>
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
                            serverErrors={serverErrors}
                          />
                        )}
                        {activeModal === "success" && (
                          <SuccessModal
                            name="success"
                            onClose={handleCloseModal}
                            onClick={handleSuccessModalClick}
                          />
                        )}
                        {mobileMenuOpen && (
                          <MobileMenu
                            onClose={closeMobileMenu}
                            onSigninClick={handleMobileMenuOverlay}
                            onSignoutClick={handleSignout}
                          />
                        )}
                      </MobileContext.Provider>
                    </KeywordsContext.Provider>
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

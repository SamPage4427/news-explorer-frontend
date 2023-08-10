import "../blocks/App.css";

// react
import { useState, useEffect } from "react";
import { Route } from "react-router-dom";

// components
import Main from "./Main.js";
import About from "./About.js";
import Footer from "./Footer.js";
import SigninModal from "./SigninModal.js";

// contexts
import CurrentUserContext from "../contexts/CurrentUserContext.js";

function App() {
  const [currentUser, setCurrentUser] = useState("");
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleOpenModal = (modal) => {
    setActiveModal(modal);
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleAltClick = () => {};

  const handleSigninModal = () => handleOpenModal("signin");

  function handleSignin() {}

  useEffect(() => {
    if (!activeModal) return;
  });

  return (
    <div className="page">
      <CurrentUserContext.Provider value={{ currentUser, isLoggedIn }}>
        <Route exact path="/">
          <Main signinClick={handleSigninModal} />
        </Route>
        <About />
        <Footer />
        {activeModal === "signin" && (
          <SigninModal
            isOpen={handleSigninModal}
            onSignin={handleSignin}
            handleClose={handleCloseModal}
            onAltClick={handleAltClick}
          />
        )}
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;

import "../blocks/App.css";

// react
import { useState, useEffect } from "react";
import { Route } from "react-router-dom";

// components
import Main from "./Main.js";
import SigninModal from "./SigninModal.js";

// contexts
import CurrentUserContext from "../contexts/CurrentUserContext.js";
import SignupModal from "./SignupModal.js";
import SuccessModal from "./SuccessModal.js";

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
      <CurrentUserContext.Provider value={{ currentUser, isLoggedIn }}>
        <Route exact path="/">
          <Main signinClick={handleSigninModal} />
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
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;

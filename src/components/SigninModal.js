import { useState } from "react";
import ModalWithForm from "./ModalWithForm";

function SigninModal({ isOpen, onSignin, handleClose, onAltClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {};

  return (
    <ModalWithForm
      name="signin"
      title="Sign In"
      onSubmit={handleSubmit}
      onClose={handleClose}
      handleAltClick={onAltClick}
      buttonText="Sign in"
      altButtonText="Sign up"
    >
      <label>
        <h3 className="modal__label">Email:</h3>
        <input
          className="modal__input"
          id="email-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </label>
      <span className="modal__error" id="email-input-error"></span>
      <label>
        <h3 className="modal__label">Password:</h3>
        <input
          className="modal__input"
          id="password-input"
          type="text"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </label>
      <span className="modal__error" id="password-input-error"></span>
    </ModalWithForm>
  );
}

export default SigninModal;

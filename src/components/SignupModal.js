import ModalWithForm from "./ModalWithForm";

function SignupModal({ onSubmit, onAltClick }) {
  return (
    <ModalWithForm
      name="signup"
      title="Sign Up"
      onSubmit={onSubmit}
      handleAltClick={onAltClick}
      buttonText="Sign up"
      altButtonText="Sign in"
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
      <label>
        <h3 className="modal__label">Username:</h3>
        <input
          className="modal__input"
          id="username-input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
          required
        />
      </label>
      <span className="modal__error" id="username-input-error"></span>
    </ModalWithForm>
  );
}

export default SignupModal;

import { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm.js";
import useFormWithValidation from "../../utils/useForm.js";

function SigninModal({ isOpen, onSignin, handleClose, onAltClick }) {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const { values, errors, handleChange, isValid, setIsValid, resetForm } =
    useFormWithValidation();
  const [isDisabled, setIsDisabled] = useState(false);

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  // };

  useEffect(() => {
    if (isOpen) {
      resetForm();
    }
  }, [isOpen]);

  useEffect(() => {
    if (values.email === "" || values.password === "") {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [values.email, values.password]);

  console.log(values);
  console.log(errors);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignin({ values });
  };

  return (
    <ModalWithForm
      name="signin"
      title="Sign In"
      onSubmit={handleSubmit}
      onClose={handleClose}
      handleAltClick={onAltClick}
      buttonText="Sign in"
      altButtonText="Sign up"
      isDisabled={isValid}
    >
      <label>
        <h3 className="modal__label">Email:</h3>
        <input
          className="modal__input"
          id="email-input"
          type="email"
          placeholder="Enter Email"
          name="email"
          value={values.email}
          onChange={handleChange}
          required
        />
      </label>
      <span className="modal__error" id="email-input-error">
        {errors.email}
      </span>
      <label>
        <h3 className="modal__label">Password:</h3>
        <input
          className="modal__input"
          id="password-input"
          type="password"
          placeholder="Enter Password"
          name="password"
          value={values.password}
          onChange={handleChange}
          required
        />
      </label>
      <span className="modal__error" id="password-input-error">
        {errors.password}
      </span>
      <span className="modal__error" id="incorrect-info-error"></span>
    </ModalWithForm>
  );
}

export default SigninModal;

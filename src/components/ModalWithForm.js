function ModalWithForm({
  children,
  name,
  title,
  onSubmit,
  onClose,
  buttonText,
  handleAltClick,
  altButtonText,
}) {
  return (
    <div className={`modal modal__type_${name}`}>
      <div className="modal__container">
        <h2 className="modal__title">{title}</h2>
        <button className="modal__close" type="button" onClick={onClose} />
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
        </form>
        <div className="modal__btn-container">
          <button className="modal__submit-btn" type="submit">
            {buttonText}
          </button>
          <button
            className="modal__alt-btn"
            type="button"
            onClick={handleAltClick}
          >
            or <span className="modal__alt-text">{altButtonText}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalWithForm;

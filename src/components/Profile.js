import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Profile({ onSubmit, onLogout, messageVisible, hideMessage }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  React.useEffect(() => {
    let timer;
    if (messageVisible) {
      timer = setTimeout(() => {
        hideMessage();
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [messageVisible]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(name, email);
  }

  return (
    <div className="profile">
      <h1 className="profile__greeting">Привет, {currentUser.name}!</h1>
      <form className="profile__form" onSubmit={handleSubmit}>
        <span className="profile__input-line">
          <p className="profile__input-text">Имя</p>
          <input
            className="profile__input profile__input_name"
            value={name || ""}
            onChange={handleNameChange}
          />
        </span>
        <span className="profile__input-line">
          <p className="profile__input-text">E-mail</p>
          <input
            className="profile__input profile__input_email"
            value={email || ""}
            onChange={handleEmailChange}
          />
        </span>
        <p
          className={`profile__message ${
            messageVisible ? "profile__message_visible" : ""
          }`}
        >
          Профиль успешно обновлён!
        </p>
        <button
          type="submit"
          className={`profile__button ${
            !(name === currentUser.name && email === currentUser.email)
              ? "hover-opacity"
              : ""
          }`}
          disabled={name === currentUser.name && email === currentUser.email}
        >
          Редактировать
        </button>
      </form>
      <button
        type="button"
        className="profile__button profile__button_exit hover-opacity"
        onClick={onLogout}
      >
        Выйти из аккаунта
      </button>
    </div>
  );
}

export default Profile;

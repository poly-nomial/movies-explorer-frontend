import React from "react";
import { Link, Navigate } from "react-router-dom";
import logo from "../images/logo.svg";

function Register({ onSubmit, loggedIn }) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const nameIsValid = React.useMemo(
    () => name.length >= 2 && name.length <= 30,
    [name]
  );
  const emailIsValid = React.useMemo(() => /\S+@\S+\.\S+/.test(email), [email]);
  const passwordIsValid = React.useMemo(() => password.length > 0, [password]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(name, email, password);
  }

  return loggedIn ? (
    <Navigate to="/" replace />
  ) : (
    <div className="sign-up">
      <Link to="/">
        <img className="sign-up__logo hover-opacity" src={logo} alt="Логотип" />
      </Link>
      <h1 className="sign-up__title">Добро пожаловать!</h1>
      <form className="sign-up__form" onSubmit={handleSubmit} noValidate>
        <p className="sign-up__input-name">Имя</p>
        <input
          type="text"
          id="name"
          className="sign-up__input sign-up__input_name"
          required
          onChange={handleNameChange}
        ></input>
        <p className="sign-up__error-text">
          {!nameIsValid && name.length > 0 ? "Некорректное имя" : ""}
        </p>
        <p className="sign-up__input-name">E-mail</p>
        <input
          type="email"
          id="email"
          className="sign-up__input sign-up__input_email"
          required
          onChange={handleEmailChange}
        />
        <p className="sign-up__error-text">
          {!emailIsValid && email.length > 0 ? "Некорректный адрес" : ""}
        </p>
        <p className="sign-up__input-name">Пароль</p>
        <input
          type="password"
          id="password"
          className="sign-up__input sign-up__input_password"
          required
          onChange={handlePasswordChange}
        />
        <button
          type="submit"
          className={`sign-up__button ${
            !(nameIsValid && emailIsValid && passwordIsValid)
              ? ""
              : "hover-opacity"
          }`}
          disabled={!(nameIsValid && emailIsValid && passwordIsValid)}
        >
          Зарегистрироваться
        </button>
        <p className="sign-up__text-line">
          Уже зарегистрированы?{" "}
          <Link to="/sign-in" className="sign-up__link hover-opacity">
            Войти
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;

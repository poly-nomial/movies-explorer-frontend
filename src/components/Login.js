import React from "react";
import { Link, Navigate } from "react-router-dom";
import logo from "../images/logo.svg";

function Login({ onSubmit, loggedIn }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const emailIsValid = React.useMemo(() => /\S+@\S+\.\S+/.test(email), [email]);
  const passwordIsValid = React.useMemo(() => password.length > 0, [password]);

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(email, password);
  }

  return loggedIn ? (
    <Navigate to="/" replace />
  ) : (
    <div className="sign-up">
      <Link to="/">
        <img className="sign-up__logo hover-opacity" src={logo} alt="Логотип" />
      </Link>
      <h1 className="sign-up__title">Рады видеть!</h1>
      <form className="sign-up__form" onSubmit={handleSubmit} noValidate>
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
          className="sign-up__button sign-in__button hover-opacity"
          disabled={!(emailIsValid && passwordIsValid)}
        >
          Войти
        </button>
        <p className="sign-up__text-line">
          Ещё не зарегистрированы?{" "}
          <Link to="/sign-up" className="sign-up__link hover-opacity">
            Регистрация
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;

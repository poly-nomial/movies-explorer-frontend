import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

function Login() {
  return (
    <div className="sign-up">
      <Link to="/">
        <img className="sign-up__logo hover-opacity" src={logo} alt="Логотип" />
      </Link>
      <h1 className="sign-up__title">Рады видеть!</h1>
      <form className="sign-up__form">
        <p className="sign-up__input-name">E-mail</p>
        <input
          type="email"
          id="email"
          className="sign-up__input sign-up__input_email"
          required
        />
        <p className="sign-up__input-name">Пароль</p>
        <input
          type="password"
          id="password"
          className="sign-up__input sign-up__input_password"
          required
        />
        <button type="submit" className="sign-up__button sign-in__button">
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

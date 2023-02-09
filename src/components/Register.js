import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

function Register() {
  return (
    <div className="sign-up">
      <Link to="/">
        <img className="sign-up__logo hover-opacity" src={logo} alt="Логотип" />
      </Link>
      <h1 className="sign-up__title">Добро пожаловать!</h1>
      <form className="sign-up__form">
        <p className="sign-up__input-name">Имя</p>
        <input
          type="text"
          id="name"
          className="sign-up__input sign-up__input_name"
          required
        />
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
        <button type="submit" className="sign-up__button">
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

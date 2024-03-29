import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import logo from "../images/logo.svg";

function Header({ handleBurgerIconClick, loggedIn }) {
  const location = useLocation();
  const backgroundColor = location.pathname === "/" ? "#F3C1F8" : "#FFFFFF";
  if (
    loggedIn &&
    (location.pathname === "/" ||
      location.pathname === "/movies" ||
      location.pathname === "/saved-movies" ||
      location.pathname === "/profile")
  ) {
    return (
      <header
        className="header header_movies"
        style={{ backgroundColor: backgroundColor }}
      >
        <Link to="/">
          <img className="logo hover-opacity" src={logo} alt="Логотип" />
        </Link>
        <div className="header__button-wrapper header__button-wrapper_movies">
          <Link to="/movies">
            <button className="header__button header__button_no-color header__button_hide-on-small-screen hover-opacity">
              Фильмы
            </button>
          </Link>
          <Link to="/saved-movies">
            <button className="header__button header__button_no-color header__button_hide-on-small-screen hover-opacity">
              Сохранённые фильмы
            </button>
          </Link>
        </div>
        <Link to="/profile">
          <button className="header__button header__button_profile header__button_hide-on-small-screen hover-opacity">
            Аккаунт
          </button>
        </Link>
        <button className="header__burger" onClick={handleBurgerIconClick} />
      </header>
    );
  } else {
    return (
      <Routes>
        <Route
          path="/"
          element={
            <header className="header" style={{ backgroundColor: "#F3C1F8" }}>
              <img className="logo" src={logo} alt="Логотип" />
              <div className="header__button-wrapper">
                <Link to="/sign-up">
                  <button className="header__button header__button_no-color hover-opacity">
                    Регистрация
                  </button>
                </Link>
                <Link to="/sign-in">
                  <button
                    className="header__button hover-opacity"
                    style={{ backgroundColor: "#000000", color: "#FFFFFF" }}
                  >
                    Войти
                  </button>
                </Link>
              </div>
            </header>
          }
        />
        <Route path="*" element={null} />
      </Routes>
    );
  }
}

export default Header;

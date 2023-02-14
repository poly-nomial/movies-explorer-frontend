import { NavLink, Link } from "react-router-dom";

function Menu() {
  return (
    <nav className="menu">
      <div className="menu__background"></div>
      <div className="menu__foreground">
        <button className="menu__close-button" />
        <div className="menu__nav-links-wrapper">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${
                isActive
                  ? "menu__nav-link_active menu__nav-link"
                  : "menu__nav-link"
              }`
            }
          >
            Главная
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              `${
                isActive
                  ? "menu__nav-link_active menu__nav-link"
                  : "menu__nav-link"
              }`
            }
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className={({ isActive }) =>
              `${
                isActive
                  ? "menu__nav-link_active menu__nav-link"
                  : "menu__nav-link"
              }`
            }
          >
            Сохранённые фильмы
          </NavLink>
        </div>
        <Link to="/profile">
          <button className="header__button header__button_profile menu__profile-button hover-opacity">
            Аккаунт
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Menu;

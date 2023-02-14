import studentPhoto from "../images/student-photo.jpg";
import arrow from "../images/arrow.svg";

function AboutMe() {
  return (
    <section className="slide about-me">
      <h2 className="slide__title">Студент</h2>
      <div className="about-me__wrapper">
        <div className="about-me__info">
          <h3 className="about-me__name">Лина</h3>
          <h4 className="about-me__job">
            Начинающий фронтенд-разработчик, 28 лет
          </h4>
          <p className="about-me__text">
            Родилась и живу в Москве. По образованию лингвист-переводчик, успела
            поработать редактором в трех издательствах и перевести несколько
            романов. Люблю кофе, кошек и компьютерные игры.
          </p>
          <a
            href="https://github.com/poly-nomial"
            target="_blank"
            rel="noreferrer"
            className="about-me__link hover-opacity"
          >
            GitHub
          </a>
        </div>
        <img
          src={studentPhoto}
          alt="Фото студента"
          className="about-me__photo"
        />
      </div>
      <h3 className="about-me__portfolio-title">Портфолио</h3>
      <ul className="link-list">
        <li className="link-list__item">
          <a
            href="https://github.com/poly-nomial/how-to-learn"
            target="_blank"
            rel="noreferrer"
            className="link-list__link hover-opacity"
          >
            Статичный сайт
            <img src={arrow} alt="Стрелка" className="link-list__image" />
          </a>
        </li>
        <li className="link-list__item">
          <a
            href="https://github.com/poly-nomial/russian-travel"
            target="_blank"
            rel="noreferrer"
            className="link-list__link hover-opacity"
          >
            Адаптивный сайт
            <img src={arrow} alt="Стрелка" className="link-list__image" />
          </a>
        </li>
        <li className="link-list__item">
          <a
            href="https://github.com/poly-nomial/react-mesto-api-full"
            target="_blank"
            rel="noreferrer"
            className="link-list__link hover-opacity"
          >
            Одностраничное приложение
            <img src={arrow} alt="Стрелка" className="link-list__image" />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default AboutMe;

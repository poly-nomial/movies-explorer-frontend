import React from "react";
import { Routes, Route } from "react-router-dom";

function Footer(props) {
  return (
    <Routes>
      {["/", "/movies", "/saved-movies"].map((path, i) => (
        <Route
          key={i}
          path={path}
          element={
            <footer className="footer">
              <div className="footer__title-line">
                Учебный проект Яндекс.Практикум х BeatFilm.
              </div>
              <div className="footer__wrapper">
                <div className="footer__copyright">&copy; 2023</div>
                <div className="footer__link-wrapper">
                  <a
                    href="https://practicum.yandex.ru"
                    target="_blank"
                    rel="noreferrer"
                    className="footer__link hover-opacity"
                  >
                    Яндекс.Практикум
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="footer__link hover-opacity"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </footer>
          }
        />
      ))}
      <Route path="*" element={null} />
    </Routes>
  );
}

export default Footer;

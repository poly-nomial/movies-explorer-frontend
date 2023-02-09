import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Main from "./components/Main.js";
import Register from "./components/Register";
import Login from "./components/Login";
import Movies from "./components/Movies";
import SavedMovies from "./components/SavedMovies";
import Profile from "./components/Profile";
import Menu from "./components/Menu";
import PageNotFound from "./components/PageNotFound";
import wordsDesignThumbnail from "./images/cardsThumbnails/33 слова о дизайне.png";
import yearsDesignThumbnail from "./images/cardsThumbnails/100 лет дизайна.png";
import banksiThumbnail from "./images/cardsThumbnails/В погоне за Бенкси.png";
import baskiaThumbnail from "./images/cardsThumbnails/Баския.png";

const cardList = [
  {
    thumbnail: wordsDesignThumbnail,
    nameRU: "33 слова о дизайне",
    duration: 107,
  },
  {
    thumbnail: yearsDesignThumbnail,
    nameRU: `Киноальманах "100 лет дизайна"`,
    duration: 63,
  },
  {
    thumbnail: banksiThumbnail,
    nameRU: "В погоне за Бенкси",
    duration: 102,
  },
  {
    thumbnail: baskiaThumbnail,
    nameRU: "Баския: взрыв реальности",
    duration: 81,
  },
];
const cardListSaved = [
  {
    thumbnail: yearsDesignThumbnail,
    nameRU: `Киноальманах "100 лет дизайна"`,
    duration: 63,
  },
  {
    thumbnail: banksiThumbnail,
    nameRU: "В погоне за Бенкси",
    duration: 102,
  },
];

function App() {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="sign-in" element={<Login />} />
        <Route path="sign-up" element={<Register />} />
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies cardList={cardList} />} />
        <Route
          path="/saved-movies"
          element={<SavedMovies cardList={cardListSaved} />}
        />
        <Route path="/profile" element={<Profile name="Лина" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Menu />
      <Footer />
    </div>
  );
}

export default App;

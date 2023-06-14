import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
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
import * as Auth from "./utils/Auth";
import api from "./utils/Api";
import ProtectedRoute from "./components/ProtectedRoute";
import movieApi from "./utils/MovieApi";
import { CurrentUserContext } from "./contexts/CurrentUserContext";
import useLocalStorage from "./hooks/useLocalStorage";
import {LoggedInState} from './types/types';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isNavMenuOpen, setIsNavMenuOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState<LoggedInState>(null);
  const [savedMoviesList, setSavedMoviesList] = React.useState([]);
  const [filteredMovieList, setFilteredMovieList] = useLocalStorage(
    "searchedMovies",
    null
  );
  const [initialSize, setInitialSize] = React.useState(12);
  const [addedSize, setAddedSize] = React.useState(3);
  const [isLoadingFilms, setIsLoadingFilms] = React.useState(false);
  const [searchQuery, setSearchQuery] = useLocalStorage(
    "moviesSearchQuery",
    ""
  );
  const [savedMoviesSearchQuery, setSavedMoviesSearchQuery] =
    React.useState("");
  const [moviesShortFilmSwitch, setMoviesShortFilmSwitch] = useLocalStorage(
    "moviesSwitchState",
    false
  );
  const [savedMoviesShortFilmSwitch, setSavedMoviesShortFilmSwitch] =
    React.useState(false);
  const [searchedMoviesCount, setSearchedMoviesCount] = React.useState(0);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [profileMessageVisible, setProfileMessageVisible] =
    React.useState(false);

  function tokenCheck() {
    return Auth.authorize()
      .then((res) => {
        if (res) {
          setCurrentUser(res);
          setLoggedIn(true);
          api.getSavedMovies().then((res) => {
            setSavedMoviesList(res);
            //navigate("/movies");
          });
        } else {
          setLoggedIn(false);
          navigate("/sign-in");
        }
      })
      .catch(() => {
        setLoggedIn(false);
        navigate("/");
      });
  }

  React.useEffect(() => {
    tokenCheck();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn]);

  React.useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  React.useEffect(() => {
    if (windowWidth >= 768 && windowWidth < 1024) {
      setInitialSize(8);
      setAddedSize(2);
    } else if (windowWidth >= 320 && windowWidth < 768) {
      setInitialSize(5);
      setAddedSize(1);
    } else if (windowWidth >= 1024 && initialSize !== 12) {
      setInitialSize(12);
      setAddedSize(3);
    }
  }, [windowWidth, initialSize]);

  function handleBurgerIconClick() {
    setIsNavMenuOpen(true);
  }

  function closeNavMenu() {
    setIsNavMenuOpen(false);
  }

  function toggleMoviesSwitchState() {
    setMoviesShortFilmSwitch(!moviesShortFilmSwitch);
  }

  function toggleSavedMoviesSwitchState() {
    setSavedMoviesShortFilmSwitch(!savedMoviesShortFilmSwitch);
  }

  function handleRegisterSubmit(name, email, password) {
    Auth.register(name, email, password)
      .then(() => {
        handleLoginSubmit(email, password);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleLoginSubmit(email, password) {
    Auth.login(email, password)
      .then(() => {
        api.getUser().then((res) => {
          setCurrentUser(res);
          setLoggedIn(true);
          if (
            location.pathname === "/sign-in" ||
            location.pathname === "/sign-up"
          ) {
            navigate("/movies");
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleProfileSubmit(email, name) {
    api
      .updateProfile(email, name)
      .then((res) => {
        setCurrentUser(res);
        setProfileMessageVisible(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function hideProfileMessage() {
    setProfileMessageVisible(false);
  }

  function handleSearch() {
    setIsLoadingFilms(true);
    setMoviesShortFilmSwitch(moviesShortFilmSwitch);
    movieApi
      .getMovies(searchQuery, 0, initialSize, moviesShortFilmSwitch)
      .then((res) => {
        setFilteredMovieList(res.items);
        setSearchedMoviesCount(res.total);
        setIsLoadingFilms(false);
      });
  }

  React.useEffect(() => {
    if (searchQuery) {
      handleSearch();
    }
  }, [moviesShortFilmSwitch]);

  function handleAddMoreMovies() {
    movieApi
      .getMovies(
        searchQuery,
        filteredMovieList.length,
        addedSize,
        moviesShortFilmSwitch
      )
      .then((res) => {
        setFilteredMovieList(filteredMovieList.concat(res.items));
        setSearchedMoviesCount(res.total);
      });
  }

  function handleSaveMovie(movie) {
    api.saveMovie(movie).then(() => {
      api.getSavedMovies().then((res) => setSavedMoviesList(res));
    });
  }

  function handleDeleteSavedMovie(movie) {
    api.deleteSavedMovie(movie).then(() => {
      api.getSavedMovies().then((res) => setSavedMoviesList(res));
    });
  }

  function resetStates() {
    setIsNavMenuOpen(false);
    setCurrentUser({});
    setLoggedIn(false);
    setSavedMoviesList([]);
    setFilteredMovieList(null);
    setInitialSize(12);
    setAddedSize(3);
    setIsLoadingFilms(false);
    setSearchQuery("");
    setSavedMoviesSearchQuery("");
    setMoviesShortFilmSwitch(false);
    setSavedMoviesShortFilmSwitch(false);
    setSearchedMoviesCount(0);
    setProfileMessageVisible(false);
  }

  function handleLogout() {
    Auth.logout().then(() => {
      resetStates();
      navigate("/");
    });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header
          handleBurgerIconClick={handleBurgerIconClick}
          loggedIn={loggedIn}
        />
        <Routes>
          <Route
            path="sign-in"
            element={<Login onSubmit={handleLoginSubmit} loggedIn={loggedIn} />}
          />
          <Route
            path="sign-up"
            element={
              <Register onSubmit={handleRegisterSubmit} loggedIn={loggedIn} />
            }
          />
          <Route path="/" element={<Main />} />
          <Route
            path="/movies"
            element={
              <ProtectedRoute
                element={Movies}
                cardList={filteredMovieList}
                loggedIn={loggedIn}
                onSearchSubmit={handleSearch}
                isLoading={isLoadingFilms}
                handleAddMoreMovies={handleAddMoreMovies}
                isMoreButtonHidden={
                  (filteredMovieList?.length ?? 0) === searchedMoviesCount
                }
                switchState={moviesShortFilmSwitch}
                toggleSwitchState={toggleMoviesSwitchState}
                saveMovie={handleSaveMovie}
                savedMoviesList={savedMoviesList}
                deleteSavedMovie={handleDeleteSavedMovie}
                searchQuery={searchQuery}
                onSearchQueryChange={setSearchQuery}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                element={SavedMovies}
                cardList={savedMoviesList}
                loggedIn={loggedIn}
                deleteSavedMovie={handleDeleteSavedMovie}
                switchState={savedMoviesShortFilmSwitch}
                toggleSwitchState={toggleSavedMoviesSwitchState}
                onSearchQueryChange={setSavedMoviesSearchQuery}
                searchQuery={savedMoviesSearchQuery}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                element={Profile}
                onSubmit={handleProfileSubmit}
                loggedIn={loggedIn}
                onLogout={handleLogout}
                messageVisible={profileMessageVisible}
                hideMessage={hideProfileMessage}
              />
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Menu isOpen={isNavMenuOpen} handleClose={closeNavMenu} />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

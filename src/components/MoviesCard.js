import React from "react";
//import { CurrentUserContext } from "../contexts/CurrentUserContext";

function MoviesCard({
  movie,
  buttonClass,
  saveMovie,
  savedMoviesList,
  deleteMovie,
}) {
  //const currentUser = React.useContext(CurrentUserContext);
  const hours = Math.floor(movie.duration / 60);
  const mins = movie.duration % 60;
  let isSaved = savedMoviesList.some(
    (savedMovie) => savedMovie.movieId === movie.id
  );

  function onButtonClick() {
    if (buttonClass === "movie-card__like" && !isSaved) {
      saveCurrentMovie();
    } else if (buttonClass === "movie-card__like" && isSaved) {
      const [savedMovie] = savedMoviesList.filter(
        (movieFromList) => movieFromList.movieId === movie.id
      );
      deleteMovie(savedMovie);
      isSaved = false;
    } else if (buttonClass === "movie-card__delete" || isSaved) {
      deleteMovie(movie);
      isSaved = false;
    }
  }

  function saveCurrentMovie() {
    const savedMovie = {
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `https://api.nomoreparties.co/${movie.image.url}`,
      thumbnail: `https://api.nomoreparties.co/${movie.image.url}`,
      trailerLink: movie.trailerLink,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    };
    saveMovie(savedMovie);
  }

  return (
    <article className="movie-card">
      <a
        className="movie-card__trailer-link"
        href={movie.trailerLink}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="movie-card__thumbnail"
          src={
            movie.image.url
              ? `https://api.nomoreparties.co/${movie.image.url}`
              : `${movie.image}`
          }
          alt="Обложка фильма"
        />
      </a>
      <div className="movie-card__description">
        <p className="movie-card__name">{movie.nameRU}</p>
        <button
          type="button"
          className={`${buttonClass} ${
            isSaved && buttonClass === "movie-card__like"
              ? "movie-card__like_active"
              : ""
          } hover-opacity`}
          onClick={onButtonClick}
        />
        <p className="movie-card__duration">{`${hours}ч ${mins}м`}</p>
      </div>
    </article>
  );
}

export default MoviesCard;

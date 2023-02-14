import { Routes, Route } from "react-router-dom";

function MoviesCard({ movie, buttonClass }) {
  const hours = Math.floor(movie.duration / 60);
  const mins = movie.duration % 60;

  return (
    <article className="movie-card">
      <img
        className="movie-card__thumbnail"
        src={movie.thumbnail}
        alt="Обложка фильма"
      />
      <div className="movie-card__description">
        <p className="movie-card__name">{movie.nameRU}</p>
        <button type="button" className={`${buttonClass} hover-opacity`} />
        <p className="movie-card__duration">{`${hours}ч ${mins}м`}</p>
      </div>
    </article>
  );
}

export default MoviesCard;

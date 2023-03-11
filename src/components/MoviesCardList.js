import React from "react";
import MoviesCard from "./MoviesCard";

function MoviesCardList(props) {
  if (props.cardList === null) {
    return null;
  } else if (props.cardList.length === 0 && props.isLoading === false) {
    return (
      <>
        <p className="movies-card-list__not-found-text">Ничего не найдено</p>
      </>
    );
  } else {
    return (
      <>
        <section className="movies-card-list">
          {props.cardList.map((movie, i) => (
            <MoviesCard
              movie={movie}
              buttonClass={props.buttonClass}
              key={i}
              saveMovie={props.saveMovie}
              savedMoviesList={props.savedMoviesList}
              deleteMovie={props.deleteSavedMovie}
            />
          ))}
        </section>
        <button
          type="button"
          className={`movies__button ${
            props.isButtonHidden ? "movies__button_hidden" : ""
          } hover-opacity`}
          onClick={props.onAddMore}
        >
          Ещё
        </button>
      </>
    );
  }
}

export default MoviesCardList;

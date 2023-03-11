import React from "react";
import SearchBar from "./SearchBar";
import MoviesCardList from "./MoviesCardList";
import Preloader from "./Preloader";

function Movies({
  cardList,
  onSearchSubmit,
  isLoading,
  handleAddMoreMovies,
  isMoreButtonHidden,
  switchState,
  toggleSwitchState,
  saveMovie,
  savedMoviesList,
  deleteSavedMovie,
  searchQuery,
  onSearchQueryChange,
}) {
  return (
    <section className="movies">
      <SearchBar
        onSubmit={onSearchSubmit}
        switchState={switchState}
        toggleSwitchState={toggleSwitchState}
        storageSearchQuery={searchQuery}
        onSearchQueryChange={onSearchQueryChange}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          cardList={cardList}
          buttonClass="movie-card__like"
          isLoading={isLoading}
          onAddMore={handleAddMoreMovies}
          isButtonHidden={isMoreButtonHidden}
          saveMovie={saveMovie}
          savedMoviesList={savedMoviesList}
          deleteSavedMovie={deleteSavedMovie}
        />
      )}
    </section>
  );
}

export default Movies;

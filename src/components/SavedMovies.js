import React from "react";
import SearchBar from "./SearchBar";
import MoviesCardList from "./MoviesCardList";

function SavedMovies({
  cardList,
  deleteSavedMovie,
  switchState,
  toggleSwitchState,
  onSearchQueryChange,
  searchQuery,
}) {
  const [filteredList, setFilteredList] = React.useState([]);
  const fieldList = [
    "nameRU",
    "nameEN",
    "director",
    "country",
    "year",
    "description",
  ];

  React.useEffect(() => {
    setFilteredList(cardList);
  }, [cardList]);

  React.useEffect(() => {
    handleSubmit();
  }, [switchState]);

  function handleSubmit() {
    const regex = new RegExp(searchQuery, "i");
    const searchResult = cardList.filter((film) =>
      fieldList.some(
        (field) =>
          regex.test(film[field]) && (!switchState || film.duration <= 40)
      )
    );
    setFilteredList(searchResult);
  }

  return (
    <section className="main movies movies_long-margin">
      <SearchBar
        onSubmit={handleSubmit}
        switchState={switchState}
        toggleSwitchState={toggleSwitchState}
        storageSearchQuery={searchQuery}
        onSearchQueryChange={onSearchQueryChange}
      />
      <MoviesCardList
        cardList={filteredList}
        buttonClass="movie-card__delete"
        savedMoviesList={cardList}
        isButtonHidden={true}
        deleteSavedMovie={deleteSavedMovie}
      />
    </section>
  );
}

export default SavedMovies;

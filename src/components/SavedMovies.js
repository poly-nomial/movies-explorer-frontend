import SearchBar from "./SearchBar";
import MoviesCardList from "./MoviesCardList";

function SavedMovies(props) {
  return (
    <section className="main movies movies_long-margin">
      <SearchBar />
      <MoviesCardList
        cardList={props.cardList}
        buttonClass="movie-card__delete"
      />
    </section>
  );
}

export default SavedMovies;

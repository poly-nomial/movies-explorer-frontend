import SearchBar from "./SearchBar";
import MoviesCardList from "./MoviesCardList";

function Movies({ cardList }) {
  return (
    <section className="movies">
      <SearchBar />
      <MoviesCardList cardList={cardList} buttonClass="movie-card__like" />
      <button type="button" className="movies__button hover-opacity">
        Ещё
      </button>
    </section>
  );
}

export default Movies;

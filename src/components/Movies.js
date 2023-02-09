import SearchBar from "./SearchBar";
import MoviesCardList from "./MoviesCardList";

function Movies({ cardList }) {
  return (
    <section className="main main__movies">
      <SearchBar />
      <MoviesCardList cardList={cardList} buttonClass="movie-card__like" />
      <button type="button" className="movies__button hover-opacity">
        Ещё
      </button>
    </section>
  );
}

export default Movies;
